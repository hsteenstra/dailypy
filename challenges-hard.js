/* Hard: lists, strings, and real algorithms. See challenges.js for the format. */

LEVELS.hard = [
  fn({
    title: "Vowel Counter",
    prompt: "Write `count_vowels(text)` that returns how many vowels (a, e, i, o, u) are in `text`. Uppercase vowels count too.",
    sig: "count_vowels(text)", ret: "0", example: 'count_vowels("Maine")',
    hints: ["Loop over each letter with `for letter in text:` and keep a counter.", 'Use `letter.lower() in "aeiou"` to check for a vowel in any case.'],
    solution: `
def count_vowels(text):
    count = 0
    for letter in text:
        if letter.lower() in "aeiou":
            count += 1
    return count
`,
    tests: [[["Maine"], 3], [["Bath"], 1], [["rhythm"], 0], [["AEIOU are vowels"], 9], [[""], 0]],
  }),
  fn({
    title: "Lobster Buoy",
    prompt: 'Write `lobster_buoy(n)` that returns a list of strings for the numbers 1 to n. Multiples of 3 become `"Lobster"`, multiples of 5 become `"Buoy"`, multiples of both become `"LobsterBuoy"`, and every other number becomes its digits as a string, like `"7"`.',
    sig: "lobster_buoy(n)", ret: "[]", example: "lobster_buoy(15)",
    hints: ["Check the both-case first: `if i % 15 == 0`.", "Use `result.append(...)` to add to the list, and `str(i)` to turn a number into text."],
    solution: `
def lobster_buoy(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("LobsterBuoy")
        elif i % 3 == 0:
            result.append("Lobster")
        elif i % 5 == 0:
            result.append("Buoy")
        else:
            result.append(str(i))
    return result
`,
    tests: [[[1], ["1"]], [[5], ["1", "2", "Lobster", "4", "Buoy"]], [[15], ["1", "2", "Lobster", "4", "Buoy", "Lobster", "7", "8", "Lobster", "Buoy", "11", "Lobster", "13", "14", "LobsterBuoy"]]],
  }),
  fn({
    title: "Warm Streak",
    prompt: "Write `longest_warm_streak(temps, warm)` that returns the longest run of days in a row where the temperature was `warm` or higher. For `[60, 72, 75, 68, 80, 81, 82]` with `warm = 70`, the answer is `3`.",
    sig: "longest_warm_streak(temps, warm)", ret: "0", example: "longest_warm_streak([60, 72, 75, 68, 80, 81, 82], 70)",
    hints: ["Keep two counters: the current streak and the best streak so far.", "When a day is warm, add 1 to current and update best. When it isn't, reset current to 0."],
    solution: `
def longest_warm_streak(temps, warm):
    best = 0
    current = 0
    for t in temps:
        if t >= warm:
            current += 1
            best = max(best, current)
        else:
            current = 0
    return best
`,
    tests: [[[[60, 72, 75, 68, 80, 81, 82], 70], 3], [[[60, 72, 75, 68, 80, 81, 82, 55], 70], 3], [[[40, 45], 70], 0], [[[70, 70, 70], 70], 3], [[[], 70], 0]],
  }),
  fn({
    title: "Caesar Cipher",
    prompt: 'Write `caesar(text, shift)` that moves every letter `shift` places down the alphabet, wrapping from z back to a. Keep uppercase letters uppercase, and leave spaces and punctuation alone. `caesar("Hello, Maine!", 1)` is `"Ifmmp, Nbjof!"`. Negative shifts go backwards.',
    sig: "caesar(text, shift)", ret: "text", example: 'caesar("Hello, Maine!", 1)',
    hints: ['`ord("a")` turns a letter into a number and `chr(...)` turns it back. Use `% 26` to wrap around.', 'For a lowercase letter: `chr((ord(c) - ord("a") + shift) % 26 + ord("a"))`. Do the same with `"A"` for uppercase.'],
    solution: `
def caesar(text, shift):
    result = ""
    for c in text:
        if c.islower():
            result += chr((ord(c) - ord("a") + shift) % 26 + ord("a"))
        elif c.isupper():
            result += chr((ord(c) - ord("A") + shift) % 26 + ord("A"))
        else:
            result += c
    return result
`,
    tests: [[["abc", 1], "bcd"], [["xyz", 3], "abc"], [["Hello, Maine!", 1], "Ifmmp, Nbjof!"], [["Byte", 26], "Byte"], [["bcd", -1], "abc"]],
  }),
  fn({
    title: "Making Change",
    prompt: "Write `make_change(cents)` that returns a list `[quarters, dimes, nickels, pennies]` using the fewest coins. `make_change(41)` is `[1, 1, 1, 1]`.",
    sig: "make_change(cents)", ret: "[0, 0, 0, 0]", example: "make_change(41)",
    hints: ["Use as many quarters as you can first, then dimes, then nickels, then pennies.", "`cents // 25` is how many quarters fit. `cents % 25` is what's left over."],
    solution: `
def make_change(cents):
    coins = []
    for value in [25, 10, 5, 1]:
        coins.append(cents // value)
        cents = cents % value
    return coins
`,
    tests: [[[41], [1, 1, 1, 1]], [[99], [3, 2, 0, 4]], [[0], [0, 0, 0, 0]], [[30], [1, 0, 1, 0]], [[7], [0, 0, 1, 2]]],
  }),
  fn({
    title: "Pyramid Builder",
    prompt: 'Write `pyramid(n)` that returns a list of strings that make a pyramid `n` rows tall. `pyramid(3)` is `["  *", " ***", "*****"]`. Each row has spaces in front and no spaces after.',
    sig: "pyramid(n)", ret: "[]", example: "pyramid(3)",
    hints: ["Row 1 has 1 star, row 2 has 3, row 3 has 5. That's `2 * i - 1` stars on row i.", 'The spaces in front shrink by one each row: `" " * (n - i)`.'],
    solution: `
def pyramid(n):
    rows = []
    for i in range(1, n + 1):
        rows.append(" " * (n - i) + "*" * (2 * i - 1))
    return rows
`,
    tests: [[[3], ["  *", " ***", "*****"]], [[1], ["*"]], [[0], []], [[4], ["   *", "  ***", " *****", "*******"]]],
  }),
  fn({
    title: "Tic-Tac-Toe Judge",
    prompt: 'A board is a list of 3 strings, like `["XXX", "O.O", "..."]`, where `.` is an empty square. Write `winner(board)` that returns `"X"` or `"O"` if someone has three in a row (across, down, or diagonal), or `"Nobody"` if not.',
    sig: "winner(board)", ret: '"Nobody"', example: 'winner(["XXX", "O.O", "..."])',
    hints: ["`board[row][col]` gives you one square. There are 8 lines to check: 3 rows, 3 columns, 2 diagonals.", 'Build a list of all 8 lines as strings, then check if any equals `"XXX"` or `"OOO"`.'],
    solution: `
def winner(board):
    lines = []
    for i in range(3):
        lines.append(board[i])
        lines.append(board[0][i] + board[1][i] + board[2][i])
    lines.append(board[0][0] + board[1][1] + board[2][2])
    lines.append(board[0][2] + board[1][1] + board[2][0])
    for player in ["X", "O"]:
        if player * 3 in lines:
            return player
    return "Nobody"
`,
    tests: [[[["XXX", "O.O", "..."]], "X"], [[["XO.", "XO.", ".O."]], "O"], [[["XO.", "OX.", "..X"]], "X"], [[["..O", ".O.", "O.."]], "O"], [[["XOX", "OOX", "XXO"]], "Nobody"]],
  }),
  fn({
    title: "Most Common Letter",
    prompt: 'Write `most_common_letter(text)` that returns the letter that shows up most, in lowercase. Ignore case, spaces, and punctuation. If there\'s a tie, return the one that comes first in the alphabet. `most_common_letter("Mississippi")` is `"i"`.',
    sig: "most_common_letter(text)", ret: '""', example: 'most_common_letter("Hello World")',
    hints: ["Use a dictionary to count: `counts[c] = counts.get(c, 0) + 1`. Skip anything where `c.isalpha()` is False.", "Loop over `sorted(counts)` and only replace your best when a count is strictly bigger. That handles ties."],
    solution: `
def most_common_letter(text):
    counts = {}
    for c in text.lower():
        if c.isalpha():
            counts[c] = counts.get(c, 0) + 1
    best = ""
    for letter in sorted(counts):
        if best == "" or counts[letter] > counts[best]:
            best = letter
    return best
`,
    tests: [[["Hello World"], "l"], [["Mississippi"], "i"], [["Maine"], "a"], [["zzz aa"], "z"], [["Bath, Maine!"], "a"]],
  }),
  fn({
    title: "Runner-Up",
    prompt: "Write `second_largest(nums)` that returns the second biggest different number in the list. `[9, 9, 4]` gives `4`. The list always has at least two different numbers.",
    sig: "second_largest(nums)", ret: "0", example: "second_largest([3, 9, 5])",
    hints: ["Remove duplicates first with `set(nums)`.", "Sort what's left and take the second-to-last: `sorted(set(nums))[-2]`."],
    solution: `
def second_largest(nums):
    return sorted(set(nums))[-2]
`,
    tests: [[[[3, 9, 5]], 5], [[[9, 9, 4]], 4], [[[1, 2]], 1], [[[-1, -7, -3]], -3]],
  }),
  fn({
    title: "Run-Length Encoding",
    prompt: 'Write `run_length(text)` that squishes repeated letters into the letter plus a count. `"aaabcc"` becomes `"a3b1c2"`.',
    sig: "run_length(text)", ret: '""', example: 'run_length("aaabcc")',
    hints: ["Walk through the text keeping track of the current letter and how many times in a row you've seen it.", "When the letter changes, add the old letter and its count to the result. Don't forget the last group."],
    solution: `
def run_length(text):
    if text == "":
        return ""
    result = ""
    current = text[0]
    count = 0
    for c in text:
        if c == current:
            count += 1
        else:
            result += current + str(count)
            current = c
            count = 1
    return result + current + str(count)
`,
    tests: [[["aaabcc"], "a3b1c2"], [[""], ""], [["x"], "x1"], [["aabbaa"], "a2b2a2"]],
  }),
  fn({
    title: "Balanced Brackets",
    prompt: 'Write `is_balanced(s)` that returns `True` if every `(`, `[`, and `{` is closed by the matching bracket in the right order. `"([])"` is balanced, but `"([)]"` is not.',
    sig: "is_balanced(s)", ret: "None", example: 'is_balanced("([])")',
    hints: ["Use a list as a stack: push opening brackets with `append`, and `pop` when you see a closer.", 'When you see a closer, the stack must not be empty and the popped bracket must match. At the end, the stack must be empty.'],
    solution: `
def is_balanced(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for c in s:
        if c in "([{":
            stack.append(c)
        elif c in pairs:
            if not stack or stack.pop() != pairs[c]:
                return False
    return len(stack) == 0
`,
    tests: [[["(())"], true], [["([)]"], false], [[""], true], [["(("], false], [["{[]}"], true], [["())"], false]],
  }),
  fn({
    title: "To Binary",
    prompt: 'Write `to_binary(n)` that returns `n` written in binary as a string, without using `bin`. `to_binary(5)` is `"101"`.',
    sig: "to_binary(n)", ret: '""', example: "to_binary(5)",
    hints: ["`n % 2` gives the last binary digit, and `n // 2` drops it.", 'Repeat while `n > 0`, adding each digit to the FRONT of your string. Handle 0 on its own.'],
    solution: `
def to_binary(n):
    if n == 0:
        return "0"
    result = ""
    while n > 0:
        result = str(n % 2) + result
        n = n // 2
    return result
`,
    tests: [[[5], "101"], [[0], "0"], [[8], "1000"], [[1], "1"], [[255], "11111111"]],
  }),
  fn({
    title: "From Binary",
    prompt: 'Write `from_binary(s)` that turns a binary string back into a number, without using `int(s, 2)`. `from_binary("101")` is `5`.',
    sig: "from_binary(s)", ret: "0", example: 'from_binary("101")',
    hints: ["Go left to right. Each new digit doubles what you had, then adds the digit.", "`value = value * 2 + int(d)`"],
    solution: `
def from_binary(s):
    value = 0
    for d in s:
        value = value * 2 + int(d)
    return value
`,
    tests: [[["101"], 5], [["0"], 0], [["11111111"], 255], [["1000"], 8]],
  }),
  fn({
    title: "Fibonacci",
    prompt: "Write `fibonacci(n)` that returns the first `n` Fibonacci numbers. Each number is the sum of the two before it: `[0, 1, 1, 2, 3, 5, ...]`.",
    sig: "fibonacci(n)", ret: "[]", example: "fibonacci(5)",
    hints: ["Keep two variables, `a = 0` and `b = 1`.", "Loop n times: append `a`, then `a, b = b, a + b`."],
    solution: `
def fibonacci(n):
    result = []
    a, b = 0, 1
    for i in range(n):
        result.append(a)
        a, b = b, a + b
    return result
`,
    tests: [[[5], [0, 1, 1, 2, 3]], [[1], [0]], [[0], []], [[10], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]]],
  }),
  fn({
    title: "Flatten",
    prompt: "Write `flatten(lists)` that takes a list of lists and returns one list with everything in order. `[[1, 2], [3], []]` gives `[1, 2, 3]`.",
    sig: "flatten(lists)", ret: "lists", example: "flatten([[1, 2], [3], []])",
    hints: ["You need a loop inside a loop.", "For each inner list, append each of its items to the result. Or use `result.extend(inner)`."],
    solution: `
def flatten(lists):
    result = []
    for inner in lists:
        for item in inner:
            result.append(item)
    return result
`,
    tests: [[[[[1, 2], [3], []]], [1, 2, 3]], [[[]], []], [[[["a"], ["b", "c"]]], ["a", "b", "c"]]],
  }),
  fn({
    title: "Merge Two Lines",
    prompt: "Write `merge_sorted(a, b)` that takes two sorted lists and returns one sorted list, without using `sort` or `sorted`.",
    sig: "merge_sorted(a, b)", ret: "a + b", example: "merge_sorted([1, 4, 7], [2, 3, 9])",
    hints: ["Keep a position in each list, `i` and `j`. Compare `a[i]` and `b[j]` and take the smaller one.", "When one list runs out, add the rest of the other: `result + a[i:] + b[j:]`."],
    solution: `
def merge_sorted(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i])
            i += 1
        else:
            result.append(b[j])
            j += 1
    return result + a[i:] + b[j:]
`,
    tests: [[[[1, 4, 7], [2, 3, 9]], [1, 2, 3, 4, 7, 9]], [[[], [1]], [1]], [[[5], []], [5]], [[[1, 1], [1]], [1, 1, 1]]],
  }),
  fn({
    title: "Bubble Sort",
    prompt: "Write `bubble_sort(nums)` that returns the numbers sorted from smallest to biggest, without using `sort` or `sorted`.",
    sig: "bubble_sort(nums)", ret: "nums", example: "bubble_sort([3, 1, 2])",
    hints: ["Bubble sort walks through the list swapping neighbors that are in the wrong order.", "Repeat that walk `len(nums)` times. Swap with `nums[j], nums[j + 1] = nums[j + 1], nums[j]`."],
    solution: `
def bubble_sort(nums):
    nums = nums[:]
    for i in range(len(nums)):
        for j in range(len(nums) - 1 - i):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
    return nums
`,
    tests: [[[[3, 1, 2]], [1, 2, 3]], [[[]], []], [[[5, 5, 1]], [1, 5, 5]], [[[9, 8, 7, 6]], [6, 7, 8, 9]]],
  }),
  fn({
    title: "Word Frequency",
    prompt: 'Write `word_counts(text)` that returns a dictionary of how many times each word appears, all lowercase. `"The cat the dog"` gives `{"the": 2, "cat": 1, "dog": 1}`.',
    sig: "word_counts(text)", ret: "{}", example: 'word_counts("The cat the dog")',
    hints: ["Split the lowercase text into words.", "`counts[word] = counts.get(word, 0) + 1`"],
    solution: `
def word_counts(text):
    counts = {}
    for word in text.lower().split():
        counts[word] = counts.get(word, 0) + 1
    return counts
`,
    tests: [[["The cat the dog"], { the: 2, cat: 1, dog: 1 }], [["Maine"], { maine: 1 }], [["a a a"], { a: 3 }]],
  }),
  fn({
    title: "Rotate",
    prompt: "Write `rotate(items, k)` that moves every item `k` places to the right, wrapping around. `rotate([1, 2, 3, 4], 1)` is `[4, 1, 2, 3]`.",
    sig: "rotate(items, k)", ret: "items", example: "rotate([1, 2, 3, 4], 1)",
    hints: ["Rotating by the list's length puts it back where it started, so use `k % len(items)`. Watch out for an empty list.", "`items[-k:] + items[:-k]` rotates right, but only when k is not 0."],
    solution: `
def rotate(items, k):
    if len(items) == 0:
        return []
    k = k % len(items)
    if k == 0:
        return items[:]
    return items[-k:] + items[:-k]
`,
    tests: [[[[1, 2, 3, 4], 1], [4, 1, 2, 3]], [[[1, 2, 3], 3], [1, 2, 3]], [[[1, 2, 3], 4], [3, 1, 2]], [[[], 2], []]],
  }),
  fn({
    title: "Collatz Steps",
    prompt: "Start with a number. If it's even, halve it. If it's odd, triple it and add 1. Write `collatz_steps(n)` that returns how many steps it takes to reach 1.",
    sig: "collatz_steps(n)", ret: "None", example: "collatz_steps(6)",
    hints: ["Use a `while n != 1:` loop and count each step.", "Even: `n = n // 2`. Odd: `n = 3 * n + 1`."],
    solution: `
def collatz_steps(n):
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps
`,
    tests: [[[1], 0], [[6], 8], [[27], 111], [[2], 1]],
  }),
  fn({
    title: "Digital Root",
    prompt: "Add up a number's digits. If the answer has more than one digit, do it again. Keep going until one digit is left. Write `digital_root(n)`. `942` gives 9 + 4 + 2 = 15, then 1 + 5 = `6`.",
    sig: "digital_root(n)", ret: "None", example: "digital_root(942)",
    hints: ["Loop `while n >= 10:`.", "Inside, replace n with the sum of its digits: `sum(int(d) for d in str(n))`."],
    solution: `
def digital_root(n):
    while n >= 10:
        n = sum(int(d) for d in str(n))
    return n
`,
    tests: [[[16], 7], [[942], 6], [[0], 0], [[132189], 6]],
  }),
  fn({
    title: "Pig Latin",
    prompt: 'Write `pig_latin(word)` for a lowercase word. If it starts with a vowel, add `"way"`. Otherwise, move all the letters before the first vowel to the end and add `"ay"`. `"string"` becomes `"ingstray"`. A word with no vowels just gets `"ay"`.',
    sig: "pig_latin(word)", ret: "word", example: 'pig_latin("string")',
    hints: ["Find the position of the first vowel with a loop.", "Then return `word[i:] + word[:i] + \"ay\"`."],
    solution: `
def pig_latin(word):
    if word[0] in "aeiou":
        return word + "way"
    for i in range(len(word)):
        if word[i] in "aeiou":
            return word[i:] + word[:i] + "ay"
    return word + "ay"
`,
    tests: [[["pig"], "igpay"], [["apple"], "appleway"], [["string"], "ingstray"], [["rhythm"], "rhythmay"]],
  }),
  fn({
    title: "Count the Islands",
    prompt: 'A map is a list of strings, where `#` is land and `.` is water. Land squares touching up, down, left, or right are the same island. Write `count_islands(grid)` that returns how many islands there are. Maine has thousands!',
    sig: "count_islands(grid)", ret: "0", example: 'count_islands(["#..", "...", "..#"])',
    hints: ["Loop over every square. When you find land you haven't visited, that's a new island.", "From there, visit every connected land square (with a stack or recursion) and mark them as seen so you don't count them again."],
    solution: `
def count_islands(grid):
    seen = set()
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[r])):
            if grid[r][c] == "#" and (r, c) not in seen:
                count += 1
                stack = [(r, c)]
                while stack:
                    y, x = stack.pop()
                    if (y, x) in seen:
                        continue
                    if y < 0 or y >= len(grid) or x < 0 or x >= len(grid[y]):
                        continue
                    if grid[y][x] != "#":
                        continue
                    seen.add((y, x))
                    stack += [(y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)]
    return count
`,
    tests: [[[["#..", "...", "..#"]], 2], [[["##.", "#..", "..#"]], 2], [[["..."]], 0], [[["#.#.#"]], 3], [[["###", "#.#", "###"]], 1]],
  }),
  fn({
    title: "Transpose",
    prompt: "Write `transpose(grid)` that flips a grid of numbers so rows become columns. `[[1, 2], [3, 4]]` becomes `[[1, 3], [2, 4]]`.",
    sig: "transpose(grid)", ret: "grid", example: "transpose([[1, 2], [3, 4]])",
    hints: ["The new grid has one row for each column of the old one.", "New row `c` is `[row[c] for row in grid]`."],
    solution: `
def transpose(grid):
    return [[row[c] for row in grid] for c in range(len(grid[0]))]
`,
    tests: [[[[[1, 2], [3, 4]]], [[1, 3], [2, 4]]], [[[[1, 2, 3]]], [[1], [2], [3]]], [[[[5]]], [[5]]]],
  }),
  fn({
    title: "Diagonal Sum",
    prompt: "Write `diagonal_sum(grid)` that adds the numbers on the diagonal from the top-left to the bottom-right of a square grid.",
    sig: "diagonal_sum(grid)", ret: "0", example: "diagonal_sum([[1, 2], [3, 4]])",
    hints: ["The diagonal squares are where the row number equals the column number.", "Add up `grid[i][i]` for every i."],
    solution: `
def diagonal_sum(grid):
    total = 0
    for i in range(len(grid)):
        total += grid[i][i]
    return total
`,
    tests: [[[[[1, 2], [3, 4]]], 5], [[[[5]]], 5], [[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], 15]],
  }),
  fn({
    title: "Roman Numerals",
    prompt: 'Write `to_roman(n)` that turns a number from 1 to 3999 into Roman numerals. `4` is `"IV"`, `9` is `"IX"`, and `2026` is `"MMXXVI"`.',
    sig: "to_roman(n)", ret: '""', example: "to_roman(2026)",
    hints: ['Make a list of values from big to small, including the tricky ones: `1000 "M"`, `900 "CM"`, `500 "D"`, `400 "CD"`, `100 "C"`, `90 "XC"`, `50 "L"`, `40 "XL"`, `10 "X"`, `9 "IX"`, `5 "V"`, `4 "IV"`, `1 "I"`.', "For each value, while n is at least that big, add the letters and subtract the value."],
    solution: `
def to_roman(n):
    values = [(1000, "M"), (900, "CM"), (500, "D"), (400, "CD"), (100, "C"), (90, "XC"),
              (50, "L"), (40, "XL"), (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")]
    result = ""
    for value, letters in values:
        while n >= value:
            result += letters
            n -= value
    return result
`,
    tests: [[[4], "IV"], [[9], "IX"], [[14], "XIV"], [[2026], "MMXXVI"], [[1994], "MCMXCIV"]],
  }),
  fn({
    title: "Reading Roman",
    prompt: 'Write `from_roman(s)` that turns Roman numerals into a number. `"IV"` is `4` and `"MCMXCIV"` is `1994`.',
    sig: "from_roman(s)", ret: "0", example: 'from_roman("MCMXCIV")',
    hints: ["Make a dictionary of each letter's value.", "If a letter is smaller than the one after it, subtract it. Otherwise add it."],
    solution: `
def from_roman(s):
    v = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    total = 0
    for i in range(len(s)):
        if i + 1 < len(s) and v[s[i]] < v[s[i + 1]]:
            total -= v[s[i]]
        else:
            total += v[s[i]]
    return total
`,
    tests: [[["IV"], 4], [["MMXXVI"], 2026], [["MCMXCIV"], 1994], [["III"], 3]],
  }),
  fn({
    title: "Missing Number",
    prompt: "A list has every number from 0 to n except one. Write `missing_number(nums)` that finds it. `[0, 1, 3]` is missing `2`.",
    sig: "missing_number(nums)", ret: "None", example: "missing_number([0, 1, 3])",
    hints: ["The list has n numbers, so the full set is 0 to n where n is `len(nums)`.", "The sum of 0 to n is `n * (n + 1) // 2`. Subtract the actual sum."],
    solution: `
def missing_number(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)
`,
    tests: [[[[0, 1, 3]], 2], [[[1]], 0], [[[0]], 1], [[[3, 0, 1]], 2]],
  }),
  fn({
    title: "Two Sum",
    prompt: "Write `two_sum(nums, target)` that returns the positions `[i, j]` (with i before j) of the first pair of numbers that add up to `target`, or `[]` if there isn't one.",
    sig: "two_sum(nums, target)", ret: "[]", example: "two_sum([2, 7, 11, 15], 9)",
    hints: ["Try every pair with a loop inside a loop.", "Have the inner loop start at `i + 1` so you never pair a number with itself."],
    solution: `
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
`,
    tests: [[[[2, 7, 11, 15], 9], [0, 1]], [[[3, 2, 4], 6], [1, 2]], [[[1, 2], 7], []]],
  }),
  fn({
    title: "Greatest Common Divisor",
    prompt: "Write `gcd(a, b)` that returns the biggest number that divides both `a` and `b`. Try Euclid's trick: replace `(a, b)` with `(b, a % b)` until `b` is 0.",
    sig: "gcd(a, b)", ret: "None", example: "gcd(12, 18)",
    hints: ["Use `while b != 0:`.", "Inside: `a, b = b, a % b`. When the loop ends, `a` is the answer."],
    solution: `
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
`,
    tests: [[[12, 18], 6], [[7, 5], 1], [[0, 9], 9], [[100, 75], 25]],
  }),
  fn({
    title: "Least Common Multiple",
    prompt: "Write `lcm(a, b)` that returns the smallest number that both `a` and `b` divide into evenly.",
    sig: "lcm(a, b)", ret: "None", example: "lcm(4, 6)",
    hints: ["Count up from the bigger number until you find one that both divide.", "Faster: `a * b // gcd(a, b)`."],
    solution: `
def lcm(a, b):
    n = max(a, b)
    while n % a != 0 or n % b != 0:
        n += 1
    return n
`,
    tests: [[[4, 6], 12], [[3, 5], 15], [[7, 7], 7], [[6, 8], 24]],
  }),
  fn({
    title: "Prime Sieve",
    prompt: "Write `primes_up_to(n)` that returns a list of every prime number from 2 to `n`.",
    sig: "primes_up_to(n)", ret: "[]", example: "primes_up_to(10)",
    hints: ["Check each number from 2 to n to see if it's prime.", "A number is prime if nothing from 2 up to its square root divides it."],
    solution: `
def primes_up_to(n):
    primes = []
    for k in range(2, n + 1):
        is_prime = True
        for d in range(2, int(k ** 0.5) + 1):
            if k % d == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(k)
    return primes
`,
    tests: [[[10], [2, 3, 5, 7]], [[2], [2]], [[1], []], [[30], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]]],
  }),
  fn({
    title: "Chunk It",
    prompt: "Write `chunk(items, size)` that splits a list into smaller lists of `size` items. The last one can be shorter. `chunk([1, 2, 3, 4, 5], 2)` is `[[1, 2], [3, 4], [5]]`.",
    sig: "chunk(items, size)", ret: "[]", example: "chunk([1, 2, 3, 4, 5], 2)",
    hints: ["`range(0, len(items), size)` gives the starting position of each chunk.", "Each chunk is `items[i:i + size]`."],
    solution: `
def chunk(items, size):
    return [items[i:i + size] for i in range(0, len(items), size)]
`,
    tests: [[[[1, 2, 3, 4, 5], 2], [[1, 2], [3, 4], [5]]], [[[], 3], []], [[[1, 2, 3], 3], [[1, 2, 3]]]],
  }),
  fn({
    title: "Common Start",
    prompt: 'Write `common_prefix(words)` that returns the longest beginning that every word shares. `["flower", "flow", "flight"]` gives `"fl"`. An empty list gives `""`.',
    sig: "common_prefix(words)", ret: '""', example: 'common_prefix(["flower", "flow", "flight"])',
    hints: ["Start with the first word as your guess.", "While some word doesn't start with your guess, chop the last letter off it: `prefix = prefix[:-1]`."],
    solution: `
def common_prefix(words):
    if not words:
        return ""
    prefix = words[0]
    for w in words[1:]:
        while not w.startswith(prefix):
            prefix = prefix[:-1]
    return prefix
`,
    tests: [[[["flower", "flow", "flight"]], "fl"], [[["dog", "car"]], ""], [[["maine"]], "maine"], [[[]], ""]],
  }),
  fn({
    title: "Strong Password",
    prompt: "Write `strong_password(pw)` that returns `True` only if the password has at least 8 characters, an uppercase letter, a lowercase letter, and a digit.",
    sig: "strong_password(pw)", ret: "None", example: 'strong_password("Byte2026")',
    hints: ["Check each rule separately and combine them with `and`.", "`any(c.isupper() for c in pw)` checks for an uppercase letter."],
    solution: `
def strong_password(pw):
    return (len(pw) >= 8
            and any(c.isupper() for c in pw)
            and any(c.islower() for c in pw)
            and any(c.isdigit() for c in pw))
`,
    tests: [[["Byte2026"], true], [["byte2026"], false], [["Byte"], false], [["BYTEBYTE1"], false], [["Lobster99"], true], [["Lobstersss"], false]],
  }),
  fn({
    title: "Overlapping Count",
    prompt: 'Write `count_overlapping(text, sub)` that counts how many times `sub` appears, including overlaps. `count_overlapping("aaaa", "aa")` is `3`. (Python\'s `.count()` would say 2.)',
    sig: "count_overlapping(text, sub)", ret: "0", example: 'count_overlapping("banana", "ana")',
    hints: ["Check every starting position in the text.", "At position i, see if `text[i:i + len(sub)] == sub`."],
    solution: `
def count_overlapping(text, sub):
    count = 0
    for i in range(len(text) - len(sub) + 1):
        if text[i:i + len(sub)] == sub:
            count += 1
    return count
`,
    tests: [[["aaaa", "aa"], 3], [["banana", "ana"], 2], [["abc", "d"], 0], [["maine", "maine"], 1]],
  }),
  fn({
    title: "Run-Length Decoder",
    prompt: 'Write `rle_decode(code)` that undoes run-length encoding. `"a3b1c2"` becomes `"aaabcc"`. Counts can have more than one digit, so `"x10"` is ten x\'s.',
    sig: "rle_decode(code)", ret: '""', example: 'rle_decode("a3b1c2")',
    hints: ["Walk through the code. A letter starts a new group, and digits after it build up the count.", "Build the number one digit at a time: `count = count * 10 + int(d)`."],
    solution: `
def rle_decode(code):
    result = ""
    i = 0
    while i < len(code):
        letter = code[i]
        i += 1
        count = 0
        while i < len(code) and code[i].isdigit():
            count = count * 10 + int(code[i])
            i += 1
        result += letter * count
    return result
`,
    tests: [[["a3b1c2"], "aaabcc"], [[""], ""], [["x10"], "xxxxxxxxxx"], [["m1e2"], "mee"]],
  }),
  fn({
    title: "Lobster Market",
    prompt: "You get a list of lobster prices, one per day. Buy on one day and sell on a later day. Write `max_profit(prices)` that returns the most money you could make, or `0` if you can't make any.",
    sig: "max_profit(prices)", ret: "None", example: "max_profit([7, 1, 5, 3, 6, 4])",
    hints: ["Walk through the days keeping track of the cheapest price so far.", "Each day, check `price - cheapest` and keep the best profit."],
    solution: `
def max_profit(prices):
    best = 0
    cheapest = None
    for p in prices:
        if cheapest is None or p < cheapest:
            cheapest = p
        best = max(best, p - cheapest)
    return best
`,
    tests: [[[[7, 1, 5, 3, 6, 4]], 5], [[[7, 6, 4, 3]], 0], [[[2, 4]], 2], [[[]], 0]],
  }),
  fn({
    title: "Staircase Ways",
    prompt: "You can climb stairs 1 or 2 steps at a time. Write `stair_ways(n)` that returns how many different ways there are to climb `n` stairs. `stair_ways(3)` is `3`: 1+1+1, 1+2, and 2+1.",
    sig: "stair_ways(n)", ret: "0", example: "stair_ways(3)",
    hints: ["The ways to reach step n = ways to reach n − 1 plus ways to reach n − 2.", "That's the Fibonacci pattern! Keep two variables and update them in a loop."],
    solution: `
def stair_ways(n):
    a, b = 1, 1
    for i in range(n):
        a, b = b, a + b
    return a
`,
    tests: [[[1], 1], [[2], 2], [[3], 3], [[5], 8], [[10], 89]],
  }),
  fn({
    title: "Threes and Fives",
    prompt: "Write `sum_multiples(n)` that adds up every number below `n` that divides by 3 or 5. `sum_multiples(10)` is 3 + 5 + 6 + 9 = `23`.",
    sig: "sum_multiples(n)", ret: "0", example: "sum_multiples(10)",
    hints: ["Loop from 1 up to (not including) n.", "Add i when `i % 3 == 0 or i % 5 == 0`."],
    solution: `
def sum_multiples(n):
    total = 0
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total
`,
    tests: [[[10], 23], [[1], 0], [[16], 60], [[100], 2318]],
  }),
  fn({
    title: "Perfect Numbers",
    prompt: "A perfect number equals the sum of its divisors (not counting itself). 6 = 1 + 2 + 3. Write `is_perfect(n)`.",
    sig: "is_perfect(n)", ret: "None", example: "is_perfect(28)",
    hints: ["Loop from 1 up to n − 1 and add every number that divides n.", "Compare the total to n. Watch out: 1 is not perfect."],
    solution: `
def is_perfect(n):
    total = 0
    for d in range(1, n):
        if n % d == 0:
            total += d
    return n > 1 and total == n
`,
    tests: [[[6], true], [[28], true], [[12], false], [[1], false], [[496], true]],
  }),
  fn({
    title: "Look and Say",
    prompt: 'Read a string of digits out loud: `"1211"` is one 1, one 2, two 1s, so the next term is `"111221"`. Write `look_and_say(s)` that returns the next term.',
    sig: "look_and_say(s)", ret: "s", example: 'look_and_say("1211")',
    hints: ["It's like run-length encoding, but the count comes before the digit.", "Track the current digit and how many times in a row you've seen it."],
    solution: `
def look_and_say(s):
    result = ""
    i = 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]:
            j += 1
        result += str(j - i) + s[i]
        i = j
    return result
`,
    tests: [[["1"], "11"], [["11"], "21"], [["21"], "1211"], [["1211"], "111221"]],
  }),
  fn({
    title: "Mode",
    prompt: "Write `mode(nums)` that returns the number that appears most often. If there's a tie, return the smallest one.",
    sig: "mode(nums)", ret: "None", example: "mode([1, 2, 2, 3])",
    hints: ["Count each number with a dictionary.", "Go through the numbers in sorted order and keep the one with the strictly highest count."],
    solution: `
def mode(nums):
    counts = {}
    for n in nums:
        counts[n] = counts.get(n, 0) + 1
    best = None
    for n in sorted(counts):
        if best is None or counts[n] > counts[best]:
            best = n
    return best
`,
    tests: [[[[1, 2, 2, 3]], 2], [[[4, 4, 1, 1]], 1], [[[7]], 7], [[[3, 3, 3, 9, 9]], 3]],
  }),
  fn({
    title: "Median",
    prompt: "Write `median(nums)` that returns the middle value once the numbers are sorted. If there's an even count, return the average of the two middle numbers.",
    sig: "median(nums)", ret: "None", example: "median([3, 1, 2])",
    hints: ["Sort first: `s = sorted(nums)`.", "For an even count, average `s[mid - 1]` and `s[mid]`."],
    solution: `
def median(nums):
    s = sorted(nums)
    mid = len(s) // 2
    if len(s) % 2 == 1:
        return s[mid]
    return (s[mid - 1] + s[mid]) / 2
`,
    tests: [[[[3, 1, 2]], 2], [[[4, 1, 3, 2]], 2.5], [[[5]], 5], [[[10, 20]], 15.0]],
  }),
  fn({
    title: "Sentence Fixer",
    prompt: 'Write `fix_sentences(text)` that capitalizes the first letter of the text and the first letter after every `". "`. `"hello. this is byte."` becomes `"Hello. This is byte."`',
    sig: "fix_sentences(text)", ret: "text", example: 'fix_sentences("hello. this is byte.")',
    hints: ['Split on `". "` to get each sentence.', 'Capitalize just the first character of each (`s[:1].upper() + s[1:]`), then join back with `". "`.'],
    solution: `
def fix_sentences(text):
    parts = text.split(". ")
    fixed = [p[:1].upper() + p[1:] for p in parts]
    return ". ".join(fixed)
`,
    tests: [[["hello. this is byte."], "Hello. This is byte."], [["a. b. c."], "A. B. C."], [[""], ""], [["i love Maine"], "I love Maine"]],
  }),
  fn({
    title: "Maze Runner",
    prompt: 'A maze is a list of strings. `S` is the start, `E` is the exit, `#` is a wall, and `.` is open. You can move up, down, left, or right. Write `can_escape(maze)` that returns `True` if there\'s a path from S to E.',
    sig: "can_escape(maze)", ret: "None", example: 'can_escape(["S.#", "..#", "#.E"])',
    hints: ["Find S first. Then explore outward from it, keeping a set of squares you've visited.", "Use a list as a to-do pile. Pop a square, skip walls and visited squares, and add its four neighbors. If you ever reach E, return True."],
    solution: `
def can_escape(maze):
    for r in range(len(maze)):
        for c in range(len(maze[r])):
            if maze[r][c] == "S":
                start = (r, c)
    todo = [start]
    seen = set()
    while todo:
        r, c = todo.pop()
        if (r, c) in seen or r < 0 or r >= len(maze) or c < 0 or c >= len(maze[r]):
            continue
        if maze[r][c] == "#":
            continue
        if maze[r][c] == "E":
            return True
        seen.add((r, c))
        todo += [(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)]
    return False
`,
    tests: [[[["S.#", "..#", "#.E"]], true], [[["S#E"]], false], [[["S.E"]], true], [[["S.#", ".##", "##E"]], false]],
  }),
  fn({
    title: "Nth Prime",
    prompt: "Write `nth_prime(n)` that returns the nth prime number. The 1st prime is 2, the 2nd is 3, and the 5th is 11.",
    sig: "nth_prime(n)", ret: "None", example: "nth_prime(5)",
    hints: ["Count up from 2, checking whether each number is prime.", "Keep a counter of primes found. When it reaches n, return that number."],
    solution: `
def nth_prime(n):
    count = 0
    k = 1
    while count < n:
        k += 1
        if all(k % d != 0 for d in range(2, int(k ** 0.5) + 1)):
            count += 1
    return k
`,
    tests: [[[1], 2], [[2], 3], [[5], 11], [[10], 29], [[100], 541]],
  }),
  fn({
    title: "Short to Long",
    prompt: "Write `sort_by_length(words)` that sorts words from shortest to longest. Words with the same length stay in their original order.",
    sig: "sort_by_length(words)", ret: "words", example: 'sort_by_length(["ccc", "a", "bb"])',
    hints: ["`sorted` can take a `key` that says what to sort by.", "`sorted(words, key=len)` keeps ties in their original order."],
    solution: `
def sort_by_length(words):
    return sorted(words, key=len)
`,
    tests: [[[["ccc", "a", "bb"]], ["a", "bb", "ccc"]], [[["bb", "aa", "c"]], ["c", "bb", "aa"]], [[[]], []]],
  }),
  fn({
    title: "Say the Number",
    prompt: 'Write `spell(n)` that spells out a number from 0 to 99 in words. `7` is `"seven"`, `40` is `"forty"`, and `42` is `"forty-two"`.',
    sig: "spell(n)", ret: '""', example: "spell(42)",
    hints: ["Make one list for 0 to 19 and another for the tens (twenty, thirty, ...).", 'Under 20, look it up directly. Otherwise use the tens word, plus `"-"` and the ones word if the ones digit isn\'t 0.'],
    solution: `
def spell(n):
    small = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
             "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
             "seventeen", "eighteen", "nineteen"]
    tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    if n < 20:
        return small[n]
    if n % 10 == 0:
        return tens[n // 10]
    return tens[n // 10] + "-" + small[n % 10]
`,
    tests: [[[7], "seven"], [[13], "thirteen"], [[40], "forty"], [[42], "forty-two"], [[0], "zero"], [[99], "ninety-nine"]],
  }),
  fn({
    title: "First Loner",
    prompt: 'Write `first_unique(text)` that returns the position of the first character that appears only once, or `-1` if every character repeats. `"swiss"` gives `1` (the w).',
    sig: "first_unique(text)", ret: "None", example: 'first_unique("swiss")',
    hints: ["Count every character first with a dictionary.", "Then loop through the text again and return the first position whose count is 1."],
    solution: `
def first_unique(text):
    counts = {}
    for c in text:
        counts[c] = counts.get(c, 0) + 1
    for i in range(len(text)):
        if counts[text[i]] == 1:
            return i
    return -1
`,
    tests: [[["swiss"], 1], [["maine"], 0], [["aabbc"], 4], [["aabb"], -1]],
  }),
  fn({
    title: "Pairs to Ten",
    prompt: "Write `pairs_to_ten(nums)` that counts how many pairs of different positions in the list add up to 10. `[5, 5, 5]` has 3 pairs.",
    sig: "pairs_to_ten(nums)", ret: "None", example: "pairs_to_ten([1, 9, 5, 5, 2])",
    hints: ["Check every pair with two loops.", "Start the inner loop at `i + 1` so each pair is counted once."],
    solution: `
def pairs_to_ten(nums):
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == 10:
                count += 1
    return count
`,
    tests: [[[[1, 9, 5, 5, 2]], 2], [[[]], 0], [[[5, 5, 5]], 3], [[[3, 4]], 0]],
  }),
  fn({
    title: "Camel to Snake",
    prompt: 'Programmers write names in different styles. Write `snake_case(name)` that turns camelCase into snake_case. `"myVariableName"` becomes `"my_variable_name"`.',
    sig: "snake_case(name)", ret: "name", example: 'snake_case("myVariableName")',
    hints: ["Loop over each character.", 'When a character is uppercase, add `"_"` and the lowercase version instead.'],
    solution: `
def snake_case(name):
    result = ""
    for c in name:
        if c.isupper():
            result += "_" + c.lower()
        else:
            result += c
    return result
`,
    tests: [[["myVariableName"], "my_variable_name"], [["x"], "x"], [["isMaineCool"], "is_maine_cool"]],
  }),
  fn({
    title: "Zeros to the Back",
    prompt: "Write `move_zeros(nums)` that moves every 0 to the end of the list, keeping the other numbers in the same order.",
    sig: "move_zeros(nums)", ret: "nums", example: "move_zeros([0, 1, 0, 3, 12])",
    hints: ["Make one list of the non-zero numbers.", "Then add as many zeros as you skipped."],
    solution: `
def move_zeros(nums):
    result = [n for n in nums if n != 0]
    return result + [0] * (len(nums) - len(result))
`,
    tests: [[[[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0]], [[[0]], [0]], [[[]], []], [[[4, 0, 5]], [4, 5, 0]]],
  }),
  fn({
    title: "Climbing Run",
    prompt: "Write `longest_climb(nums)` that returns the length of the longest stretch where each number is bigger than the one before. `[1, 2, 3, 1, 2]` gives `3`.",
    sig: "longest_climb(nums)", ret: "None", example: "longest_climb([1, 2, 3, 1, 2])",
    hints: ["Like a streak counter: keep the current run and the best run.", "If `nums[i] > nums[i - 1]`, the run grows. Otherwise it starts over at 1."],
    solution: `
def longest_climb(nums):
    if not nums:
        return 0
    best = current = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            current += 1
        else:
            current = 1
        best = max(best, current)
    return best
`,
    tests: [[[[1, 2, 3, 1, 2]], 3], [[[5, 4, 3]], 1], [[[]], 0], [[[1, 2, 2, 3]], 2]],
  }),
  fn({
    title: "Class Election",
    prompt: "Write `election(votes)` that takes a list of names and returns who got the most votes. If there's a tie, return the name that comes first alphabetically.",
    sig: "election(votes)", ret: '""', example: 'election(["Ava", "Sam", "Ava"])',
    hints: ["Count votes with a dictionary.", "Loop over `sorted(counts)` and keep the name with the strictly highest count."],
    solution: `
def election(votes):
    counts = {}
    for v in votes:
        counts[v] = counts.get(v, 0) + 1
    best = None
    for name in sorted(counts):
        if best is None or counts[name] > counts[best]:
            best = name
    return best
`,
    tests: [[[["Ava", "Sam", "Ava"]], "Ava"], [[["Sam", "Ava"]], "Ava"], [[["Max"]], "Max"], [[["Zoe", "Zoe", "Ava"]], "Zoe"]],
  }),
  fn({
    title: "Clock Math",
    prompt: 'Write `add_minutes(time, minutes)` that adds minutes to a 24-hour time like `"10:30"` and returns the new time in the same format. It wraps past midnight: `add_minutes("23:50", 20)` is `"00:10"`.',
    sig: "add_minutes(time, minutes)", ret: "time", example: 'add_minutes("10:30", 45)',
    hints: ['Split into hours and minutes with `time.split(":")`, then turn everything into total minutes.', 'Add, use `% (24 * 60)` to wrap, and format with `f"{h:02d}:{m:02d}"`.'],
    solution: `
def add_minutes(time, minutes):
    h, m = time.split(":")
    total = (int(h) * 60 + int(m) + minutes) % (24 * 60)
    return f"{total // 60:02d}:{total % 60:02d}"
`,
    tests: [[["10:30", 45], "11:15"], [["23:50", 20], "00:10"], [["00:00", 0], "00:00"], [["12:00", 1440], "12:00"]],
  }),
  fn({
    title: "Day of the Year",
    prompt: "Write `day_of_year(month, day)` that returns which day of the year it is (not a leap year). January 1 is `1`, February 1 is `32`, and December 31 is `365`.",
    sig: "day_of_year(month, day)", ret: "None", example: "day_of_year(2, 1)",
    hints: ["Make a list of how many days are in each month: `[31, 28, 31, 30, ...]`.", "Add up the full months before this one, then add the day."],
    solution: `
def day_of_year(month, day):
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return sum(days[:month - 1]) + day
`,
    tests: [[[1, 1], 1], [[2, 1], 32], [[12, 31], 365], [[3, 1], 60], [[10, 8], 281]],
  }),
  fn({
    title: "Deepest Nest",
    prompt: 'Write `max_depth(s)` that returns how deeply parentheses are nested. `"(a(b)c)"` is `2` and `"()()"` is `1`.',
    sig: "max_depth(s)", ret: "None", example: 'max_depth("(a(b)c)")',
    hints: ["Keep a depth counter. `(` adds 1, `)` subtracts 1.", "Track the biggest the counter ever gets."],
    solution: `
def max_depth(s):
    depth = best = 0
    for c in s:
        if c == "(":
            depth += 1
            best = max(best, depth)
        elif c == ")":
            depth -= 1
    return best
`,
    tests: [[["(a(b)c)"], 2], [[""], 0], [["()()"], 1], [["((()))"], 3]],
  }),
  fn({
    title: "Longest Palindrome",
    prompt: 'Write `longest_palindrome(text)` that returns the longest piece of the text that reads the same backwards. If there\'s a tie, return the one that starts first. `"babad"` gives `"bab"`.',
    sig: "longest_palindrome(text)", ret: '""', example: 'longest_palindrome("babad")',
    hints: ["Try every possible piece: every start position and every end position.", "Check `piece == piece[::-1]`, and keep it only if it's strictly longer than your best."],
    solution: `
def longest_palindrome(text):
    best = ""
    for i in range(len(text)):
        for j in range(i + 1, len(text) + 1):
            piece = text[i:j]
            if piece == piece[::-1] and len(piece) > len(best):
                best = piece
    return best
`,
    tests: [[["babad"], "bab"], [["cbbd"], "bb"], [["a"], "a"], [["maine"], "m"], [["racecars"], "racecar"]],
  }),
  fn({
    title: "Knight Moves",
    prompt: 'A chess knight moves in an L: two squares one way and one square sideways. Write `knight_moves(square)` that returns how many moves a knight has from a square like `"d4"` on an 8×8 board.',
    sig: "knight_moves(square)", ret: "0", example: 'knight_moves("d4")',
    hints: ['Turn the square into numbers: column `ord(square[0]) - ord("a")` and row `int(square[1]) - 1`.', "Try all 8 L-shaped jumps and count the ones that stay between 0 and 7."],
    solution: `
def knight_moves(square):
    col = ord(square[0]) - ord("a")
    row = int(square[1]) - 1
    jumps = [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]
    count = 0
    for dc, dr in jumps:
        if 0 <= col + dc < 8 and 0 <= row + dr < 8:
            count += 1
    return count
`,
    tests: [[["a1"], 2], [["d4"], 8], [["h8"], 2], [["b1"], 3]],
  }),
];
