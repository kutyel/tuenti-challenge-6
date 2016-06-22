from __future__ import print_function
import yaml

output = open("output.txt", "w")

with open("testInput.txt", "r") as file:
    input_ = yaml.load(file)

    for test, tape in input_["tapes"].items():  
        off = 0
        state = "start"

        while state != "end":
            if off < len(tape):
                c = tape[off]
            else:
                c = " "
                tape += " "
            # there are 3 possible actions in each "state"
            action = input_["code"][state][c]
            # 1. write
            if "write" in action:
                tape = tape[:off] + tape[off:].replace(c, action["write"], 1)
            # 2. move
            if "move" in action:
                off += 1 if action["move"] == "right" else -1
            # 3. change state
            if "state" in action:
                state = action["state"]

        print("Tape #{0}: {1}".format(test, tape), file=output)
