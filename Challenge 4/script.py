from __future__ import print_function

outpt = open('output.txt', 'w')
input = open('testInput.txt', 'r')
cases = int(input.readline())
lines = input.readlines()
combos = [
    "-D-RD-R-P-",
    "-R-D-RD-P-",
    "-D-LD-L-K-"
]
breaks = [
    "-D-RD-R-",
    "-R-D-RD-",
    "-D-LD-L-"
]
test = 1

for l in lines:
    result = 0
    offset = 0
    last10 = ""
    moves = "-" + l + "-"
    possible_combo = False

    while offset < len(moves):
        move = moves[offset:offset+2]
        offset += 2

        if len(move) > 1 and move[1] != "-":
            move += "-"
            offset += 1

        last10 += move
        current_length = len(last10)

        if current_length > 10:
            last10 = last10[current_length-10:]
            current_length = 10

        has_combo = False

        for c in combos:
            if c == last10:
                has_combo = True
                break

        if not has_combo and possible_combo:
            result += 1

        possible_combo = False

        if current_length >= 8:
            for b in breaks:
                if b == last10[current_length-8:]:
                    possible_combo = True
                    break

    if possible_combo:
        result += 1

    print("Case #{0}: {1}".format(test, result), file=outpt)
    test += 1
