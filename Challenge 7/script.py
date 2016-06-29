from __future__ import print_function
import numpy as np
import string

output = open("output.txt", "w")

def kadane(array):
    now, prev = 0, 0
    for i in array:
        prev = max(0, prev + i)
        now = max(prev, now)
    return now

def find_max_sum(matrix, num_cols, num_rows):
    max_sum = 0
    for left in range(0, num_cols):
        temp = [0] * num_rows
        for right in range(left, num_cols):
            for i in range(0, num_rows):
                temp[i] += matrix[i][right]
            aux_sum = kadane(temp)
            if aux_sum > max_sum:
                max_sum = aux_sum
    return max_sum

with open("submitInput.txt", "r") as input_:
    cases = int(input_.readline())
    lines = input_.readlines()
    result, index, index_of_case, n, m = 0, 0, 0, 0, 0
    test = 1
    matrix = []
    initializing_matrix, finished_case = False, False

    while test <= cases:
        line = lines[index]

        if index == index_of_case:
            n, m = map(int, line.split(" "))
            matrix = []
            index_of_case += n + 1
            initializing_matrix = True
            finished_case = False
        elif initializing_matrix:
            aux = []
            for i in range(0, m):
                try:
                    num = ("." + string.ascii_uppercase).index(line[i])
                except ValueError:
                    num = ("." + string.ascii_lowercase).index(line[i]) * -1
                except:
                    num = 0
                aux.append(num)
            matrix.append(aux)

            if len(matrix) == n:
                initializing_matrix = False
                finished_case = True

        if finished_case:
            # if the sum of any row or col is positive
            if any(map(lambda x: sum(x) > 0, matrix)) or any(map(lambda x: sum(x) > 0, zip(*matrix))):
                result = "INFINITY"
            # if all numbers in the matrix are negative
            elif all(all(y < 0 for y in x) for x in matrix):
                result = 0
            else:
                result = find_max_sum(np.tile(matrix, 2), m, n)
            
            print("Case #{0}: {1}".format(test, result), file=output)
            test += 1
        index += 1
