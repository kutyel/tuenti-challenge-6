from __future__ import print_function
import operator

corpus = open('corpus.txt', 'r').readline().split(' ')
output = open('output.txt', 'w')
input = open('submitInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()

for test, line in enumerate(lines):
    result = {}
    [start, end] = line.split(' ')

    for i in range(int(start), int(end)):
        word = corpus[i]
        if word in result:
            result[word] += 1
        else:
            result[word] = 1

    top = sorted(result.items(), key=operator.itemgetter(1), reverse=True)

    print("Case #{0}: {1} {2},{3} {4},{5} {6}".format(test, top[0][0], top[0][1], top[1][0], top[1][1], top[2][0], top[2][1]), file=output)
