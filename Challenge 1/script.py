input = open('submitInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()
test = 1

for l in lines:
    result = 0
    people = int(l)

    if people == 4:
        result = 1
    else:
        while people > 0:
            people -= 4 if result < 1 else 2
            result += 1

    print "Case #%d: %d" % (test, result)
    test += 1
