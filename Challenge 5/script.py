from __future__ import print_function
import socket

with open("output.txt", "w") as output:

    with open("words.txt", "r") as dictionary:
        words = dictionary.readlines()
        sock = socket.socket()
        sock.connect(("52.49.91.111", 9988))

        try:
            while True:
                response = sock.recv(1024)
                print(response)
                for word in words:
                    sock.send(word)
        except socket.timeout:
            print("Game Over")
            sock.close()

        print("result", file=output)
