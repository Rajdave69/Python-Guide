---
sidebar_position: 4
---

# Operators

## What are operators?

Operators are special symbols in Python that carry out arithmetic or logical computation. The value that the operator operates on is called the operand.

## Arithmetic Operators

Arithmetic operators are used with numeric values to perform common mathematical operations:

| Operator | Name           | Example | Uses                                                 |
|----------|----------------|---------|------------------------------------------------------|
| +        | Addition       | x + y   | Add Integers/Floats or Concatenate Strings           | 
| -        | Subtraction    | x - y   | Subtract Integers/Floats                             | 
| *        | Multiplication | x * y   | Multiply Integers/Floats                             |
| /        | Division       | x / y   | Divide Integers/Floats                               |
| %        | Modulus        | x % y   | Gives the remainder after diving two Integers/Floats |
| **       | Exponentiation | x ** y  | Exponent Integers/Floats                             |
| //       | Floor division | x // y  | Divides Integers/Floats and rounds it down           |


## Assignment Operators

Assignment operators are used to assign values to variables:

| Operator | Example | Same As    |
|----------|---------|------------|
| =        | x = 5   | x = 5      |
| +=       | x += 3  | x = x + 3  |
| -=       | x -= 3  | x = x - 3  |
| *=       | x *= 3  | x = x * 3  |
| /=       | x /= 3  | x = x / 3  |
| %=       | x %= 3  | x = x % 3  |
| //=      | x //= 3 | x = x // 3 |
| **=      | x **= 3 | x = x ** 3 |

## Comparison Operators

Comparison operators are used to compare two values:

| Operator | Name                     | Example |
|----------|--------------------------|---------|
| ==       | Equal                    | x == y  |
| !=       | Not equal                | x != y  |
| >        | Greater than             | x > y   |
| <        | Less than                | x < y   |
| >=       | Greater than or equal to | x >= y  |
| <=       | Less than or equal to    | x <= y  |

## Logical Operators

Logical operators are used to combine conditional statements:

| Operator | Description                                             | Example               |
|----------|---------------------------------------------------------|-----------------------|
| and      | Returns True if both statements are true                | x < 5 and  x < 10     |
| or       | Returns True if one of the statements is true           | x < 5 or x < 4        |
| not      | Reverse the result, returns False if the result is true | not(x < 5 and x < 10) |


## Identity Operators

Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location:

| Operator | Description                                            | Example       |
|----------|--------------------------------------------------------|---------------|
| is       | Returns True if both variables are the same object     | x is None     |
| is not   | Returns True if both variables are not the same object | x is not None |

## Membership Operators

Membership operators are used to test if a sequence is presented in an object:

| Operator | Description                                                                      | Example    |
|----------|----------------------------------------------------------------------------------|------------|
| in       | Returns True if a sequence with the specified value is present in the object     | x in y     |
| not in   | Returns True if a sequence with the specified value is not present in the object | x not in y |

