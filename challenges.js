/* =====================================================================
   Code For ME — Daily Challenge content
   ---------------------------------------------------------------------
   One challenge a day. Day 1 is START_DATE, and the site moves to the
   next challenge at midnight. Difficulty rotates:

     Day 1 Easy, Day 2 Medium, Day 3 Hard, Day 4 Easy, ...

   Day n uses LEVELS[level][k], where k counts up by one every 3 days.
   Add new challenges to the END of a list so past days never change.
   When a list runs out it loops back to the start.

   The challenges live in three files:
     challenges-easy.js   — print / input / if / simple loops
     challenges-medium.js — write a function with a loop or decision
     challenges-hard.js   — lists, strings, and real algorithms

   Two helpers make a challenge:

   out({ title, prompt, starter, hints, solution, tests })
     Runs the whole program and compares what it prints.
     tests: [[inputs, expected], ...]
       inputs   — list of answers fed to input(), in order
       expected — exactly what should be printed
     Prompts like input("Name? ") are NOT counted in the output.

   fn({ title, prompt, sig, ret, example, hints, solution, tests })
     Calls a function and compares what it returns.
     sig      — the def line without "def", e.g. "add(a, b)"
     ret      — the placeholder the starter code returns, e.g. "0"
     example  — a call to print in the starter code, e.g. "add(2, 3)"
     tests: [[args, expected], ...]

   In prompt and hint text, wrap code in `backticks`.
   Solutions are written in `template strings` — if a solution uses
   an f-string with a dollar sign, write \${ instead of ${.
   ===================================================================== */

const START_DATE = "2026-10-08"; // Day 1
const ROTATION = ["easy", "medium", "hard"];

const LEVELS = {};

function trimCode(s) {
  return s.replace(/^\n/, "");
}

function out(c) {
  return {
    title: c.title,
    prompt: c.prompt,
    starter: trimCode(c.starter),
    hints: c.hints,
    solution: trimCode(c.solution),
    check: { type: "output", tests: c.tests.map(([inputs, expected]) => ({ inputs, expected })) },
  };
}

function fn(c) {
  const name = c.sig.slice(0, c.sig.indexOf("("));
  return {
    title: c.title,
    prompt: c.prompt,
    starter: `def ${c.sig}:\n    # your code here\n    return ${c.ret}\n\nprint(${c.example})\n`,
    hints: c.hints,
    solution: trimCode(c.solution),
    check: { type: "function", name, tests: c.tests.map(([args, expected]) => ({ args, expected })) },
  };
}
