# Challenge 9 - 0-1 Immiscible numbers
Numbers are too complicated. You are tired of the fact that their digits can be in any order and they are confusing to read. Some numbers though, like x-y immiscible numbers, you like for their simplicity. We say that a number is x-y immiscible if its digits are only **x** and **y**, and they are in non-ascending order. For instance, 55533 is a 3-5 immiscible number. Among these your absolute favourites are 0-1 immiscible numbers. What is there to dislike about them? They're the easiest numbers to read ever!

Given a number N, we want to find the smallest multiple of N which is a 0-1 immiscible number.

**Input**

The first line will contain an integer **C**, the number of cases for our problem.
This is followed by **C** lines, each with an integer.

**Output**

For each case, a line starting with "Case #x: " followed by two integers separated by a space: the number of ones and the number zeroes of the smallest 0-1 immiscible multiple of N. Every line is followed by a new line character.

**Examples**

<table style="width:100%"><tbody><tr>
<td><pre>Case 1:

1
</pre></td><td><pre>Case 2:

10
</pre></td>
<td><pre>Case 3:

3
</pre></td>
<td><pre>Case 4:

12
</pre></td>
<td><pre>Case 5:

32
</pre></td>
<td><pre>Case 6:

10560
</pre></td>
</tr></tbody></table>

- In Case 1, the answer is 1
- In Case 2, the answer is 10
- In Case 3, the answer is 111 = 3 * 37
- In Case 4, the answer is 11100 = 12 * 52 * 37
- In Case 5, the answer is 100000 = 32 * 55
- In Case 6, the answer is 111111000000 = 10560 * 55 * 7 * 13 * 37

**Limits**

- 1 ≤ N ≤ 231

**Sample Input**
```
6
1
10
3
12
32
10560
```
**Sample Output**
```
Case #1: 1 0
Case #2: 1 1
Case #3: 3 0
Case #4: 3 2
Case #5: 1 5
Case #6: 6 6
```
