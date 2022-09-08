---
sidebar_position: 0
---
# Overview

This section will teach you about the different data types in Python.

## What is a Data Type?

A data type is a classification or category for data items. In programming, data types are an important concept. Variables can store data of different types, and different types can do different things.


## Primary Data Types
Python has 7 main Primary data types:

### String

A string is a sequence of characters. It can be created by enclosing characters in quotes. For example:

```python title="strings.py"
x = "This is a string!"
```
Here, the variable `x` is a string. You can use single quotes or double quotes to create a string, but don't mix them up!  


Special: F-Strings

F-Strings are a special type of strings which allow you to format strings. You can use them to insert variables into strings. For example:

```python title="formatted-strings.py"
name = "John"
age = 36
x = f"My name is {name}, and I am {age}"
print(x) # Output: My name is John, and I am 36
```
Here, the variable `x` is an F-string or Formatted String. They can contain variables or methods inside them being enclosed in curly brackets `{}`.

### Integer

An integer is a whole number, positive or negative, without decimals, of unlimited length.

```python title="integers.py"
x = 5
```
Here, the variable `x` is an integer. To declare an integer, you can just assign a number to a variable without quotes. It should not contain any decimals.

### Float

A float, or floating point number is a number, positive or negative, containing one or more decimals.

```python title="floats.py"
x = 5.5
```
Here, the variable `x` is a float. To declare a float, you can just assign a number with a decimal point to a variable without quotes. 

### Boolean

A boolean is simply a value that is either `True` or `False`. It is used to represent truth values (or logical values) like yes/no, on/off, true/false.

```python title="booleans.py"
x = True
y = False
```
Here, the variable `x` is a boolean. To declare a boolean, you can just assign the value `True` or `False` to a variable without quotes. Note the capital `T` and `F`.

### List

A list is a set of multiple values in a single variable. In python, lists are written with square brackets.

```python title="lists.py"
x = ["apple", "banana", "cherry"]
```
Here, the variable `x` is a list. To declare a list, you can just assign multiple values to a variable with square brackets. Note that the values in the list can be of any data type! Items within lists are seperated by commas.

### Dictionary

A dictionary in Python has keys and values for the keys. In Python dictionaries are written with curly brackets, and they have keys and values.

```python title="dictionaries.py"
x = {"name" : "John", "age" : 36}
```
Here, the variable `x` is a dictionary. To declare a dictionary, you can just assign multiple values to a variable with curly brackets. Note that the values in the dictionary can be of any data type! Items within dictionaries are seperated by commas. The key and value are seperated by a colon.

### NoneType

NoneType is a data type that represents the absence of a value. It is the only value of the NoneType data type. None is also a keyword in Python.

```python title="none.py"
x = None
```
Here, the variable `x` is a NoneType. To declare a NoneType, you can just assign the value `None` to a variable without quotes. Note the capital `N`. 





## Secondary Data Types
Python has 5 main Secondary Data types:

### Tuple

A tuple is a collection of multiple values in a single variable  is ordered and unchangeable. In Python tuples are written with round brackets.

```python title="tuples.py"
x = ("apple", "banana", "cherry")
```
Here, the variable `x` is a tuple. To declare a tuple, you can just assign multiple values to a variable with round brackets. Note that the values in the tuple can be of any data type. Items within tuples are seperated by commas. They are hardcoded and cannot be changed though code.

### Set

A set is a collection which is unordered and un-indexed. In Python sets are written with curly brackets.

```python title="sets.py"
x = {"apple", "banana", "cherry"}
```
Here, the variable `x` is a set. To declare a set, you can just assign multiple values to a variable with curly brackets. Note that the values in the set can be of any data type. Items within sets are seperated by commas. They are unordered and unindexed, so you cannot access items in a set by referring to an index or a key, which means `x[0]` or similar will not work.

### Frozen Set

A frozen set is a set that is immutable. In Python frozen sets are written with curly brackets.

```python title="frozen_sets.py"
x = frozenset({"apple", "banana", "cherry"})
```
Here, the variable `x` is a frozen set. To declare a frozen set, you can just assign multiple values to a variable with curly brackets. Note that the values in the frozen set can be of any data type. Items within frozen sets are seperated by commas. They are immutable, so you cannot change the items after the frozen set has been created.

### Complex

A complex number is a number written in the form `a + bj`, where `a` and `b` are real numbers, and `j` is the imaginary unit. In Python complex numbers are written with `j` as the imaginary part.

```python title="complex.py"
x = 3+5j
```
Here, the variable `x` is a complex number. To declare a complex number, you can just assign a number with `j` to a variable without quotes. Note that the value in the complex number can be of any data type. Items within complex numbers are seperated by commas. They are immutable, so you cannot change the items after the complex number has been created.

### Byte

A byte is a unit of data that typically consists of eight bits. In Python bytes are written with `b` as the imaginary part.

```python title="bytes.py"
x = b"Hello"
```
Here, the variable `x` is a byte. To declare a byte, you can just assign a number with `b` to a variable without quotes. Note that the value in the byte can be of any data type. Items within bytes are seperated by commas. They are immutable, so you cannot change the items after the byte has been created.

