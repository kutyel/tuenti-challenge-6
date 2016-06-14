input = open('testInput.txt', 'r')
lines = input.readlines()

for i in lines:
    if i == 0:
        cases = int(lines[0])
    elif i <= cases:
        people = int(lines[i])

        if people == 4:
            r = 1
        else:
            while people > 0:
                if r < 1:
                    people -= 4
                else:
                    people -= 2
                r += 1

        print "Case #%d: %d" % (i, r)
