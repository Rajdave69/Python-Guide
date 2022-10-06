---
sidebar_position: 10
---

# Exceptions

Exceptions are errors that occur when the program is running. They are used to handle errors in a program, and to make the program more user-friendly.

## What is an exception?

An exception is an error that occurs when the program is running. When an exception occurs, the program will stop and generate an error message.

## Python Exceptions

Python has many built-in exceptions, and you can also create your own exceptions.

| --  | Exception         | Description                                                                                                |
|-----|-------------------|------------------------------------------------------------------------------------------------------------|
| 1   | SyntaxError       | Raised when there is an error in Python syntax                                                             |
| 2   | ValueError        | Raised when a function gets an argument of the wrong type                                                  |
| 3   | IOError           | Raised when an input/ouput operation fails                                                                 |
| 4   | KeyboardInterrupt | Raised when the user hits the interrupt key (Ctrl+C or Delete)                                             |
| 5   | EOFError          | Raised when the user hits the end-of-file key                                                              |
| 6   | ImportError       | Raised when the imported module is not found                                                               |
| 7   | ZeroDivisionError | Raised when the second operator in a division or modulo operation is zero                                  |
| 8   | IndexError        | Raised when the index of a sequence is out of range                                                        |
| 9   | NameError         | Raised when a variable is not found in local or global scope                                               |
| 10  | TypeError         | Raised when a function or operation is applied to an object of an inappropriate type                       |
| 11  | UnboundLocalError | Raised when trying to access a local variable in a function or method but no value has been assigned to it |
| 12  | AttributeError    | Raised when attribute assignment or reference fails                                                        |
| 13  | KeyError          | Raised when a key is not found in a dictionary                                                             |
| 14  | OverflowError     | Raised when the result of an arithmetic operation is too large to be represented                           |



## Handling exceptions

To handle exceptions, use the `try` and `except` keywords.

```python
try:
    print(x)
except:
    print("An exception occurred") # The variable x is not defined, so an exception will occur
```

## Raising an exception

As a Python developer you can choose to throw an exception if a condition occurs.

To throw (or raise) an exception, use the `raise` keyword.

```python
x = -1

if x < 0:
    raise Exception("Sorry, no numbers below zero") # Raise an exception if x is less than zero
```

## Assert

You can also use the `assert` keyword to raise an exception if a condition occurs.

```python
x = -1

assert x >= 0, "Sorry, no numbers below zero" # Raise an exception if x is less than zero
```

