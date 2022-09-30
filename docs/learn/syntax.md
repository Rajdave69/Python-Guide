---
sidebar_position: 0
---
import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";

# Python Syntax

This section will teach you the basics of Python syntax, indentation, and comments.

## Basic Syntax

Python is a very simple language, and has a very straightforward syntax. It encourages programmers to program without boilerplate (prepared) code. The simplest function in Python is the "print" directive - it simply prints out a line (and also includes a newline, unlike in C).

Before starting to code, let's know about some basic functions to input and display the output of the python program.

As aforementioned, you can store different sorts of data in different variables
In the previous examples we only stored certain constants in the variable, now we'll learn to store dynamic inputs from the terminal window and display it.

```python title="main.py"
print("Hello World!")
```

This line of code uses the print() function to print the string "Hello World!" to the screen.


:::tip "Pythonic" Code

It's better to make code look like Python code, rather than C code. This means using spaces instead of tabs, and using lowercase names for functions and variables. This is called "Pythonic" code.

It is also recommended to use the `snake_case` convention for naming variables and functions. This means that all words are lowercase, and spaces are replaced with underscores. For example, `my_function` and `my_variable`.

- Make sure to keep a space before and after the `=` equal sign when assigning values to variables, for example `x = 5`.
- Make sure to keep a space after (not before) commas, for example `print("Hello", "World")`.
- Make sure to keep a space after (not before) colons, for example `if x == 5:`.
- Make sure to not leave a space before parentheses, for example `print("Hello")` and `my_function()`, not `print ("Hello")` and `my_function ()`.
- Do not use semicolons at the end of Python statements.
- Have good variable names, for example `a` is a bad variable name, but `age` is a good variable name.
- Prefer double quotes over single quotes, for example `print("Hello World")` instead of `print('Hello World')`.
- Prefer `f-strings` over `format()` or `%` string formatting, for example `print(f"Hello {name}")` instead of `print("Hello {}".format(name))` or `print("Hello %s" % name)`. It makes the code more human-readable/

<Tabs>
<TabItem value="right" label="✔ Right" default>

```python
number_one = input("Enter number 1: ")
number_two = input("Enter number 2: ")

print(f"Sum of {a} and {b} is {a+b}")
```

</TabItem>
<TabItem value="wrong" label="❌ Wrong">

```python
b=input ( "Enter number 1" )
a=input ( "Enter number 2" )

print ( " Sum of",b,"and",a,"is",b+a )
```

</TabItem>
</Tabs>

:::


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
# This line of code prints a string, "Hello, World!"
```
Comments can be used to explain Python code. They can be used to explain what the code does, or why it does something. Whatever is written after the `#` symbol will be ignored by Python while running the code.