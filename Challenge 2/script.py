from __future__ import print_function
import operator

corpus = open('corpus.txt', 'r').readline().split(' ')
output = open('output.txt', 'w')
input = open('testInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()

for test, line in enumerate(lines):
    results = {}
    [start, end] = line.split(' ')

    for i in range(int(start), int(end)):
        word = corpus[i]
        if word in results:
            results[word] += 1
        else:
            results[word] = 1

    top = sorted(results.items(), key=operator.itemgetter(1), reverse=True)

    print("Case #{0}: {1}".format(test+1, ",".join(map((lambda x: "{0} {1}".format(x[0], x[1])), top[:3]))), file=output)
