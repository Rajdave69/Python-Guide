---
sidebar_position: 6
---

# Loops

## What are loops?

Loops are used to repeat a block of code a certain number of times. There are two types of loops in Python: `for` loops and `while` loops.

## The `for` loop

The `for` loop is used to repeat a block of code a certain number of times. The `for` loop is used to iterate over a sequence (list, tuple, string, etc.).

### Loop x Times

To loop a block of code a certain number of times, we can use the `range()` function. The `range()` function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.

This code will print the numbers 0 to 4. Keep in mind that numbers are indexed from 0, so the first number is 0, not 1. So 0-4 means 5 numbers.

```python
for i in range(5):
    print(i)
```

Here, `i` is a variable that will be used to iterate over the sequence. The variable can be named anything, but it is common to use i, j, k, etc. as variable names in loops.

### Loop Through a Sequence

To loop through a sequence, we can use the `for` loop. This code will print the numbers 1 to 5.

```python
for i in ["apple", "banana", "cherry"]:
    print(i)
```

The `for` loop will iterate over the sequence, and print each item in the sequence.

The variable `i` stores the value of the current item in the sequence. It changes every time the loop goes through a new item in the sequence.

### Loop Through a String

Strings are also sequences, which means that we can loop through the letters in a string.

This code will print each letter in the word "banana".

```python
for i in "banana":
    print(i)
```

## The `while` loop

The `while` loop is used to repeat a block of code as long as a condition is true.

### Loop While Condition is True

This code will print the numbers 0 to 4.

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

The `while` loop will continue to execute as long as the condition is true. The condition is checked before each iteration, so if the condition becomes false, the loop will stop even if it has not finished the current iteration.

The `while` loop is useful when you don't know how many times you want to loop the code.

### Infinite Loops

An infinite loop is a loop that never ends. This code will loop forever.

```python
while True:
    print("This will loop forever")
```

This code will also loop forever.

```python

i = 0
while i < 5:
    print(i)
```

The `while` loop will continue to execute as long as the condition is true. Since the condition is always true, the loop will never end.



## Special Loops

Here, we will go over some special loops.

### Nested Loops

A nested loop is a loop inside a loop.

The "inner loop" will be executed one time for each iteration of the "outer loop".

This code will print each adjective for every fruit.

```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)
```

### Looping through multiple lists

This code will print each fruit, and then each vegetable.

```python
fruits = ["apple", "banana", "cherry"]
vegetables = ["lettuce", "cucumber", "tomato"]

for fruit, vegetable in zip(fruits, vegetables):
    print(fruit, vegetable)
```



## Important Statements

Here, we will go over some important statements that are used in loops.

### The `break` Statement

The `break` statement is used to stop the loop before it has looped through all the items.

This code will print the numbers 0 to 4.

```python
i = 0
while i < 5:
    print(i)
    if i == 4:
        break
    i += 1
```


### The `continue` Statement

The `continue` statement is used to stop the current iteration of the loop, and continue with the next.

This code will print the numbers 0 to 4.

```python
i = 0

while i < 5:
    i += 1
    if i == 3:
        continue
    print(i)
```


### The `else` Statement

The `else` statement is used with loops to execute a block of code once when the condition no longer is true.

This code will print the numbers 0 to 4, and then print "Finally finished!".

```python
i = 0
while i < 5:
    print(i)
    i += 1
else:
    print("Finally finished!")
```

The `else` statement will be executed even if the loop is stopped by a `break` statement.

This code will print the numbers 0 to 4, and then print "Finally finished!".

```python
i = 0

while i < 5:
    print(i)
    if i == 4:
        break
    i += 1
else:
    print("Finally finished!")
```

