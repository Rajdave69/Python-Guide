---
sidebar_position: 1
---

# Beginner Exercises

These exercises are meant for beginners, and are very easy to solve.

## Exercise 1

Create a variable called `name`, and assign your name to it.

<details><summary>Hint</summary>
<p>
    
Create a variable called `name`, and assign your name to it!
    
</p>
</details>

<details><summary>Solution</summary>

```python
name = "Raj"
```

</details>

## Exercise 2

Get the first character of the `name` variable.

<details><summary>Hint</summary>
<p>

Use the `[]` operator to get the first character of the `name` variable.

</p>

</details>

<details><summary>Solution</summary>

```python
name = "MyName"
print(name[0])
```

</details>

## Exercise 3

Print each character of the `name` variable on a new line.

<details><summary>Hint</summary>
<p>

Use a `for` loop to iterate through the `name` variable.

</p>

</details>

<details><summary>Solution</summary>

```python
name = "MyName"

for char in name:
    print(char)
```

</details>



## Exercise 4

Print the length of the `name` variable.

<details><summary>Hint</summary>

<p>

Use the `len()` function to get the length of the `name` variable.

</p>

</details>

<details><summary>Solution</summary>


```python
name = "MyName"

print(len(name))
```

</details>

## Exercise 5

Get two integer inputs from the user, and print their sum.

<details><summary>Hint</summary>

<p>

Use the `input()` function to get the inputs from the user, and use the `int()` function to convert them to integers.

</p>

</details>

<details><summary>Solution</summary>

```python
num1 = int(input("Enter a number: "))
num2 = int(input("Enter another number: "))
print(num1 + num2)
```

</details>


## Exercise 6

Get an integer input and check if it is even or odd.

<details><summary>Hint</summary>

<p>

Use the `input()` function to get the input from the user, and use the `int()` function to convert it to an integer.
Then, use the `%` operator to check if the number is even or odd.

</p>

</details>

<details><summary>Solution</summary>

```python
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even")
else:
    print("Odd")
```

</details>

## Exercise 7

Make a simple interest calculator.
Formula: `P * R * T / 100`

<details><summary>Hint</summary>

<p>

Use the `input()` function to get the inputs from the user, and use the `float()` function to convert them to floats.
Then, use the formula `P * R * T / 100` to calculate the simple interest.

</p>

</details>

<details><summary>Solution</summary>

```python
principal = float(input("Enter the principal amount: "))
rate = float(input("Enter the rate of interest: "))
time = float(input("Enter the time period: "))
   
simple_interest = principal * rate * time / 100
print(f"The simple interest is {simple_interest}")
```

</details>

## Exercise 8

Create a program that checks if you're old enough to drive.

<details><summary>Hint</summary>

<p>

Use the `input()` function to get the user's age, and use the `int()` function to convert it to an integer.
Then, use an `if` statement to check if the user is old enough to drive.

</p>

</details>

<details><summary>Solution</summary>

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are old enough to drive!")
else:
    print("You are not old enough to drive!")
```

</details>

## Exercise 9


