---
sidebar_position: 0
---

# Introduction

Python is an Object-Oriented Programming language. This means that almost everything in Python is an object, with its properties and methods.

## What is a class?

Classes are a way to group functions and variables together. They are a way to create your own data types. They are a way to create your own objects, which can contain methods and attributes. They are a way to package code and data together.


## Creating a class

To create a class, use the `class` keyword.

```python
class MyClass:
    x = 5
```

This will create a class named `MyClass`. The class will contain a variable named `x`, with the value `5`.

## Creating an object from a class

To create an object, use the class name as a function.

```python
class MyClass:
    x = 5
    
my_object = MyClass()

print(my_object.x)
```

## The self parameter

The `self` parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.

It does not have to be named `self` , you can call it whatever you like, but it has to be the first parameter of any function in the class:

```python
class Person:
    def __init__(myobject, name, age):
        myobject.name = name
        myobject.age = age

    def myfunc(abc):
        print("Hello my name is " + abc.name)
        
p1 = Person("John", 36)

p1.myfunc()
```


## The `__init__()` function

The `__init__()` function is a special function that is called every time an object is created from a class.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
p1 = Person("John", 36)

print(p1.name)
print(p1.age)
```


## Some Important Terms

Here are some important terms that you should know:

### What is an object?

An object is an instance of a class. It is a way to represent a real-world object in code. It is a way to package data and methods together.

### What is a method?

A method is a function that is defined inside a class. It is a way to define a function that is only used by a specific class.

### What is an attribute?

An attribute is a variable that is defined inside a class. It is a way to define a variable that is only used by a specific class.

### What is inheritance?

Inheritance is a way to create a new class from an existing class. It is a way to create a new class that has all the methods and attributes of the existing class.

### What is encapsulation?

Encapsulation is a way to restrict access to methods and variables. It is a way to prevent data from being modified by accident.

### What is polymorphism?

Polymorphism is a way to use the same method name for different classes. It is a way to use the same method name for different classes, even if the methods are different.



