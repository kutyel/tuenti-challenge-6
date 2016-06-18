from __future__ import print_function

with open('output.txt', 'w') as output:

    with open('testInput.txt', 'r') as input_:
        cases = int(input_.readline())
        lines = input_.readlines()

        for test, line in enumerate(lines):
            ones, fact2, fact5 = 1, 0, 0
            num = int(line)

            while num % 2 == 0:
                fact2 += 1
                num /= 2

            while num % 5 == 0:
                fact5 += 1
                num /= 5

            zeroes = max(fact2, fact5)
            mod = 1 % num

            while mod:
                mod = (10 * mod + 1) % num
                ones += 1

            print("Case #{0}: {1} {2}".format(test+1, ones, zeroes),
                file=output)
