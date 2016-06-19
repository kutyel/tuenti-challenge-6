from __future__ import print_function
import operator

corpus = open('corpus.txt', 'r').readline().split(' ')
output = open('output.txt', 'w')

with open('testInput.txt', 'r') as input_:
    cases = input_.readline()
    lines = input_.readlines()

    for test, line in enumerate(lines):
        results = {}

        for i in range(*map(int, line.split(" ", 1))):
            word = corpus[i]
            try:
                if word in results:
                    results[word] += 1
                else:
                    results[word] = 1
            except:
                print("Something went wrong checking the dictionary!")

        top = sorted(results.items(), key=operator.itemgetter(1),
                     reverse=True)

        print("Case #{0}: {1}".format(test+1, ",".join(map((lambda x:
              "{0} {1}".format(x[0], x[1])), top[:3]))), file=output)
