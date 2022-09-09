---
sidebar_position: 7
---
import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";

# Functions

In Python, a function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.

## Creating a Function

In Python a function is defined using the `def` keyword:

```python
def my_function():
    print("Hello from a function")
print("This line is not in the function")
```


:::info Correct Indentation, Colon, and Parentheses

Remember to use the correct indentation, and to end the function definition with a colon. Also, remember to add empty parentheses if you have no parameters.

<Tabs>
<TabItem value="right" label="✔ Right" default>

```python
def my_function():
    print("Hello from a function")
```

</TabItem>
<TabItem value="wrong" label="❌ Wrong">

```python
def my_function
print("Hello from a function")
```

</TabItem>
</Tabs>


:::

Make sure you indent the code inside the function. The code will not run if it is not indented.


## Calling a Function

To call a function, use the function name followed by parenthesis:

```python
my_function()
```


## Arguments

Information can be passed into functions as arguments. Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.

When you call the function, make sure the argument(s) are filled in! If you don't, you will get an error:

```python
def echo(text):
    print(text)
  
my_function("Emil") # "Emil"
my_function() # Error
```


### Single Argument

When you want to declare only one argument, you can just put the name of the argument in the parentheses:

The following example has a function with one argument (text). When the function is called, we pass along a string, which is used inside the function to print the it:

```python
def echo(text):
    print(text)

echo("Hello")
echo("Hi")
```

### Multiple Arguments

You can have as many arguments as you want, just separate them with a comma:

```python
def add(x, y):
    return x + y
    
print(add(5, 3)) # 8
```

### Default Arguments

If we call the function without argument, it uses the default value:

```python
def echo(text="Hello"):
    print(text)

echo() # Hello
echo("Hi") # Hi
```


### Keyword Arguments

You can also send arguments with the key = value syntax. This way the order of the arguments does not matter.

```python
def echo(text, times):
    print(text * times)
    
echo("Hello", 5) # HelloHelloHelloHelloHello
echo(times=5, text="Hello") # HelloHelloHelloHelloHello
```
<br/>

:::warning Advanced Terms

The below two categories, Arbitrary Arguments, and Keyword Arguments are advanced terms. You can skip them if you are new to Python.

:::


### Argument Data-Type

You can also specify the data-type of the argument. This is useful if you want to make sure the user passes the correct data-type into the function:

```python
def square(number: int):
    return number * number
    
print(square(5)) # 25
print(square("5")) # Error
print(square("e")) # Error
```
### Arbitrary Arguments

If you do not know how many arguments that will be passed into your function, add a `*` before the parameter name in the function definition.

This way the function will receive a tuple of arguments, and can access the items accordingly:

```python
def echo(*args):
    for arg in args:
        print(arg)
        
echo("Hello", "Hi", "Hey") # Hello Hi Hey
```

### Arbitrary Keyword Arguments

If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.

This way the function will receive a dictionary of arguments, and can access the items accordingly:

```python
def echo(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} = {value}")
        
echo(name="Emil", age=36) # name = Emil age = 36
```



## Return Values

To let a function return a value, use the `return` statement:
The `return` statement stops the execution of a function and returns the value of the expression following the `return` keyword.



```python
def add(x, y):
    return x + y
    
print(add(5, 3)) # 8
```


Note
- If the function does not have a `return` statement, it will return `None`.
- If you want to return multiple values, you can use a tuple.
- No code will be executed after the `return` statement.

:::info Redundant Return Statement

You do not *need* to use the `return` statement. Use it only if you want to return a value back.

<Tabs>
<TabItem value="right" label="✔ Right" default>

```python
def add(x, y):
    return x + y
```

</TabItem>
<TabItem value="wrong" label="❌ Wrong">

```python
def print_hello():
    print("Hello")
    return "ok done"
```

</TabItem>
</Tabs>

:::

