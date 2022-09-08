---
sidebar_position: 1
---

# Integers

An integer is a whole number, positive or negative, without decimals, of unlimited length.

```python
x = 5
```
Here, the variable `x` is an integer. To declare an integer, you can just assign a number to a variable without quotes. It should not contain any decimals.

## Integer Methods

Integers are objects, and like all objects they have methods. Methods are functions that are built into objects.

These are some of the most common integer methods:

```python
x = 5
print(x.bit_length()) # 3
print(x.conjugate()) # 5
print(x.denominator) # 1
print(x.imag) # 0
print(x.numerator) # 5
print(x.real) # 5
```

## Integer Arithmetic

```python
x = 5
y = 2
print(x + y)    # 7
print(x - y)    # 3
print(x * y)    # 10
print(x / y)    # 2.5
print(x // y)   # 2
print(x % y)    # 1
print(x ** y)   # 25
```

## Integer Comparison

```python
x = 5
y = 2
print(x == y)   # False
print(x != y)   # True
print(x > y)    # True
print(x < y)    # False
print(x >= y)   # True
print(x <= y)   # False
```

## Integer Assignment

```python
x = 5
x += 2
print(x)    # 7
x -= 2
print(x)    # 5
x *= 2
print(x)    # 10
x /= 2
print(x)    # 5.0
x //= 2
print(x)    # 2.0
x %= 2
print(x)    # 0.0
x **= 2
print(x)    # 0.0
```

## Integer Type Conversion

```python
x = 5
print(float(x))    # 5.0
print(complex(x))  # (5+0j)
```