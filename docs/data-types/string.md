---
sidebar_position: 0
---

# Strings

A string is a sequence of characters. In Python, strings are surrounded by either single quotation marks, or double quotation marks.

```python
x = "Hello World!"
print(x) # Hello World!
```

## Formatted Strings

Formatted strings are a special type of strings which allow you to format strings. You can use them to insert variables into strings. For example:

```python
name = "John"
age = 36
x = f"My name is {name}, and I am {age}"
print(x) # Output: My name is John, and I am 36
```

Here, a `f` is put before the normal quotes. This tells Python that the string is a formatted string. You can use variables inside the string by enclosing them in curly brackets `{}`.


## String Methods

Strings are objects, and like all objects they have methods. Methods are functions that are built into objects.
These are some of the most common string methods:

```python
x = "Hello World!"
print(x.upper())                # HELLO WORLD!
print(x.lower())                # hello world!
print(x.replace("H", "J"))      # Jello World!
print(x.split())                # ['Hello', 'World!']
print(len(x))                   # 12
```

## String Concatenation

To concatenate, or combine, two strings you can use the `+` operator.

```python
x = "Hello"
y = "World!"
z = x + y
print(z) # HelloWorld!
```

## String Slicing

You can return a range of characters by using the slice syntax.

```python
x = "Hello World!"
print(x[0:4]) # Hello
```

## String Index

You can get a character at a position by using the square brackets.

```python
x = "Hello World!"
print(x[1]) # e
```

