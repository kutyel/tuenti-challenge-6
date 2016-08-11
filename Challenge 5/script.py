from __future__ import print_function
import re
import socket

words = [word for word in open("words.txt")]

def filter_words(regex):
    reg = re.compile(regex)
    return filter(reg.match, words)

def create_regex(search):
    return "".join(search).replace("_", "[A-Z]") + "\n"

with open("output.txt", "w") as output:
    sock = socket.socket()
    sock.connect(("52.49.91.111", 9988))
    try:
        while True:
            # press enter to continue
            sock.send("\n")
            
            res = sock.recv(1024)
            print(res)
            
            match = re.findall("(_|[A-Z]) (_|[A-Z]) (_|[A-Z]) (_|[A-Z])", res)
            
            if len(match) >= 1:
                # filter words every time we have a match
                for word in filter_words(create_regex(match[0])):
                    sock.send(word)
    except socket.error as e:
        print("Error: {0}".format(e))
        sock.close()
