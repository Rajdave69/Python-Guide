---
sidebar_position: 6
---



# Conditionals

Conditionals are statements that allow you to check if a condition is true or false. If the condition is true, the code will execute. If the condition is false, the code will not execute.

In Python, we can use `if`, `elif`, and `else` statements to check for conditions.

## Indentation 

The code after the `if` statement must be indented. The indentation is used to separate the code that will execute if the condition is true from the rest of the code.
There also needs to be a colon at the end of the `if` statement.

```python
if 5 > 2:
    print("5 is greater than 2")
print("This will execute no matter what, since it is not indented and not a part of the if statement")
```

The same goes for the `elif` and `else` statements.

```python
if 5 > 2:
    print("5 is greater than 2")
elif 5 < 2:
    print("5 is not greater than 2")
else:
    print("5 is equal to 2")    # This code is unreachable since the first condition will always be True, but it is still valid Python code.
```


## The `if` statement

The `if` statement is used to check if a condition is true. If the condition is true, the code will be executed. If the condition is false, the code will not be executed.


```python
a = 5
b = 10

if a > b:
    print("a is greater than b")
```

If the argument after the `if` is True, the code will execute. If the argument after the `if` is False, the code will not execute.

```python
if True:
    print("This will execute")
    
if False:
    print("This will not execute")
```


## The `elif` statement

The `elif` statement is an optional statement used to add addition checks, before `else` and after the initial `if`. If the condition is true, the code will execute. Elif stands for "Else If". If the condition is false, the code will not execute.

```python
a = 5
b = 10

if a > b:
    print("a is greater than b")
elif b > a:
    print("b is greater than a")
```

For the  `elif` statement to execute, the `if` statement must be false. If the `if` statement is true, the `elif` statement will not be executed.

## The `else` statement

The `else` statement is an optional statement used to add addition checks, It is executed if the `if` and all `elif` statements are false. It takes no arguments.

```python
a = 5
b = 10

if a > b:
    print("a is greater than b")
elif b > a:
    print("b is greater than a")
else:
    print("a and b are equal")
```

## Nested if statements

We can have `if` statements inside `if` statements. These are called nested `if` statements.

```python
a = 5
b = 10

if a > b:
    print("a is greater than b")
    if a == 5:
        print("a is equal to 5")
    else:
        print("a is not equal to 5")
        
elif a < b:
    print("a is less than b")
else:
    print("a and b are equal")
```



## Conditionals with Booleans

* We do not need to use the `==` operator to check if a boolean variable is True or False. We can just use the variable name. Since, True and `x == True` both return True.


<Tabs>
<TabItem value="right" label="✔ Right" default>

```python
x = True
y = False

if x:
    print("x is True")
  
if y:
    print("y is True")
```


</TabItem>
<TabItem value="wrong" label="❌ Wrong">

```python
x = True
y = False

if x == True:
    print("x is True")
  
if y == True:
    print("y is True")
```


</TabItem>
</Tabs>

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";
