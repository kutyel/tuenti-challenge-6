# Challenge 7 - Tiles
Your best friend, who happens to be Seshat, the goddess of mathematics, has invited you to her home. After giving you a tour, she shows you her favorite room: an infinite empty room with a tiled floor which extends as far as the eye can see. Every tile is identical in size and has some numbers neatly arranged on it. Obviously, Seshat says, every tile has her favorite matrix carved on it (every single tile has the exact same matrix). After seeing you looking in awe at the room, Seshat can't help but have some fun. She hands you a piece of chalk and asks, "Can you find the rectangle whose enclosed elements have the biggest sum?"

Given Seshat's favorite matrix, find the sum of this rectangle. You can consider the sum of an empty rectangle to be 0.

**Input**

The first line will contain an integer **C**, the number of cases for our problem.
Each case consists of a line with two integers, **N** and **M**, the dimensions of the matrix carved on the tiles. A set of **N** lines, each with a string of size **M** follows, describing the matrix. Each character **c** indicates a value of the matrix. An uppercase character indicates a positive value A = 1, B = 2 ... Z = 26, a lowercase character indicates a negative value a = -1, b = -2 ... z = -26 and a dot indicates 0.

**Output**

For each case, a line starting with "Case #x: " followed by the sum of the rectangle. If the sum is infinity, print INFINITY instead. Every line is followed by a new line character.

**Examples**
<table style="width:100%"><tbody><tr>
<td><pre>Case 1:

2 2
AB
CD

</pre></td><td><pre>Case 2:

1 1
c


</pre></td>
<td><pre>Case 3:

3 3
aea
aCb
aBa
</pre></td>
<td><pre>Case 4:

3 3
Bca
CeB
eAc
</pre></td>
</tr></tbody></table>

- In Case 1, the answer is infinity.
- In Case 2, the answer is 0. An empty rectangle is better than anything else.
- In Case 3, the answer is 5.
- In Case 4, the answer is 6. The rectangle contains the numbers -1, 2, 2, 3.

**Limits**

- 1 ≤ **N, M** ≤ 1000

**Sample Input**
```
4
2 2
AB
CD
1 1
c
3 3
aea
aCb
aBa
3 3
Bca
CeB
eAc
```
**Sample Output**
```
Case #1: INFINITY
Case #2: 0
Case #3: 5
Case #4: 6
```
