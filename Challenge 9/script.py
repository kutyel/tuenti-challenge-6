from __future__ import print_function

outpt = open('output.txt', 'w')
input = open('testInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()

for test, line in enumerate(lines):
    ones = 1
    fact2 = 0
    fact5 = 0
    num = int(line)

    while num % 2 == 0:
        fact2 += 1
        num /= 2

    while num % 5 == 0:
        fact5 += 1
        num /= 5

    zeroes = max(fact2, fact5)
    mod = 1 % num

    while mod != 0:
        mod = (10 * mod + 1) % num
        ones += 1

    print("Case #{0}: {1} {2}".format(test+1, ones, zeroes), file=outpt)
