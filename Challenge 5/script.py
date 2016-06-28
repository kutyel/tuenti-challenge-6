from __future__ import print_function
import re
import socket

words = [word for word in open("words.txt") if len(word) == 5]

with open("output.txt", "w") as output:
    sock = socket.socket()
    sock.connect(("52.49.91.111", 9988))
    try:
        while True:
            # press enter to continue
            sock.send("\n")
            for word in words:
                sock.send(word)
                response = sock.recv(1024)
                print(response)
                # TODO: use this regex to filter words
                print(re.findall("_*\s*\w*", response))
    except socket.error as e:
        print("Error: {0}".format(e))
        sock.close()
