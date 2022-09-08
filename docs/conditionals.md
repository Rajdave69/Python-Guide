---
sidebar_position: 1 
---

# If 

The `if` statement is followed by a condition. If the condition is true, the code will execute. If the condition is false, the code will not execute.

```python
if 5 > 2:
    print("5 is greater than 2")
```

If the argument after the `if` is True, the code will execute. If the argument after the `if` is False, the code will not execute.

```python
if True:
    print("This will execute")
    
if False:
    print("This will not execute")
```

## If statements with variables

In python, you can use any of the comparison operators to check if a condition is true or false. The end result should be a boolean value, either `True` or `False`.

```python
x = 5
y = 2
z = "potato"

if x > y:
    print("x is greater than y")
if z == "potato":
    print("z is a potato")
```

### If statements with boolean variables

```python
x = True
y = False

if x:
    print("x is True")
   
if y:
    print("y is True")
```

We do not need to use the `==` operator to check if a boolean variable is True or False. We can just use the variable name. Since, True and `x == True` both return True.


## Indentation 

The code after the `if` statement must be indented. The indentation is used to separate the code that will execute if the condition is true from the rest of the code.
There also needs to be a colon at the end of the `if` statement.

```python
if 5 > 2:
    print("5 is greater than 2")
print("This will execute no matter what, since it is not indented and not a part of the if statement")
```

