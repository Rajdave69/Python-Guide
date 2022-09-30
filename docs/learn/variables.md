---
sidebar_position: 2
---
# Variables

Variables are anything that store some kind of data. In Python, you don't need to declare a variable before using it. You can just assign a value to it. For example:

## Assigning a value to a variable

```python title="main.py"
a = 5                             # Integer
b = "Hello World!"                # String
c = 5.5                           # Float
d = True                          # Boolean
e = None                          # Nonetype
f = ["apple", "banana", "cherry"] # List
g = ("apple", "banana", "cherry") # Tuple
h = {"name" : "John", "age" : 36} # Dictionary
```

Here, the variables `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h` are all variables. You can assign any data type to a variable. You can also assign multiple variables in one line.

## Variable Name Rules

A variable can have a short name (like `x` and `y`) or a more descriptive name (age, carname, total_volume). Rules for Python variables:

- A variable name must start with a letter or the underscore character
- A variable name cannot start with a number
- A variable name can only contain alphanumeric characters and underscores (A-z, 0-9, and _ )
- Variable names are case-sensitive (age, Age and AGE are three different variables)
- Variable names cannot contain spaces
- Variable names cannot contain special characters like `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `+`, `=`, `{`, `}`, `[`, `]`, `|`, `\`, `:`, `;`, `"`, `'`, `<`, `>`, `,`, `.`, `/`, `?`
- Variable names cannot be any of the [Python keywords](https://www.w3schools.com/python/python_ref_keywords.asp)
- Variable names cannot be any of the [Python built-in functions](https://www.w3schools.com/python/python_ref_functions.asp)
  - For example, `print` is a built-in function, so you can't use it as a variable name.

## Extras

### Assign Multiple Variables in a Single Line

Python allows you to assign values to multiple variables in one line:

```python title="main.py"
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

### Assign the Same Value to Multiple Variables

And you can assign the same value to multiple variables in one line:

```python title="main.py"
x = y = z = "Orange"
print(x)
print(y)
print(z)
```

### Conversion of Variable Data Types

You can convert the data type--of a variable to another data type. For example, you can convert an integer to a string, or a string to an integer.

```python title="main.py"
x = 5
y = "John"
print(type(x)) # <class 'int'>

x = str(x) # "5"
y = int(y) # Error
```


You can convert the data-type of a variable to another data type using the following functions:
- `str()` - Converts the specified value into a string
- `int()` - Converts the specified value into an integer
- `float()` - Converts the specified value into a float
- `bool()` - Converts the specified value into a boolean
- `list()` - Converts the specified value into a list
- `tuple()` - Converts the specified value into a tuple
- `set()` - Converts the specified value into a set
- `dict()` - Converts the specified value into a dictionary
- `complex()` - Converts the specified value into a complex number

### Get the Type-of a Variable

You can get the data type-of a variable using the `type()` function.

```python title="main.py"
x = 5
y = "John"
print(type(x)) # <class 'int'>
print(type(y)) # <class 'str'>
```

