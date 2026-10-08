/* Medium: write a function with a loop or a decision. See challenges.js for the format. */

LEVELS.medium = [
  fn({
    title: "Ferry Tickets",
    prompt: "The ferry to the islands charges by age. Write `ticket_price(age)` that returns:\n- `5` for kids under 12\n- `6` for people 65 and older\n- `10` for everyone else",
    sig: "ticket_price(age)", ret: "0", example: "ticket_price(8)",
    hints: ["Use `if`, `elif`, and `else` to pick one of three answers.", "Check `age < 12` first, then `age >= 65`. Everyone left pays 10."],
    solution: `
def ticket_price(age):
    if age < 12:
        return 5
    elif age >= 65:
        return 6
    else:
        return 10
`,
    tests: [[[8], 5], [[11], 5], [[12], 10], [[40], 10], [[65], 6], [[80], 6]],
  }),
  fn({
    title: "Add It All Up",
    prompt: "Write `sum_to(n)` that returns 1 + 2 + 3 + ... + n. For example, `sum_to(5)` is `15`.",
    sig: "sum_to(n)", ret: "0", example: "sum_to(5)",
    hints: ["Start a variable `total = 0`, then add each number to it in a loop.", "`range(1, n + 1)` gives you 1 up to and including n."],
    solution: `
def sum_to(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total
`,
    tests: [[[1], 1], [[5], 15], [[10], 55], [[100], 5050], [[0], 0]],
  }),
  fn({
    title: "Average Temperature",
    prompt: "Write `average(temps)` that returns the average of a list of temperatures, rounded to 1 decimal place. The list is never empty.",
    sig: "average(temps)", ret: "0", example: "average([50, 60, 70])",
    hints: ["The average is the total divided by how many there are: `sum(temps) / len(temps)`.", "`round(x, 1)` rounds to one decimal place."],
    solution: `
def average(temps):
    return round(sum(temps) / len(temps), 1)
`,
    tests: [[[[50, 60, 70]], 60.0], [[[32, 45]], 38.5], [[[71]], 71.0], [[[10, 20, 25]], 18.3]],
  }),
  fn({
    title: "Palindrome Checker",
    prompt: "A palindrome reads the same forwards and backwards, like `racecar`. Write `is_palindrome(word)` that returns `True` or `False`. Ignore uppercase vs lowercase, so `Noon` counts.",
    sig: "is_palindrome(word)", ret: "False", example: 'is_palindrome("racecar")',
    hints: ["Make the word all lowercase first with `word.lower()`.", "Compare it to its reverse: `w == w[::-1]`."],
    solution: `
def is_palindrome(word):
    w = word.lower()
    return w == w[::-1]
`,
    tests: [[["racecar"], true], [["Racecar"], true], [["maine"], false], [["Noon"], true], [["a"], true]],
  }),
  fn({
    title: "Over Budget",
    prompt: "Write `count_over(prices, limit)` that returns how many prices in the list are more than `limit`.",
    sig: "count_over(prices, limit)", ret: "0", example: "count_over([3, 8, 12, 5], 5)",
    hints: ["Loop through the prices and keep a counter.", "Only add 1 when `price > limit`. A price equal to the limit doesn't count."],
    solution: `
def count_over(prices, limit):
    count = 0
    for price in prices:
        if price > limit:
            count += 1
    return count
`,
    tests: [[[[3, 8, 12, 5], 5], 2], [[[1, 2, 3], 10], 0], [[[20, 20], 19], 2], [[[], 5], 0]],
  }),
  fn({
    title: "Times Table",
    prompt: "Write `times_table(n)` that returns a list of `n` times 1 through `n` times 10. `times_table(3)` is `[3, 6, 9, ... 30]`.",
    sig: "times_table(n)", ret: "[]", example: "times_table(3)",
    hints: ["Start with an empty list and `append` to it inside a loop.", "Loop `for i in range(1, 11):` and append `n * i`."],
    solution: `
def times_table(n):
    result = []
    for i in range(1, 11):
        result.append(n * i)
    return result
`,
    tests: [[[3], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]], [[1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], [[0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]],
  }),
  fn({
    title: "Rock, Paper, Scissors",
    prompt: 'Write `rps(p1, p2)` where each player picks `"rock"`, `"paper"`, or `"scissors"`. Return `"Player 1"`, `"Player 2"`, or `"Tie"`. Rock beats scissors, scissors beats paper, paper beats rock.',
    sig: "rps(p1, p2)", ret: '"Tie"', example: 'rps("rock", "scissors")',
    hints: ['Handle the tie first: `if p1 == p2: return "Tie"`.', "There are only three ways Player 1 can win. Check those, and otherwise Player 2 wins."],
    solution: `
def rps(p1, p2):
    if p1 == p2:
        return "Tie"
    wins = [("rock", "scissors"), ("scissors", "paper"), ("paper", "rock")]
    if (p1, p2) in wins:
        return "Player 1"
    return "Player 2"
`,
    tests: [[["rock", "scissors"], "Player 1"], [["paper", "scissors"], "Player 2"], [["paper", "rock"], "Player 1"], [["rock", "rock"], "Tie"], [["scissors", "rock"], "Player 2"], [["scissors", "paper"], "Player 1"]],
  }),
  fn({
    title: "Title Case",
    prompt: 'Write `capitalize_words(text)` that makes the first letter of every word uppercase and the rest lowercase. `"bath maine rocks"` becomes `"Bath Maine Rocks"`.',
    sig: "capitalize_words(text)", ret: "text", example: 'capitalize_words("bath maine rocks")',
    hints: ["Split into words, fix each one, then join them back with spaces.", '`word.capitalize()` fixes one word. `" ".join(words)` puts them back together.'],
    solution: `
def capitalize_words(text):
    words = []
    for word in text.split():
        words.append(word.capitalize())
    return " ".join(words)
`,
    tests: [[["bath maine rocks"], "Bath Maine Rocks"], [["byte"], "Byte"], [["hELLO wORLD"], "Hello World"], [[""], ""]],
  }),
  fn({
    title: "Even Steven",
    prompt: "Write `is_even(n)` that returns `True` if `n` is even and `False` if it's odd.",
    sig: "is_even(n)", ret: "None", example: "is_even(4)",
    hints: ["Even numbers have no remainder when divided by 2.", "`return n % 2 == 0`"],
    solution: `
def is_even(n):
    return n % 2 == 0
`,
    tests: [[[4], true], [[7], false], [[0], true], [[-2], true], [[-3], false]],
  }),
  fn({
    title: "Top of Three",
    prompt: "Write `max_of_three(a, b, c)` that returns the biggest of the three numbers. Try it without using `max`.",
    sig: "max_of_three(a, b, c)", ret: "0", example: "max_of_three(3, 9, 5)",
    hints: ["Start by assuming `a` is the biggest: `best = a`.", "Then `if b > best: best = b`, and the same for `c`."],
    solution: `
def max_of_three(a, b, c):
    best = a
    if b > best:
        best = b
    if c > best:
        best = c
    return best
`,
    tests: [[[3, 9, 5], 9], [[1, 1, 1], 1], [[-5, -2, -9], -2], [[10, 2, 3], 10]],
  }),
  fn({
    title: "Letter Counter",
    prompt: 'Write `count_letter(text, letter)` that returns how many times `letter` appears in `text`, ignoring uppercase vs lowercase. `count_letter("Maine", "m")` is `1`.',
    sig: "count_letter(text, letter)", ret: "0", example: 'count_letter("banana", "a")',
    hints: ["Make both lowercase with `.lower()` before comparing.", "`text.lower().count(letter.lower())` does it in one line."],
    solution: `
def count_letter(text, letter):
    return text.lower().count(letter.lower())
`,
    tests: [[["banana", "a"], 3], [["Maine", "m"], 1], [["", "a"], 0], [["Byte", "B"], 1], [["AaAa", "a"], 4]],
  }),
  fn({
    title: "Factorial",
    prompt: "Write `factorial(n)` that returns n × (n − 1) × ... × 1. `factorial(5)` is `120`, and `factorial(0)` is `1`.",
    sig: "factorial(n)", ret: "0", example: "factorial(5)",
    hints: ["Start with `result = 1`, not 0.", "Multiply `result` by every number from 1 to n."],
    solution: `
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
`,
    tests: [[[0], 1], [[1], 1], [[5], 120], [[6], 720]],
  }),
  fn({
    title: "Flip the List",
    prompt: "Write `reverse_list(items)` that returns a new list with the items in reverse order.",
    sig: "reverse_list(items)", ret: "items", example: "reverse_list([1, 2, 3])",
    hints: ["Slicing works on lists too.", "`items[::-1]` makes a reversed copy."],
    solution: `
def reverse_list(items):
    return items[::-1]
`,
    tests: [[[[1, 2, 3]], [3, 2, 1]], [[[]], []], [[["a", "b"]], ["b", "a"]]],
  }),
  fn({
    title: "Find the Biggest",
    prompt: "Write `largest(nums)` that returns the biggest number in a list. Try it with a loop instead of `max`. The list is never empty.",
    sig: "largest(nums)", ret: "0", example: "largest([3, 9, 2])",
    hints: ["Start with `best = nums[0]`.", "Loop through and replace `best` when you find something bigger."],
    solution: `
def largest(nums):
    best = nums[0]
    for n in nums:
        if n > best:
            best = n
    return best
`,
    tests: [[[[3, 9, 2]], 9], [[[-1, -5]], -1], [[[7]], 7], [[[1, 2, 3, 4]], 4]],
  }),
  fn({
    title: "Temperature Range",
    prompt: "Write `range_of(nums)` that returns the biggest number minus the smallest number. The list is never empty.",
    sig: "range_of(nums)", ret: "0", example: "range_of([3, 9, 2])",
    hints: ["`max(nums)` and `min(nums)` find the biggest and smallest.", "`return max(nums) - min(nums)`"],
    solution: `
def range_of(nums):
    return max(nums) - min(nums)
`,
    tests: [[[[3, 9, 2]], 7], [[[5]], 0], [[[-2, 4]], 6]],
  }),
  fn({
    title: "Celsius Converter",
    prompt: "Write `to_fahrenheit(c)` that returns the temperature in Fahrenheit using `c * 9 / 5 + 32`.",
    sig: "to_fahrenheit(c)", ret: "0", example: "to_fahrenheit(100)",
    hints: ["Just return the formula.", "`return c * 9 / 5 + 32`"],
    solution: `
def to_fahrenheit(c):
    return c * 9 / 5 + 32
`,
    tests: [[[0], 32.0], [[100], 212.0], [[-40], -40.0], [[37], 98.6]],
  }),
  fn({
    title: "Count the Evens",
    prompt: "Write `count_evens(nums)` that returns how many even numbers are in the list.",
    sig: "count_evens(nums)", ret: "0", example: "count_evens([1, 2, 3, 4])",
    hints: ["Loop through and keep a counter.", "A number is even when `n % 2 == 0`."],
    solution: `
def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count
`,
    tests: [[[[1, 2, 3, 4]], 2], [[[]], 0], [[[2, 4, 6]], 3], [[[1, 3]], 0]],
  }),
  fn({
    title: "Sum Without sum()",
    prompt: "Write `sum_list(nums)` that adds up every number in the list using a loop (no `sum`).",
    sig: "sum_list(nums)", ret: "None", example: "sum_list([1, 2, 3])",
    hints: ["Start with `total = 0`.", "Add each number: `total += n`."],
    solution: `
def sum_list(nums):
    total = 0
    for n in nums:
        total += n
    return total
`,
    tests: [[[[1, 2, 3]], 6], [[[]], 0], [[[-1, 1]], 0], [[[10]], 10]],
  }),
  fn({
    title: "First and Last",
    prompt: 'Write `first_and_last(word)` that returns the first letter and the last letter together. `"maine"` gives `"me"`.',
    sig: "first_and_last(word)", ret: '""', example: 'first_and_last("maine")',
    hints: ["`word[0]` is the first letter and `word[-1]` is the last.", "Add them: `word[0] + word[-1]`."],
    solution: `
def first_and_last(word):
    return word[0] + word[-1]
`,
    tests: [[["maine"], "me"], [["a"], "aa"], [["byte"], "be"]],
  }),
  fn({
    title: "Vowel or Not",
    prompt: "Write `is_vowel(letter)` that returns `True` if the letter is a, e, i, o, or u (any case).",
    sig: "is_vowel(letter)", ret: "None", example: 'is_vowel("a")',
    hints: ["Make it lowercase first.", '`return letter.lower() in "aeiou"`'],
    solution: `
def is_vowel(letter):
    return letter.lower() in "aeiou"
`,
    tests: [[["a"], true], [["E"], true], [["b"], false], [["Z"], false]],
  }),
  fn({
    title: "Grade Book",
    prompt: 'Write `grade(score)` that returns `"A"` for 90+, `"B"` for 80+, `"C"` for 70+, `"D"` for 60+, and `"F"` otherwise.',
    sig: "grade(score)", ret: '""', example: "grade(85)",
    hints: ["Check from the top down.", "Use `if`, then `elif` for each grade, and finally return `\"F\"`."],
    solution: `
def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    return "F"
`,
    tests: [[[95], "A"], [[90], "A"], [[85], "B"], [[70], "C"], [[61], "D"], [[12], "F"]],
  }),
  fn({
    title: "Echo Echo",
    prompt: 'Write `repeat_word(word, n)` that returns the word repeated `n` times with spaces between. `repeat_word("hi", 3)` is `"hi hi hi"`.',
    sig: "repeat_word(word, n)", ret: '""', example: 'repeat_word("hi", 3)',
    hints: ["`[word] * n` is a list with the word n times.", '`" ".join(...)` turns it into one string.'],
    solution: `
def repeat_word(word, n):
    return " ".join([word] * n)
`,
    tests: [[["hi", 3], "hi hi hi"], [["Maine", 1], "Maine"], [["x", 0], ""]],
  }),
  fn({
    title: "Countdown List",
    prompt: "Write `countdown(n)` that returns a list counting down from `n` to 1. `countdown(3)` is `[3, 2, 1]`.",
    sig: "countdown(n)", ret: "[]", example: "countdown(3)",
    hints: ["`range(n, 0, -1)` counts down.", "`list(range(n, 0, -1))` turns it into a list."],
    solution: `
def countdown(n):
    return list(range(n, 0, -1))
`,
    tests: [[[3], [3, 2, 1]], [[1], [1]], [[0], []], [[5], [5, 4, 3, 2, 1]]],
  }),
  fn({
    title: "Positives Only",
    prompt: "Write `only_positive(nums)` that returns a new list with only the numbers greater than 0.",
    sig: "only_positive(nums)", ret: "nums", example: "only_positive([3, -1, 0, 5])",
    hints: ["Make an empty list, then loop.", "Append a number only if `n > 0`."],
    solution: `
def only_positive(nums):
    result = []
    for n in nums:
        if n > 0:
            result.append(n)
    return result
`,
    tests: [[[[3, -1, 0, 5]], [3, 5]], [[[]], []], [[[-2, -3]], []], [[[1, 2]], [1, 2]]],
  }),
  fn({
    title: "Double Everything",
    prompt: "Write `double_all(nums)` that returns a new list with every number doubled.",
    sig: "double_all(nums)", ret: "nums", example: "double_all([1, 2, 3])",
    hints: ["Loop and append `n * 2` to a new list.", "Or use a list comprehension: `[n * 2 for n in nums]`."],
    solution: `
def double_all(nums):
    return [n * 2 for n in nums]
`,
    tests: [[[[1, 2, 3]], [2, 4, 6]], [[[]], []], [[[-5, 0]], [-10, 0]]],
  }),
  fn({
    title: "Leap Year Function",
    prompt: "Write `is_leap(year)` that returns `True` for a leap year. A year is a leap year if it divides by 4, except years that divide by 100, unless they also divide by 400.",
    sig: "is_leap(year)", ret: "None", example: "is_leap(2024)",
    hints: ["Divides by 4 means `year % 4 == 0`.", "`return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0`"],
    solution: `
def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
`,
    tests: [[[2024], true], [[2023], false], [[1900], false], [[2000], true]],
  }),
  fn({
    title: "How Many Words",
    prompt: "Write `count_words(text)` that returns how many words are in `text`. Extra spaces shouldn't count as words.",
    sig: "count_words(text)", ret: "0", example: 'count_words("I love Maine")',
    hints: ["`text.split()` with no arguments ignores extra spaces.", "Return the `len` of that list."],
    solution: `
def count_words(text):
    return len(text.split())
`,
    tests: [[["I love Maine"], 3], [[""], 0], [["  spaced   out "], 2], [["one"], 1]],
  }),
  fn({
    title: "Longest Word",
    prompt: "Write `longest_word(text)` that returns the longest word in the sentence. If there's a tie, return the one that comes first.",
    sig: "longest_word(text)", ret: '""', example: 'longest_word("I love lighthouses")',
    hints: ['Keep track of the best word so far, starting with `best = ""`.', "Only replace `best` when a word is strictly longer, so ties keep the first one."],
    solution: `
def longest_word(text):
    best = ""
    for word in text.split():
        if len(word) > len(best):
            best = word
    return best
`,
    tests: [[["I love lighthouses"], "lighthouses"], [["cat dog"], "cat"], [["a bb ccc bb"], "ccc"]],
  }),
  fn({
    title: "Digit Sum",
    prompt: "Write `digit_sum(n)` that adds up the digits of a number. `digit_sum(123)` is `6`.",
    sig: "digit_sum(n)", ret: "0", example: "digit_sum(123)",
    hints: ["Turn it into a string with `str(n)` so you can loop over the digits.", "Turn each digit back into a number with `int(d)` and add it up."],
    solution: `
def digit_sum(n):
    total = 0
    for d in str(n):
        total += int(d)
    return total
`,
    tests: [[[123], 6], [[0], 0], [[9999], 36], [[505], 10]],
  }),
  fn({
    title: "Prime Time",
    prompt: "A prime number is bigger than 1 and only divides evenly by 1 and itself. Write `is_prime(n)` that returns `True` or `False`.",
    sig: "is_prime(n)", ret: "None", example: "is_prime(13)",
    hints: ["Anything less than 2 is not prime.", "Loop `for d in range(2, n):` and return False if `n % d == 0`. If nothing divides it, return True."],
    solution: `
def is_prime(n):
    if n < 2:
        return False
    for d in range(2, n):
        if n % d == 0:
            return False
    return True
`,
    tests: [[[2], true], [[1], false], [[9], false], [[13], true], [[0], false], [[97], true]],
  }),
  fn({
    title: "Power Up",
    prompt: "Write `power(base, exp)` that returns `base` multiplied by itself `exp` times, using a loop (no `**`). `power(2, 3)` is `8`.",
    sig: "power(base, exp)", ret: "0", example: "power(2, 3)",
    hints: ["Start with `result = 1`.", "Loop `exp` times and multiply `result` by `base` each time."],
    solution: `
def power(base, exp):
    result = 1
    for i in range(exp):
        result *= base
    return result
`,
    tests: [[[2, 3], 8], [[5, 0], 1], [[3, 4], 81], [[10, 2], 100]],
  }),
  fn({
    title: "Vowel Vanish",
    prompt: 'Write `remove_vowels(text)` that returns the text with every vowel (a, e, i, o, u, any case) removed. `"maine"` becomes `"mn"`.',
    sig: "remove_vowels(text)", ret: "text", example: 'remove_vowels("maine")',
    hints: ['Build a new string, starting with `result = ""`.', 'Add each letter only if `letter.lower() not in "aeiou"`.'],
    solution: `
def remove_vowels(text):
    result = ""
    for letter in text:
        if letter.lower() not in "aeiou":
            result += letter
    return result
`,
    tests: [[["maine"], "mn"], [["Byte"], "Byt"], [["AEIOU"], ""], [["sky"], "sky"]],
  }),
  fn({
    title: "Guest List",
    prompt: 'Write `join_names(names)` that joins names into a sentence. `["Sam"]` gives `"Sam"`, `["Sam", "Ava"]` gives `"Sam and Ava"`, and `["Sam", "Ava", "Max"]` gives `"Sam, Ava and Max"`. An empty list gives `""`.',
    sig: "join_names(names)", ret: '""', example: 'join_names(["Sam", "Ava", "Max"])',
    hints: ["Handle 0 and 1 names first as special cases.", '`", ".join(names[:-1])` joins all but the last. Then add `" and "` and the last name.'],
    solution: `
def join_names(names):
    if len(names) == 0:
        return ""
    if len(names) == 1:
        return names[0]
    return ", ".join(names[:-1]) + " and " + names[-1]
`,
    tests: [[[["Sam"]], "Sam"], [[["Sam", "Ava"]], "Sam and Ava"], [[["Sam", "Ava", "Max"]], "Sam, Ava and Max"], [[[]], ""]],
  }),
  fn({
    title: "Multiply It All",
    prompt: "Write `multiply_list(nums)` that multiplies every number in the list together. An empty list gives `1`.",
    sig: "multiply_list(nums)", ret: "0", example: "multiply_list([2, 3, 4])",
    hints: ["Start with `result = 1`.", "Multiply by each number in a loop."],
    solution: `
def multiply_list(nums):
    result = 1
    for n in nums:
        result *= n
    return result
`,
    tests: [[[[2, 3, 4]], 24], [[[]], 1], [[[5]], 5], [[[2, 0, 9]], 0]],
  }),
  fn({
    title: "In Order?",
    prompt: "Write `is_sorted(nums)` that returns `True` if every number is less than or equal to the next one.",
    sig: "is_sorted(nums)", ret: "None", example: "is_sorted([1, 2, 2, 5])",
    hints: ["Compare each number to the one after it: `nums[i]` and `nums[i + 1]`.", "Loop `for i in range(len(nums) - 1):` and return False if `nums[i] > nums[i + 1]`."],
    solution: `
def is_sorted(nums):
    for i in range(len(nums) - 1):
        if nums[i] > nums[i + 1]:
            return False
    return True
`,
    tests: [[[[1, 2, 2, 5]], true], [[[3, 1]], false], [[[]], true], [[[1, 3, 2]], false]],
  }),
  fn({
    title: "Keep It In Bounds",
    prompt: "Write `clamp(n, low, high)` that returns `n`, but never less than `low` and never more than `high`.",
    sig: "clamp(n, low, high)", ret: "None", example: "clamp(20, 0, 10)",
    hints: ["If `n < low`, return `low`.", "If `n > high`, return `high`. Otherwise return `n`."],
    solution: `
def clamp(n, low, high):
    if n < low:
        return low
    if n > high:
        return high
    return n
`,
    tests: [[[5, 1, 10], 5], [[-3, 0, 10], 0], [[20, 0, 10], 10], [[10, 0, 10], 10]],
  }),
  fn({
    title: "Tip Calculator",
    prompt: "Write `tip(amount, percent)` that returns the tip, rounded to 2 decimal places. `tip(50, 20)` is `10.0`.",
    sig: "tip(amount, percent)", ret: "0", example: "tip(50, 20)",
    hints: ["The tip is `amount * percent / 100`.", "Use `round(x, 2)`."],
    solution: `
def tip(amount, percent):
    return round(amount * percent / 100, 2)
`,
    tests: [[[50, 20], 10.0], [[40, 15], 6.0], [[12, 10], 1.2], [[0, 20], 0.0]],
  }),
  fn({
    title: "Initials Maker",
    prompt: 'Write `initials(full_name)` that returns the uppercase first letter of each name followed by a dot. `"Harper Steenstra"` gives `"H.S."`',
    sig: "initials(full_name)", ret: '""', example: 'initials("Harper Steenstra")',
    hints: ["Split the name into words.", 'For each word, add `word[0].upper() + "."` to the result.'],
    solution: `
def initials(full_name):
    result = ""
    for word in full_name.split():
        result += word[0].upper() + "."
    return result
`,
    tests: [[["Harper Steenstra"], "H.S."], [["ada lovelace"], "A.L."], [["Grace Brewster Hopper"], "G.B.H."]],
  }),
  fn({
    title: "Got a Number?",
    prompt: "Write `has_digit(text)` that returns `True` if the text contains at least one digit (0 through 9).",
    sig: "has_digit(text)", ret: "None", example: 'has_digit("byte1")',
    hints: ["Loop over each character.", "`c.isdigit()` is True for digits. Return True as soon as you find one."],
    solution: `
def has_digit(text):
    for c in text:
        if c.isdigit():
            return True
    return False
`,
    tests: [[["byte1"], true], [["byte"], false], [[""], false], [["2026"], true]],
  }),
  fn({
    title: "Wacky Caps",
    prompt: 'Write `alternate_caps(text)` that makes every character at an even position uppercase and every odd position lowercase. `"maine"` becomes `"MaInE"`.',
    sig: "alternate_caps(text)", ret: "text", example: 'alternate_caps("maine")',
    hints: ["Use `for i in range(len(text)):` so you know each position.", "If `i % 2 == 0`, add `text[i].upper()`, otherwise `text[i].lower()`."],
    solution: `
def alternate_caps(text):
    result = ""
    for i in range(len(text)):
        if i % 2 == 0:
            result += text[i].upper()
        else:
            result += text[i].lower()
    return result
`,
    tests: [[["maine"], "MaInE"], [["ab"], "Ab"], [[""], ""], [["HELLO"], "HeLlO"]],
  }),
  fn({
    title: "FizzBuzz",
    prompt: 'Write `fizzbuzz(n)` that returns `"FizzBuzz"` if n divides by 3 and 5, `"Fizz"` if just 3, `"Buzz"` if just 5, or the number as a string otherwise.',
    sig: "fizzbuzz(n)", ret: '""', example: "fizzbuzz(15)",
    hints: ["Check the both-case first: `n % 15 == 0`.", "Use `str(n)` for the last case."],
    solution: `
def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    if n % 3 == 0:
        return "Fizz"
    if n % 5 == 0:
        return "Buzz"
    return str(n)
`,
    tests: [[[15], "FizzBuzz"], [[9], "Fizz"], [[10], "Buzz"], [[7], "7"]],
  }),
  fn({
    title: "Miles to Kilometers",
    prompt: "Write `to_km(miles)` that converts miles to kilometers (1 mile = 1.609344 km), rounded to 2 decimal places.",
    sig: "to_km(miles)", ret: "0", example: "to_km(10)",
    hints: ["Multiply by 1.609344.", "`round(x, 2)`"],
    solution: `
def to_km(miles):
    return round(miles * 1.609344, 2)
`,
    tests: [[[1], 1.61], [[10], 16.09], [[0], 0.0], [[26.2], 42.16]],
  }),
  fn({
    title: "Below Zero",
    prompt: "Write `count_negatives(nums)` that returns how many numbers in the list are less than 0.",
    sig: "count_negatives(nums)", ret: "None", example: "count_negatives([-3, 4, -1, 0])",
    hints: ["Keep a counter and loop.", "Add 1 when `n < 0`."],
    solution: `
def count_negatives(nums):
    count = 0
    for n in nums:
        if n < 0:
            count += 1
    return count
`,
    tests: [[[[-3, 4, -1, 0]], 2], [[[]], 0], [[[1, 2]], 0], [[[-1, -1, -1]], 3]],
  }),
  fn({
    title: "Last Few",
    prompt: "Write `last_n(items, n)` that returns the last `n` items of a list. If the list is shorter than `n`, return the whole list. If `n` is 0, return an empty list.",
    sig: "last_n(items, n)", ret: "items", example: "last_n([1, 2, 3, 4], 2)",
    hints: ["Watch out: `items[-0:]` gives the whole list, not an empty one.", "`items[max(len(items) - n, 0):]` works for every case."],
    solution: `
def last_n(items, n):
    return items[max(len(items) - n, 0):]
`,
    tests: [[[[1, 2, 3, 4], 2], [3, 4]], [[[1, 2], 5], [1, 2]], [[[1, 2], 0], []], [[[], 3], []]],
  }),
  fn({
    title: "Starts With a Vowel",
    prompt: "Write `starts_with_vowel(word)` that returns `True` if the word starts with a, e, i, o, or u (any case). An empty word returns `False`.",
    sig: "starts_with_vowel(word)", ret: "None", example: 'starts_with_vowel("apple")',
    hints: ["Check for an empty word first.", '`word[0].lower() in "aeiou"`'],
    solution: `
def starts_with_vowel(word):
    if word == "":
        return False
    return word[0].lower() in "aeiou"
`,
    tests: [[["apple"], true], [["Owl"], true], [["moose"], false], [[""], false]],
  }),
  fn({
    title: "Total Seconds",
    prompt: "Write `total_seconds(h, m, s)` that turns hours, minutes, and seconds into just seconds.",
    sig: "total_seconds(h, m, s)", ret: "0", example: "total_seconds(1, 2, 5)",
    hints: ["An hour is 3600 seconds and a minute is 60.", "`h * 3600 + m * 60 + s`"],
    solution: `
def total_seconds(h, m, s):
    return h * 3600 + m * 60 + s
`,
    tests: [[[1, 0, 0], 3600], [[0, 2, 5], 125], [[0, 0, 0], 0], [[1, 2, 5], 3725]],
  }),
  fn({
    title: "Even Total",
    prompt: "Write `sum_evens(n)` that adds up all the even numbers from 1 to `n`. `sum_evens(10)` is 2 + 4 + 6 + 8 + 10 = `30`.",
    sig: "sum_evens(n)", ret: "0", example: "sum_evens(10)",
    hints: ["`range(2, n + 1, 2)` gives the even numbers.", "Or loop through everything and only add when `i % 2 == 0`."],
    solution: `
def sum_evens(n):
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total
`,
    tests: [[[10], 30], [[1], 0], [[4], 6], [[7], 12]],
  }),
  fn({
    title: "Where Is It?",
    prompt: "Write `index_of(items, target)` that returns the position of the first `target` in the list, or `-1` if it isn't there. Try it with a loop instead of `.index()`.",
    sig: "index_of(items, target)", ret: "None", example: "index_of([5, 3, 7], 7)",
    hints: ["Loop with `for i in range(len(items)):`.", "Return `i` as soon as `items[i] == target`. After the loop, return -1."],
    solution: `
def index_of(items, target):
    for i in range(len(items)):
        if items[i] == target:
            return i
    return -1
`,
    tests: [[[[5, 3, 7], 7], 2], [[[5, 3], 9], -1], [[[1, 1], 1], 0], [[[], 1], -1]],
  }),
  fn({
    title: "Anagram Detector",
    prompt: 'Two words are anagrams if they use exactly the same letters, like `"listen"` and `"silent"`. Write `is_anagram(a, b)`, ignoring uppercase vs lowercase.',
    sig: "is_anagram(a, b)", ret: "None", example: 'is_anagram("listen", "silent")',
    hints: ["If you sort the letters of two anagrams, you get the same thing.", "`sorted(a.lower()) == sorted(b.lower())`"],
    solution: `
def is_anagram(a, b):
    return sorted(a.lower()) == sorted(b.lower())
`,
    tests: [[["listen", "silent"], true], [["Maine", "Anime"], true], [["cat", "car"], false], [["ab", "abc"], false]],
  }),
  fn({
    title: "In Between",
    prompt: "Write `between(nums, low, high)` that returns a list of the numbers that are at least `low` and at most `high`.",
    sig: "between(nums, low, high)", ret: "nums", example: "between([1, 5, 10, 15], 5, 10)",
    hints: ["Python lets you write `low <= n <= high`.", "Append the numbers that pass to a new list."],
    solution: `
def between(nums, low, high):
    result = []
    for n in nums:
        if low <= n <= high:
            result.append(n)
    return result
`,
    tests: [[[[1, 5, 10, 15], 5, 10], [5, 10]], [[[1, 2, 3], 5, 9], []], [[[7], 7, 7], [7]]],
  }),
  fn({
    title: "Word Lengths",
    prompt: "Write `word_lengths(text)` that returns a list of how long each word is. `\"I love Maine\"` gives `[1, 4, 5]`.",
    sig: "word_lengths(text)", ret: "[]", example: 'word_lengths("I love Maine")',
    hints: ["Split the text into words.", "`[len(w) for w in text.split()]`"],
    solution: `
def word_lengths(text):
    return [len(w) for w in text.split()]
`,
    tests: [[["I love Maine"], [1, 4, 5]], [[""], []], [["lighthouse"], [10]]],
  }),
  fn({
    title: "Capital Start",
    prompt: 'Write `capitalize_first(text)` that makes only the very first character uppercase and leaves the rest alone. `"hello world"` gives `"Hello world"`.',
    sig: "capitalize_first(text)", ret: "text", example: 'capitalize_first("hello world")',
    hints: ["`text[:1]` is the first character (and works even when text is empty).", "`text[:1].upper() + text[1:]`"],
    solution: `
def capitalize_first(text):
    return text[:1].upper() + text[1:]
`,
    tests: [[["hello world"], "Hello world"], [[""], ""], [["Maine"], "Maine"], [["bYTE"], "BYTE"]],
  }),
  fn({
    title: "Skip Counting",
    prompt: "Write `count_by(start, stop, step)` that returns a list counting from `start` by `step`, including `stop` if you land on it. `count_by(0, 10, 2)` is `[0, 2, 4, 6, 8, 10]`.",
    sig: "count_by(start, stop, step)", ret: "[]", example: "count_by(0, 10, 2)",
    hints: ["`range` stops before its end number.", "`list(range(start, stop + 1, step))`"],
    solution: `
def count_by(start, stop, step):
    return list(range(start, stop + 1, step))
`,
    tests: [[[0, 10, 2], [0, 2, 4, 6, 8, 10]], [[1, 10, 3], [1, 4, 7, 10]], [[5, 4, 1], []]],
  }),
  fn({
    title: "Weather Label",
    prompt: 'Write `weather(t)` that returns `"Freezing"` for 32 or below, `"Cold"` below 50, `"Nice"` below 75, and `"Hot"` for 75 and up.',
    sig: "weather(t)", ret: '""', example: "weather(60)",
    hints: ["Check the coldest range first.", "`if t <= 32:` then `elif t < 50:` then `elif t < 75:`."],
    solution: `
def weather(t):
    if t <= 32:
        return "Freezing"
    elif t < 50:
        return "Cold"
    elif t < 75:
        return "Nice"
    return "Hot"
`,
    tests: [[[32], "Freezing"], [[33], "Cold"], [[50], "Nice"], [[75], "Hot"], [[10], "Freezing"]],
  }),
  fn({
    title: "Dollars to Cents",
    prompt: "Write `to_cents(dollars)` that returns the number of cents as a whole number. `to_cents(1.25)` is `125`.",
    sig: "to_cents(dollars)", ret: "0", example: "to_cents(1.25)",
    hints: ["Multiply by 100.", "Computers store decimals a tiny bit off, so use `int(round(dollars * 100))`."],
    solution: `
def to_cents(dollars):
    return int(round(dollars * 100))
`,
    tests: [[[1.25], 125], [[0.1], 10], [[3], 300], [[0.29], 29]],
  }),
  fn({
    title: "The Middle",
    prompt: 'Write `middle(word)` that returns the middle letter of a word with an odd length, or the middle two letters if the length is even. `"cat"` gives `"a"` and `"byte"` gives `"yt"`.',
    sig: "middle(word)", ret: '""', example: 'middle("cat")',
    hints: ["`len(word) // 2` is the middle position.", "For even lengths, take `word[mid - 1:mid + 1]`."],
    solution: `
def middle(word):
    mid = len(word) // 2
    if len(word) % 2 == 1:
        return word[mid]
    return word[mid - 1:mid + 1]
`,
    tests: [[["cat"], "a"], [["byte"], "yt"], [["a"], "a"], [["maine"], "i"]],
  }),
  fn({
    title: "No Repeats",
    prompt: "Write `no_duplicates(items)` that returns a new list with repeats removed, keeping the first time each item appears.",
    sig: "no_duplicates(items)", ret: "items", example: "no_duplicates([1, 2, 2, 3, 1])",
    hints: ["Build a new list and only add things that aren't already in it.", "`if item not in result: result.append(item)`"],
    solution: `
def no_duplicates(items):
    result = []
    for item in items:
        if item not in result:
            result.append(item)
    return result
`,
    tests: [[[[1, 2, 2, 3, 1]], [1, 2, 3]], [[[]], []], [[["a", "a"]], ["a"]]],
  }),
  fn({
    title: "Capital Counter",
    prompt: "Write `count_upper(text)` that returns how many uppercase letters are in the text.",
    sig: "count_upper(text)", ret: "None", example: 'count_upper("Code For ME")',
    hints: ["Loop over every character.", "`c.isupper()` is True for uppercase letters."],
    solution: `
def count_upper(text):
    count = 0
    for c in text:
        if c.isupper():
            count += 1
    return count
`,
    tests: [[["Code For ME"], 4], [["abc"], 0], [[""], 0], [["ABC"], 3]],
  }),
  fn({
    title: "Square List",
    prompt: "Write `squares(n)` that returns a list of the squares from 1 up to `n`. `squares(4)` is `[1, 4, 9, 16]`.",
    sig: "squares(n)", ret: "[]", example: "squares(4)",
    hints: ["Loop from 1 to n.", "`[i * i for i in range(1, n + 1)]`"],
    solution: `
def squares(n):
    return [i * i for i in range(1, n + 1)]
`,
    tests: [[[4], [1, 4, 9, 16]], [[0], []], [[1], [1]]],
  }),
  fn({
    title: "Clock Format",
    prompt: 'Write `clock(minutes)` that returns the time as `"H:MM"`. `clock(125)` is `"2:05"`.',
    sig: "clock(minutes)", ret: '""', example: "clock(125)",
    hints: ["`minutes // 60` is hours and `minutes % 60` is leftover minutes.", 'Use `:02d` for two digits: `f"{h}:{m:02d}"`.'],
    solution: `
def clock(minutes):
    return f"{minutes // 60}:{minutes % 60:02d}"
`,
    tests: [[[125], "2:05"], [[60], "1:00"], [[5], "0:05"], [[0], "0:00"]],
  }),
];
