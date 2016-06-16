from __future__ import print_function

outpt = open('output.txt', 'w')
input = open('submitInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()

for test, line in enumerate(lines):
    result = 0
    people = int(line)

    if people == 4:
        result = 1
    else:
        while people > 0:
            people -= 4 if result < 1 else 2
            result += 1

    print("Case #{0}: {1}".format(test, result), file=outpt)
