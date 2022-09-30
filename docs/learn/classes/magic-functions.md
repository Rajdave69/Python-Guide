---
sidebar_position: 1
---

# Magic Functions

Python contains many magic methods which are used within classes to perform certain actions. These methods are not meant to be called directly, but are used by Python internally.

## The `__init__()` function

The `__init__()` function is called automatically every time the class is being used to create a new object.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)
```

## The `__str__()` function

The `__str__()` function is used to print the object.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return "Person(" + self.name + ", " + str(self.age) + ")"

p1 = Person("John", 36)

print(p1)
```

## The `__del__()` function

The `__del__()` function is called when the object is deleted.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __del__(self):
        print("Person(" + self.name + ", " + str(self.age) + ") is deleted")

p1 = Person("John", 36)

del p1
```

## The `__repr__()` function

The `__repr__()` function is used to represent the object.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return "Person(" + self.name + ", " + str(self.age) + ")"

p1 = Person("John", 36)

print(p1)
```

## The `__len__()` function

The `__len__()` function is used to get the length of the object.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __len__(self):
        return self.age

p1 = Person("John", 36)

print(len(p1))
```

## The `__call__()` function

The `__call__()` function is called when the object is called as a function.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __call__(self):
        print("Person(" + self.name + ", " + str(self.age) + ") is called")

p1 = Person("John", 36)

p1()
```

## The `__iter__()` function

The `__iter__()` function is called when the object is iterated.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __iter__(self):
        return self

p1 = Person("John", 36)

myiter = iter(p1)

print(next(myiter))
```

## The `__next__()` function

The `__next__()` function is called when the object is iterated.

```python   
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __iter__(self):
        return self

    def __next__(self):
        return self.age

p1 = Person("John", 36)

myiter = iter(p1)
    
print(next(myiter))
```

## The `__getitem__()` function

The `__getitem__()` function is called when the object is indexed.

```python

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getitem__(self, i):
        return self.age

p1 = Person("John", 36)

print(p1[1])
```



