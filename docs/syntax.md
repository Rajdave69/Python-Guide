---
sidebar_position: 0
---

# Python Syntax

This section will teach you the basics of Python syntax, indentation, and comments.

## Basic Syntax

Python is a very simple language, and has a very straightforward syntax. It encourages programmers to program without boilerplate (prepared) code. The simplest function in Python is the "print" directive - it simply prints out a line (and also includes a newline, unlike in C).

```python title="main.py"
print("Hello World!")
```
This line of code uses the print() function to print the string "Hello World!" to the screen.

## Variables 

Variables are anything that store some kind of data. In Python, you don't need to declare a variable before using it. You can just assign a value to it. For example:

```python title="main.py"
x = "Hello World"
```
This line of code creates a variable called `x` and assigns the value `Hello World` to it.
Variables are meant to be used when you are going to use the same value multiple times. For example the value of PI, which you can set to a variable and then use it repeatedly around your code.

Note: 
* Variables are case-sensitive, so `x` and `X` are two different variables. 
* Variables can't start with a number, so `1x` is not a valid variable name and can not contain spaces, so `my variable` is not a valid variable name either.
* Variables can only contain letters, numbers, and underscores!

:::tip Best Practices

It is better practice to keep discriptive variable names. For example, a variable that stores someone's username should be called something like `username` instead of `u` or a short name.

:::

## Indentation

Indentation is a very important part of Python. It is used to define a block of code. For example, if you want to create an "if statement", you have to indent the code that should be executed if the statement is true.

```python title="main.py"
if 5 > 2:
    print("Five is greater than two!")
```
A single indent is 4 spaces wide. You can use tabs instead of spaces, which is easier to use and edit.


## Colons

Colons are used to define a block of code. For example, if you want to create an "if statement", you have to use a colon at the end of the statement.

```python title="main.py"
if 2 > 5:
    print("Five is not greater than two!")
```
Here, there is a colon after the if statement. This means that the code after the colon will only be executed if the statement is true.

## Comments

Comments are used to explain Python code. They are created by using the `#` symbol.

```python title="comments.py"'
# This is a comment
print("Hello, World!") # This is a comment
```
Comments can be used to explain Python code. They can be used to explain what the code does, or why it does something. Whatever is written after the `#` symbol will be ignored by Python while running the code.