/* Easy: print, input, if, and simple loops. See challenges.js for the format. */

LEVELS.easy = [
  out({
    title: "Welcome Sign",
    prompt: "Ask the user for their name with `input()`, then print a greeting exactly like this:\n`Hello, Sam! Welcome to Code For ME.`",
    starter: `
# Ask for a name, then greet them!
name = input("What's your name? ")
`,
    hints: ["You already have the name saved in the variable `name`.", 'Try an f-string: `print(f"Hello, {name}! Welcome to Code For ME.")`'],
    solution: `
name = input("What's your name? ")
print(f"Hello, {name}! Welcome to Code For ME.")
`,
    tests: [[["Sam"], "Hello, Sam! Welcome to Code For ME."], [["Ava"], "Hello, Ava! Welcome to Code For ME."], [["Byte"], "Hello, Byte! Welcome to Code For ME."]],
  }),
  out({
    title: "Countdown",
    prompt: "Print the numbers 5, 4, 3, 2, 1 on their own lines, then print `Liftoff!`",
    starter: `
# Count down from 5, then print Liftoff!
`,
    hints: ["`range(5, 0, -1)` counts 5, 4, 3, 2, 1.", 'Put `print(i)` inside the loop and `print("Liftoff!")` after it (not indented).'],
    solution: `
for i in range(5, 0, -1):
    print(i)
print("Liftoff!")
`,
    tests: [[[], "5\n4\n3\n2\n1\nLiftoff!"]],
  }),
  out({
    title: "Coat or No Coat",
    prompt: "Ask for today's temperature. If it's below 50, print `Wear a coat`. Otherwise print `T-shirt weather`.",
    starter: `
temp = int(input("Temperature? "))
`,
    hints: ["`int(...)` already turned the answer into a number you can compare.", "Use `if temp < 50:` and `else:`."],
    solution: `
temp = int(input("Temperature? "))
if temp < 50:
    print("Wear a coat")
else:
    print("T-shirt weather")
`,
    tests: [[["42"], "Wear a coat"], [["70"], "T-shirt weather"], [["50"], "T-shirt weather"]],
  }),
  out({
    title: "Backwards Word",
    prompt: "Ask for a word, then print it backwards. `maine` becomes `eniam`.",
    starter: `
word = input("Word? ")
`,
    hints: ["Python can slice a string backwards with `word[::-1]`.", "Print that slice: `print(word[::-1])`."],
    solution: `
word = input("Word? ")
print(word[::-1])
`,
    tests: [[["maine"], "eniam"], [["byte"], "etyb"], [["a"], "a"]],
  }),
  out({
    title: "Pints of Blueberries",
    prompt: "Blueberries cost $4 a pint. Ask how many pints, then print the total like `Total: $12`.",
    starter: `
pints = int(input("How many pints? "))
`,
    hints: ["Multiply the number of pints by 4.", 'Try `print(f"Total: ${pints * 4}")`.'],
    solution: `
pints = int(input("How many pints? "))
print(f"Total: \${pints * 4}")
`,
    tests: [[["3"], "Total: $12"], [["0"], "Total: $0"], [["10"], "Total: $40"]],
  }),
  out({
    title: "Star Staircase",
    prompt: "Print a staircase of stars 4 rows tall:\n`*`\n`**`\n`***`\n`****`",
    starter: `
# Print a staircase of stars, 4 rows tall
`,
    hints: ['In Python, `"*" * 3` makes `"***"`.', 'Loop with `for i in range(1, 5):` and print `"*" * i`.'],
    solution: `
for i in range(1, 5):
    print("*" * i)
`,
    tests: [[[], "*\n**\n***\n****"]],
  }),
  out({
    title: "Bigger Number",
    prompt: "Ask for two numbers, one at a time, then print the bigger one. If they're the same, print that number.",
    starter: `
a = int(input("First number? "))
b = int(input("Second number? "))
`,
    hints: ["Compare them with `if a > b:`.", "Python also has a built-in: `max(a, b)`."],
    solution: `
a = int(input("First number? "))
b = int(input("Second number? "))
print(max(a, b))
`,
    tests: [[["3", "8"], "8"], [["10", "2"], "10"], [["5", "5"], "5"], [["-4", "-9"], "-4"]],
  }),
  out({
    title: "Word Count",
    prompt: "Ask for a sentence, then print how many words are in it.",
    starter: `
sentence = input("Sentence? ")
`,
    hints: ["`sentence.split()` breaks a sentence into a list of words.", "`len(...)` tells you how long a list is."],
    solution: `
sentence = input("Sentence? ")
print(len(sentence.split()))
`,
    tests: [[["I love coding in Maine"], "5"], [["Byte"], "1"], [["one two  three"], "3"]],
  }),
  out({
    title: "Double It",
    prompt: "Ask for a number, then print that number doubled.",
    starter: `
n = int(input("Number? "))
`,
    hints: ["Doubling means multiplying by 2.", "`print(n * 2)`"],
    solution: `
n = int(input("Number? "))
print(n * 2)
`,
    tests: [[["4"], "8"], [["0"], "0"], [["-3"], "-6"]],
  }),
  out({
    title: "Next Birthday",
    prompt: "Ask for the user's age, then print `Next year you will be 13` (with their real age plus one).",
    starter: `
age = int(input("How old are you? "))
`,
    hints: ["Add 1 to `age`.", 'Use an f-string: `print(f"Next year you will be {age + 1}")`.'],
    solution: `
age = int(input("How old are you? "))
print(f"Next year you will be {age + 1}")
`,
    tests: [[["12"], "Next year you will be 13"], [["40"], "Next year you will be 41"], [["0"], "Next year you will be 1"]],
  }),
  out({
    title: "Even or Odd",
    prompt: "Ask for a number. Print `Even` if it's even and `Odd` if it's odd.",
    starter: `
n = int(input("Number? "))
`,
    hints: ["`n % 2` is the remainder when you divide by 2.", "If `n % 2 == 0`, the number is even."],
    solution: `
n = int(input("Number? "))
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
`,
    tests: [[["4"], "Even"], [["7"], "Odd"], [["0"], "Even"]],
  }),
  out({
    title: "Shout It",
    prompt: "Ask for a word, then print it in ALL CAPS with an exclamation point. `hello` becomes `HELLO!`",
    starter: `
word = input("Word? ")
`,
    hints: ["`word.upper()` makes every letter uppercase.", 'Add `"!"` to the end with `+`.'],
    solution: `
word = input("Word? ")
print(word.upper() + "!")
`,
    tests: [[["hello"], "HELLO!"], [["Maine"], "MAINE!"], [["byte"], "BYTE!"]],
  }),
  out({
    title: "Rectangle Area",
    prompt: "Ask for a width, then a height. Print the area of the rectangle (width times height).",
    starter: `
width = int(input("Width? "))
height = int(input("Height? "))
`,
    hints: ["Area is `width * height`.", "Print the result with `print(...)`."],
    solution: `
width = int(input("Width? "))
height = int(input("Height? "))
print(width * height)
`,
    tests: [[["3", "4"], "12"], [["10", "2"], "20"], [["7", "1"], "7"]],
  }),
  out({
    title: "Count to Ten",
    prompt: "Print the numbers 1 to 10, each on its own line.",
    starter: `
# Print 1 through 10
`,
    hints: ["`range(1, 11)` gives you 1 up to 10.", "Use `for i in range(1, 11):` and `print(i)`."],
    solution: `
for i in range(1, 11):
    print(i)
`,
    tests: [[[], "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"]],
  }),
  out({
    title: "Name Echo",
    prompt: "Ask for a name, then print it 3 times, each on its own line.",
    starter: `
name = input("Name? ")
`,
    hints: ["A loop can repeat a print for you.", "`for i in range(3):` then `print(name)` inside."],
    solution: `
name = input("Name? ")
for i in range(3):
    print(name)
`,
    tests: [[["Sam"], "Sam\nSam\nSam"], [["Byte"], "Byte\nByte\nByte"]],
  }),
  out({
    title: "Pass or Try Again",
    prompt: "Ask for a test score. If it's 70 or higher, print `Pass`. Otherwise print `Try again`.",
    starter: `
score = int(input("Score? "))
`,
    hints: ["Use `>=` to mean 'or higher'.", "`if score >= 70:`"],
    solution: `
score = int(input("Score? "))
if score >= 70:
    print("Pass")
else:
    print("Try again")
`,
    tests: [[["70"], "Pass"], [["69"], "Try again"], [["100"], "Pass"]],
  }),
  out({
    title: "Minutes to Seconds",
    prompt: "Ask for a number of minutes, then print how many seconds that is.",
    starter: `
minutes = int(input("Minutes? "))
`,
    hints: ["There are 60 seconds in a minute.", "`print(minutes * 60)`"],
    solution: `
minutes = int(input("Minutes? "))
print(minutes * 60)
`,
    tests: [[["2"], "120"], [["0"], "0"], [["10"], "600"]],
  }),
  out({
    title: "First Letter",
    prompt: "Ask for a word, then print just its first letter.",
    starter: `
word = input("Word? ")
`,
    hints: ["Strings start counting at 0.", "`word[0]` is the first letter."],
    solution: `
word = input("Word? ")
print(word[0])
`,
    tests: [[["Maine"], "M"], [["byte"], "b"], [["x"], "x"]],
  }),
  out({
    title: "Name Length",
    prompt: "Ask for a name, then print `Your name has 3 letters` (with the real number).",
    starter: `
name = input("Name? ")
`,
    hints: ["`len(name)` counts the letters.", 'Use an f-string: `f"Your name has {len(name)} letters"`.'],
    solution: `
name = input("Name? ")
print(f"Your name has {len(name)} letters")
`,
    tests: [[["Sam"], "Your name has 3 letters"], [["Harper"], "Your name has 6 letters"], [["Byte"], "Your name has 4 letters"]],
  }),
  out({
    title: "Even Steps",
    prompt: "Print the even numbers from 2 to 10, each on its own line.",
    starter: `
# Print 2, 4, 6, 8, 10
`,
    hints: ["`range` can take a step: `range(start, stop, step)`.", "`range(2, 11, 2)` gives 2, 4, 6, 8, 10."],
    solution: `
for i in range(2, 11, 2):
    print(i)
`,
    tests: [[[], "2\n4\n6\n8\n10"]],
  }),
  out({
    title: "Positive, Negative, or Zero",
    prompt: "Ask for a number. Print `Positive`, `Negative`, or `Zero`.",
    starter: `
n = int(input("Number? "))
`,
    hints: ["You need three choices, so use `if`, `elif`, and `else`.", "Check `n > 0`, then `n < 0`. Whatever's left is zero."],
    solution: `
n = int(input("Number? "))
if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")
`,
    tests: [[["5"], "Positive"], [["-2"], "Negative"], [["0"], "Zero"]],
  }),
  out({
    title: "Celsius to Fahrenheit",
    prompt: "Ask for a temperature in Celsius. Print it in Fahrenheit, rounded to a whole number. The formula is `C * 9 / 5 + 32`.",
    starter: `
c = int(input("Celsius? "))
`,
    hints: ["Do the math first: `f = c * 9 / 5 + 32`.", "`round(f)` rounds to the nearest whole number."],
    solution: `
c = int(input("Celsius? "))
print(round(c * 9 / 5 + 32))
`,
    tests: [[["0"], "32"], [["100"], "212"], [["37"], "99"], [["-40"], "-40"]],
  }),
  out({
    title: "Add Them Up",
    prompt: "Ask for two numbers, then print their sum.",
    starter: `
a = int(input("First number? "))
b = int(input("Second number? "))
`,
    hints: ["Use `+` to add.", "`print(a + b)`"],
    solution: `
a = int(input("First number? "))
b = int(input("Second number? "))
print(a + b)
`,
    tests: [[["2", "3"], "5"], [["10", "-4"], "6"], [["0", "0"], "0"]],
  }),
  out({
    title: "Times Table Row",
    prompt: "Ask for a number, then print its times table from 1 to 5 like this:\n`3 x 1 = 3`\n`3 x 2 = 6`\n...and so on up to `x 5`.",
    starter: `
n = int(input("Number? "))
`,
    hints: ["Loop `for i in range(1, 6):`.", 'Print `f"{n} x {i} = {n * i}"` inside the loop.'],
    solution: `
n = int(input("Number? "))
for i in range(1, 6):
    print(f"{n} x {i} = {n * i}")
`,
    tests: [[["3"], "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15"], [["1"], "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5"]],
  }),
  out({
    title: "Good Morning, Maine",
    prompt: "Ask for the hour (0 to 23). Print `Good morning` before 12, `Good afternoon` from 12 up to (not including) 18, and `Good evening` after that.",
    starter: `
hour = int(input("Hour? "))
`,
    hints: ["Check the smallest range first: `if hour < 12:`.", "Then `elif hour < 18:`, then `else:`."],
    solution: `
hour = int(input("Hour? "))
if hour < 12:
    print("Good morning")
elif hour < 18:
    print("Good afternoon")
else:
    print("Good evening")
`,
    tests: [[["9"], "Good morning"], [["12"], "Good afternoon"], [["18"], "Good evening"], [["23"], "Good evening"]],
  }),
  out({
    title: "Last Letter",
    prompt: "Ask for a word, then print just its last letter.",
    starter: `
word = input("Word? ")
`,
    hints: ["Negative numbers count from the end of a string.", "`word[-1]` is the last letter."],
    solution: `
word = input("Word? ")
print(word[-1])
`,
    tests: [[["Maine"], "e"], [["byte"], "e"], [["moose"], "e"], [["cat"], "t"]],
  }),
  out({
    title: "Square It",
    prompt: "Ask for a number, then print that number times itself.",
    starter: `
n = int(input("Number? "))
`,
    hints: ["Squaring means `n * n`.", "You can also write `n ** 2`."],
    solution: `
n = int(input("Number? "))
print(n * n)
`,
    tests: [[["4"], "16"], [["0"], "0"], [["-3"], "9"]],
  }),
  out({
    title: "Lobster Count",
    prompt: "Print `Lobster 1` through `Lobster 5`, each on its own line.",
    starter: `
# Print Lobster 1 through Lobster 5
`,
    hints: ["Loop with `for i in range(1, 6):`.", 'Print `f"Lobster {i}"`.'],
    solution: `
for i in range(1, 6):
    print(f"Lobster {i}")
`,
    tests: [[[], "Lobster 1\nLobster 2\nLobster 3\nLobster 4\nLobster 5"]],
  }),
  out({
    title: "Secret Password",
    prompt: "Ask for a password. If it's exactly `byte123`, print `Welcome back`. Otherwise print `Wrong password`.",
    starter: `
password = input("Password? ")
`,
    hints: ["Use `==` to compare two strings.", '`if password == "byte123":`'],
    solution: `
password = input("Password? ")
if password == "byte123":
    print("Welcome back")
else:
    print("Wrong password")
`,
    tests: [[["byte123"], "Welcome back"], [["Byte123"], "Wrong password"], [["hello"], "Wrong password"]],
  }),
  out({
    title: "Average of Three",
    prompt: "Ask for three numbers, then print their average rounded to 1 decimal place.",
    starter: `
a = int(input("First? "))
b = int(input("Second? "))
c = int(input("Third? "))
`,
    hints: ["Add them up and divide by 3.", "`round(x, 1)` rounds to one decimal place."],
    solution: `
a = int(input("First? "))
b = int(input("Second? "))
c = int(input("Third? "))
print(round((a + b + c) / 3, 1))
`,
    tests: [[["1", "2", "3"], "2.0"], [["90", "85", "80"], "85.0"], [["1", "1", "2"], "1.3"]],
  }),
  out({
    title: "Ready, Set, Go",
    prompt: "Ask for a number. Count down from that number to 1, each on its own line, then print `Go!`",
    starter: `
n = int(input("Start from? "))
`,
    hints: ["`range(n, 0, -1)` counts down from n to 1.", 'Print `"Go!"` after the loop, not inside it.'],
    solution: `
n = int(input("Start from? "))
for i in range(n, 0, -1):
    print(i)
print("Go!")
`,
    tests: [[["3"], "3\n2\n1\nGo!"], [["1"], "1\nGo!"], [["5"], "5\n4\n3\n2\n1\nGo!"]],
  }),
  out({
    title: "A or An",
    prompt: "Ask for a word. If it starts with a vowel, print `an` before it. Otherwise print `a` before it. `apple` gives `an apple`, and `moose` gives `a moose`.",
    starter: `
word = input("Word? ")
`,
    hints: ['Check the first letter with `word[0].lower() in "aeiou"`.', 'Then print `"an " + word` or `"a " + word`.'],
    solution: `
word = input("Word? ")
if word[0].lower() in "aeiou":
    print("an " + word)
else:
    print("a " + word)
`,
    tests: [[["apple"], "an apple"], [["moose"], "a moose"], [["Owl"], "an Owl"], [["lighthouse"], "a lighthouse"]],
  }),
  out({
    title: "Sum to N",
    prompt: "Ask for a number n, then print 1 + 2 + ... + n.",
    starter: `
n = int(input("n? "))
`,
    hints: ["Start with `total = 0` and add each number in a loop.", "Loop over `range(1, n + 1)`."],
    solution: `
n = int(input("n? "))
total = 0
for i in range(1, n + 1):
    total += i
print(total)
`,
    tests: [[["5"], "15"], [["1"], "1"], [["10"], "55"]],
  }),
  out({
    title: "Silly Sentence",
    prompt: "Ask for an animal, then a verb. Print `The moose likes to swim.` using their words.",
    starter: `
animal = input("Animal? ")
verb = input("Verb? ")
`,
    hints: ["Put both variables into one f-string.", 'Try `f"The {animal} likes to {verb}."`'],
    solution: `
animal = input("Animal? ")
verb = input("Verb? ")
print(f"The {animal} likes to {verb}.")
`,
    tests: [[["moose", "swim"], "The moose likes to swim."], [["robot", "dance"], "The robot likes to dance."]],
  }),
  out({
    title: "Biggest of Three",
    prompt: "Ask for three numbers, then print the biggest one.",
    starter: `
a = int(input("First? "))
b = int(input("Second? "))
c = int(input("Third? "))
`,
    hints: ["`max` can take more than two numbers.", "`print(max(a, b, c))`"],
    solution: `
a = int(input("First? "))
b = int(input("Second? "))
c = int(input("Third? "))
print(max(a, b, c))
`,
    tests: [[["3", "9", "5"], "9"], [["10", "2", "7"], "10"], [["-1", "-5", "-3"], "-1"]],
  }),
  out({
    title: "Row of Stars",
    prompt: "Ask for a number, then print that many stars on one line.",
    starter: `
n = int(input("How many stars? "))
`,
    hints: ['`"*" * n` repeats the star n times.', 'Print it: `print("*" * n)`.'],
    solution: `
n = int(input("How many stars? "))
print("*" * n)
`,
    tests: [[["5"], "*****"], [["1"], "*"], [["8"], "********"]],
  }),
  out({
    title: "Multiples of Three",
    prompt: "Print 3, 6, 9, ... up to 30, each on its own line.",
    starter: `
# Print the multiples of 3 up to 30
`,
    hints: ["`range(3, 31, 3)` steps by 3.", "Or loop 1 to 10 and print `i * 3`."],
    solution: `
for i in range(3, 31, 3):
    print(i)
`,
    tests: [[[], "3\n6\n9\n12\n15\n18\n21\n24\n27\n30"]],
  }),
  out({
    title: "Leap Year",
    prompt: "Ask for a year. Print `Leap year` or `Not a leap year`. A year is a leap year if it divides by 4, except years that divide by 100, unless they also divide by 400.",
    starter: `
year = int(input("Year? "))
`,
    hints: ["`year % 4 == 0` checks if it divides by 4.", "Full rule: `(year % 4 == 0 and year % 100 != 0) or year % 400 == 0`"],
    solution: `
year = int(input("Year? "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Leap year")
else:
    print("Not a leap year")
`,
    tests: [[["2024"], "Leap year"], [["2023"], "Not a leap year"], [["1900"], "Not a leap year"], [["2000"], "Leap year"]],
  }),
  out({
    title: "Say It Again",
    prompt: "Ask for a word, then a number. Print the word that many times on one line, with spaces between. `hi` and `3` gives `hi hi hi`.",
    starter: `
word = input("Word? ")
times = int(input("How many times? "))
`,
    hints: ["`[word] * times` makes a list with the word repeated.", '`" ".join(...)` glues a list together with spaces.'],
    solution: `
word = input("Word? ")
times = int(input("How many times? "))
print(" ".join([word] * times))
`,
    tests: [[["hi", "3"], "hi hi hi"], [["Maine", "1"], "Maine"], [["go", "4"], "go go go go"]],
  }),
  out({
    title: "Initials",
    prompt: "Ask for a first name, then a last name. Print their initials like `H.S.`",
    starter: `
first = input("First name? ")
last = input("Last name? ")
`,
    hints: ["`first[0]` is the first letter of the first name.", 'Put it together: `first[0] + "." + last[0] + "."`'],
    solution: `
first = input("First name? ")
last = input("Last name? ")
print(first[0].upper() + "." + last[0].upper() + ".")
`,
    tests: [[["Harper", "Steenstra"], "H.S."], [["Ada", "Lovelace"], "A.L."], [["grace", "hopper"], "G.H."]],
  }),
  out({
    title: "Quarter Jar",
    prompt: "Ask how many quarters are in the jar. Print how much money that is, like `$1.25`, always with 2 decimal places.",
    starter: `
quarters = int(input("Quarters? "))
`,
    hints: ["Each quarter is worth 0.25 dollars.", 'Format with 2 decimals: `f"${amount:.2f}"`'],
    solution: `
quarters = int(input("Quarters? "))
print(f"\${quarters * 0.25:.2f}")
`,
    tests: [[["5"], "$1.25"], [["4"], "$1.00"], [["0"], "$0.00"]],
  }),
  out({
    title: "Down by Twos",
    prompt: "Print 10, 8, 6, 4, 2, 0 on their own lines, then print `Done`.",
    starter: `
# Count down by twos
`,
    hints: ["`range(10, -1, -2)` counts 10 down to 0 by twos.", 'Print `"Done"` after the loop.'],
    solution: `
for i in range(10, -1, -2):
    print(i)
print("Done")
`,
    tests: [[[], "10\n8\n6\n4\n2\n0\nDone"]],
  }),
  out({
    title: "Divisible?",
    prompt: "Ask for two numbers, a and b. Print `Yes` if a divides evenly by b, otherwise `No`.",
    starter: `
a = int(input("a? "))
b = int(input("b? "))
`,
    hints: ["If `a % b == 0`, there's no remainder.", "Use `if` and `else` to print Yes or No."],
    solution: `
a = int(input("a? "))
b = int(input("b? "))
if a % b == 0:
    print("Yes")
else:
    print("No")
`,
    tests: [[["10", "5"], "Yes"], [["10", "3"], "No"], [["0", "7"], "Yes"]],
  }),
  out({
    title: "Letter Grade",
    prompt: "Ask for a score. Print `A` for 90+, `B` for 80+, `C` for 70+, `D` for 60+, and `F` for anything lower.",
    starter: `
score = int(input("Score? "))
`,
    hints: ["Start from the top: `if score >= 90:`.", "Use `elif` for each lower grade and `else` for F."],
    solution: `
score = int(input("Score? "))
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
`,
    tests: [[["95"], "A"], [["90"], "A"], [["85"], "B"], [["72"], "C"], [["65"], "D"], [["40"], "F"]],
  }),
  out({
    title: "Guess the Number",
    prompt: "The secret number is 7. Ask for a guess. Print `Too low`, `Too high`, or `You got it!`",
    starter: `
secret = 7
guess = int(input("Guess? "))
`,
    hints: ["Compare `guess` to `secret`.", "Three outcomes means `if`, `elif`, `else`."],
    solution: `
secret = 7
guess = int(input("Guess? "))
if guess < secret:
    print("Too low")
elif guess > secret:
    print("Too high")
else:
    print("You got it!")
`,
    tests: [[["3"], "Too low"], [["9"], "Too high"], [["7"], "You got it!"]],
  }),
  out({
    title: "Square of Hashes",
    prompt: "Ask for a number n. Print a square that is n rows tall and n `#` wide.",
    starter: `
n = int(input("Size? "))
`,
    hints: ['One row is `"#" * n`.', "Print that row `n` times with a loop."],
    solution: `
n = int(input("Size? "))
for i in range(n):
    print("#" * n)
`,
    tests: [[["3"], "###\n###\n###"], [["1"], "#"], [["2"], "##\n##"]],
  }),
  out({
    title: "Shopping Trip",
    prompt: "Ask for three prices (whole dollars). Print the total like `Total: $15`.",
    starter: `
a = int(input("Price 1? "))
b = int(input("Price 2? "))
c = int(input("Price 3? "))
`,
    hints: ["Add the three prices together.", 'Print with an f-string: `f"Total: ${a + b + c}"`'],
    solution: `
a = int(input("Price 1? "))
b = int(input("Price 2? "))
c = int(input("Price 3? "))
print(f"Total: \${a + b + c}")
`,
    tests: [[["5", "4", "6"], "Total: $15"], [["0", "0", "1"], "Total: $1"], [["10", "20", "30"], "Total: $60"]],
  }),
  out({
    title: "Clock Time",
    prompt: "Ask for a number of minutes. Print it as hours and minutes like `2:05`. (125 minutes is 2 hours and 5 minutes.)",
    starter: `
minutes = int(input("Minutes? "))
`,
    hints: ["`minutes // 60` is the hours and `minutes % 60` is what's left.", 'Use `:02d` to always show two digits: `f"{h}:{m:02d}"`.'],
    solution: `
minutes = int(input("Minutes? "))
print(f"{minutes // 60}:{minutes % 60:02d}")
`,
    tests: [[["125"], "2:05"], [["60"], "1:00"], [["59"], "0:59"]],
  }),
  out({
    title: "Word Finder",
    prompt: "Ask for a sentence, then a word. Print `Found it` if the word is one of the words in the sentence, otherwise `Not found`.",
    starter: `
sentence = input("Sentence? ")
word = input("Word to find? ")
`,
    hints: ["`sentence.split()` gives a list of the words.", "`if word in sentence.split():`"],
    solution: `
sentence = input("Sentence? ")
word = input("Word to find? ")
if word in sentence.split():
    print("Found it")
else:
    print("Not found")
`,
    tests: [[["I love Maine", "Maine"], "Found it"], [["I love Maine", "Main"], "Not found"], [["code every day", "code"], "Found it"]],
  }),
  out({
    title: "Count the A's",
    prompt: "Ask for a word, then print how many times the letter `a` appears in it (lowercase a only).",
    starter: `
word = input("Word? ")
`,
    hints: ["Strings have a `.count()` method.", '`word.count("a")`'],
    solution: `
word = input("Word? ")
print(word.count("a"))
`,
    tests: [[["banana"], "3"], [["Maine"], "1"], [["xyz"], "0"]],
  }),
  out({
    title: "Square Numbers",
    prompt: "Print the squares of 1 through 5 (1, 4, 9, 16, 25), each on its own line.",
    starter: `
# Print 1, 4, 9, 16, 25
`,
    hints: ["Loop from 1 to 5.", "Print `i * i` each time."],
    solution: `
for i in range(1, 6):
    print(i * i)
`,
    tests: [[[], "1\n4\n9\n16\n25"]],
  }),
  out({
    title: "Snow Day",
    prompt: "Ask how many inches of snow fell. If it's 6 or more, print `Snow day!` Otherwise print `School is open`.",
    starter: `
inches = int(input("Inches of snow? "))
`,
    hints: ["Use `>=` for 'or more'.", "`if inches >= 6:`"],
    solution: `
inches = int(input("Inches of snow? "))
if inches >= 6:
    print("Snow day!")
else:
    print("School is open")
`,
    tests: [[["8"], "Snow day!"], [["6"], "Snow day!"], [["2"], "School is open"]],
  }),
  out({
    title: "Backwards Sentence",
    prompt: "Ask for a sentence, then print its words in reverse order. `I love Maine` becomes `Maine love I`.",
    starter: `
sentence = input("Sentence? ")
`,
    hints: ["`sentence.split()` makes a list of words, and `[::-1]` flips a list.", '`" ".join(...)` puts the words back together.'],
    solution: `
sentence = input("Sentence? ")
print(" ".join(sentence.split()[::-1]))
`,
    tests: [[["I love Maine"], "Maine love I"], [["hello"], "hello"], [["one two three four"], "four three two one"]],
  }),
  out({
    title: "Maine Sales Tax",
    prompt: "Maine sales tax is 5.5%. Ask for a price in dollars, then print the price with tax, with exactly 2 decimal places (just the number, like `10.55`).",
    starter: `
price = int(input("Price? "))
`,
    hints: ["Adding 5.5% is the same as multiplying by `1.055`.", 'Format it: `f"{total:.2f}"`'],
    solution: `
price = int(input("Price? "))
print(f"{price * 1.055:.2f}")
`,
    tests: [[["100"], "105.50"], [["10"], "10.55"], [["0"], "0.00"]],
  }),
  out({
    title: "Long or Short",
    prompt: "Ask for a word. If it has more than 5 letters, print `Long word`. Otherwise print `Short word`.",
    starter: `
word = input("Word? ")
`,
    hints: ["`len(word)` is how many letters it has.", "`if len(word) > 5:`"],
    solution: `
word = input("Word? ")
if len(word) > 5:
    print("Long word")
else:
    print("Short word")
`,
    tests: [[["lighthouse"], "Long word"], [["moose"], "Short word"], [["cat"], "Short word"]],
  }),
  out({
    title: "Fizz Check",
    prompt: "Ask for a number. If it divides evenly by 3, print `Fizz`. Otherwise print the number.",
    starter: `
n = int(input("Number? "))
`,
    hints: ["`n % 3 == 0` means it divides by 3.", "In the `else`, just `print(n)`."],
    solution: `
n = int(input("Number? "))
if n % 3 == 0:
    print("Fizz")
else:
    print(n)
`,
    tests: [[["9"], "Fizz"], [["4"], "4"], [["0"], "Fizz"]],
  }),
  out({
    title: "Number Stairs",
    prompt: "Print this pattern:\n`1`\n`12`\n`123`\n`1234`",
    starter: `
# Print the number stairs
`,
    hints: ["Build up a string one digit at a time.", 'Start with `line = ""`, then in a loop do `line += str(i)` and print it.'],
    solution: `
line = ""
for i in range(1, 5):
    line += str(i)
    print(line)
`,
    tests: [[[], "1\n12\n123\n1234"]],
  }),
  out({
    title: "Numbered List",
    prompt: "Ask for a word, then print it 3 times as a numbered list:\n`1. moose`\n`2. moose`\n`3. moose`",
    starter: `
word = input("Word? ")
`,
    hints: ["Loop `for i in range(1, 4):`.", 'Print `f"{i}. {word}"`.'],
    solution: `
word = input("Word? ")
for i in range(1, 4):
    print(f"{i}. {word}")
`,
    tests: [[["moose"], "1. moose\n2. moose\n3. moose"], [["Byte"], "1. Byte\n2. Byte\n3. Byte"]],
  }),
  out({
    title: "Weekend?",
    prompt: "Ask for a day of the week (like `Monday`). Print `Weekend!` for Saturday or Sunday, and `School day` for anything else.",
    starter: `
day = input("Day? ")
`,
    hints: ['Use `or` to check two things: `day == "Saturday" or day == "Sunday"`.', 'You could also write `day in ["Saturday", "Sunday"]`.'],
    solution: `
day = input("Day? ")
if day == "Saturday" or day == "Sunday":
    print("Weekend!")
else:
    print("School day")
`,
    tests: [[["Saturday"], "Weekend!"], [["Monday"], "School day"], [["Sunday"], "Weekend!"]],
  }),
  out({
    title: "Five Number Total",
    prompt: "Ask for 5 numbers, one at a time, then print their total.",
    starter: `
total = 0
# Ask 5 times and add each number to total
`,
    hints: ["Put the `input` inside a loop that runs 5 times.", "`total += int(input())` adds each answer."],
    solution: `
total = 0
for i in range(5):
    total += int(input("Number? "))
print(total)
`,
    tests: [[["1", "2", "3", "4", "5"], "15"], [["10", "0", "0", "0", "-10"], "0"], [["7", "7", "7", "7", "7"], "35"]],
  }),
];
