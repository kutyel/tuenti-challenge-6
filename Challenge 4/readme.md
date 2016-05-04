# Challenge 4 - Hadouken!
Ryu is training for the upcoming Street Fighter tournament using the following moves and combos:

**Moves**

![artboard](https://contest.tuenti.net/resources/img/artboard.png)

**Combos**

![combos](https://contest.tuenti.net/resources/img/combo.png)

Assuming Ryu can't finish two combos at the same time, can you count the number of times Ryu does not perform a combo because the last move is missing?

**Input**

In the first line, an integer N that represents the numbers of training sessions that Ryu performs. The following N lines indicate the moves Ryu performs in each training session with K length.

**Output**

For each training session, the output is the string "Case #t:" followed by the string with the answer.

**Limits**

- 1 ≤ **K** ≤ 200000

**Sample Input**
```
7
D-D-U
R-D-RD-L-D-LD-L-K
L-LD-D-RD-R-K
R-D-RD
R-D-RD-R
D-LD-L-LD-D-RD-R-P
R-D-RD-R-D-RD
```
**Sample Output**
```
Case #1: 0
Case #2: 1
Case #3: 1
Case #4: 1
Case #5: 2
Case #6: 1
Case #7: 3
```
