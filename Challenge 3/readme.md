# Challenge 3 - YATM Microservice
At Tuenti, we have a degree of freedom to choose the language of different microservices. Each microservice is based on what the developer knows best and what they think is the most suitable platform for the thing they are solving. We recently discovered a microservice running on an old platform, and we want to create a docker image in order to replace it with newer instances. We were able to extract the code from the machines and we also dumped the contents, which originally looked like this:

<p style="text-align: center"><img src="https://contest.tuenti.net/resources/img/yatm.jpg"></p>

We have also saved what the original machine was returning for those tapes, which could be useful for debugging. So we need you to help us write an interpreter for that code.

**Input**

The input will contain the machine code and the contents of the tapes in another well-known format.

**Output**

The final state for each tape, each on a different line and starting with Tape #N:

**Sample Input**
```
---
code:
  start:
    '#':
      move: right
      state: replace
  replace:
    '0':
      write: '1'
      move: right
    '1':
      state: end
    ' ':
      write: '#'
      state: end
tapes:
  1: '#001'
  2: '#0001' 
  3: '#0'
  4: '#1'
...
```
**Sample Output**
```
Tape #1: #111
Tape #2: #1111
Tape #3: #1#
Tape #4: #1
```
