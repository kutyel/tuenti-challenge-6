import operator

corpus = open('corpus.txt', 'r').readline().split(' ')
input = open('submitInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()
test = 1

for line in lines:
    result = {}
    start = int(line.split(' ')[0])
    end = int(line.split(' ')[1])

    for i in range(start, end):
        word = corpus[i]
        if word in result:
            result[word] += 1
        else:
            result[word] = 1

    top = sorted(result.items(), key=operator.itemgetter(1))

    print "Case #%d: %s %d,%s %d,%s %d" % (test, top[0][0], top[0][1], top[1][0], top[1][1], top[2][0], top[2][1])
    
    test += 1
