from __future__ import print_function

with open('output.txt', 'w') as output:

    with open('submitInput.txt', 'r') as input_:
        cases = int(input_.readline())
        lines = input_.readlines()

        for test, line in enumerate(lines):
            result = 0
            people = int(line)

            if people == 4:
                result = 1
            else:
                while people > 0:
                    people -= 4 if result < 1 else 2
                    result += 1

            print("Case #{0}: {1}".format(test+1, result), file=output)
