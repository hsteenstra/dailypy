/* Runs student Python in a Web Worker so an infinite loop can be stopped
   without freezing the page. */

importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js");

const HARNESS = `
import sys, io, json, math, copy, traceback

def _fmt_err():
    t, v, tb = sys.exc_info()
    line = None
    if isinstance(v, SyntaxError) and v.filename == "main.py":
        return f"Line {v.lineno}: SyntaxError: {v.msg}"
    for fr in traceback.extract_tb(tb):
        if fr.filename == "main.py":
            line = fr.lineno
    msg = f"{t.__name__}: {v}"
    return f"Line {line}: {msg}" if line else msg

def _exec(code, inputs, echo):
    out = io.StringIO()
    feed = list(inputs)
    def fake_input(prompt=""):
        if echo:
            out.write(str(prompt))
        if not feed:
            raise EOFError("Your program asked for more input than this test gives it.")
        value = feed.pop(0)
        if echo:
            out.write(value + "\\n")
        return value
    ns = {"__name__": "__main__", "input": fake_input}
    old = sys.stdout
    sys.stdout = out
    err = None
    try:
        exec(compile(code, "main.py", "exec"), ns)
    except BaseException:
        err = _fmt_err()
    finally:
        sys.stdout = old
    return ns, out.getvalue(), err

def _clean(text):
    return "\\n".join(line.rstrip() for line in text.strip("\\n").split("\\n")).strip("\\n")

def _same(got, expected):
    if isinstance(got, tuple):
        got = list(got)
    if isinstance(expected, float) and isinstance(got, (int, float)) and not isinstance(got, bool):
        return math.isclose(got, expected, rel_tol=1e-9, abs_tol=1e-9)
    if isinstance(got, bool) != isinstance(expected, bool):
        return False
    if isinstance(got, list) and isinstance(expected, list):
        return len(got) == len(expected) and all(_same(g, e) for g, e in zip(got, expected))
    return got == expected

def run_code(code, inputs_json):
    _, out, err = _exec(code, json.loads(inputs_json), True)
    return json.dumps({"output": out, "error": err})

def check_code(code, spec_json):
    spec = json.loads(spec_json)
    results = []
    if spec["type"] == "output":
        for t in spec["tests"]:
            _, out, err = _exec(code, t["inputs"], False)
            got = err if err else _clean(out)
            label = "Input: " + ", ".join(repr(i) for i in t["inputs"]) if t["inputs"] else "Run the program"
            results.append({"label": label, "expected": t["expected"], "got": got,
                            "ok": err is None and got == _clean(t["expected"]), "error": err is not None})
        return json.dumps({"results": results, "error": None})

    ns, _, err = _exec(code, [], False)
    if err:
        return json.dumps({"results": [], "error": err})
    fn = ns.get(spec["name"])
    if not callable(fn):
        return json.dumps({"results": [], "error": f"Couldn't find a function named {spec['name']}. Check the spelling in your def line."})
    for t in spec["tests"]:
        label = f"{spec['name']}(" + ", ".join(repr(a) for a in t["args"]) + ")"
        old = sys.stdout
        sys.stdout = io.StringIO()
        try:
            got = fn(*copy.deepcopy(t["args"]))
            ok = _same(got, t["expected"])
            results.append({"label": label, "expected": repr(t["expected"]), "got": repr(got), "ok": ok, "error": False})
        except BaseException:
            results.append({"label": label, "expected": repr(t["expected"]), "got": _fmt_err(), "ok": False, "error": True})
        finally:
            sys.stdout = old
    return json.dumps({"results": results, "error": None})
`;

let py = null;

(async () => {
  try {
    py = await loadPyodide();
    py.runPython(HARNESS);
    postMessage({ type: "ready" });
  } catch (e) {
    postMessage({ type: "failed", error: String(e) });
  }
})();

onmessage = (e) => {
  const { id, action, code, payload } = e.data;
  try {
    const fn = py.globals.get(action === "run" ? "run_code" : "check_code");
    const result = JSON.parse(fn(code, JSON.stringify(payload)));
    postMessage({ type: "result", id, result });
  } catch (err) {
    postMessage({ type: "result", id, result: { error: String(err), output: "", results: [] } });
  }
};
