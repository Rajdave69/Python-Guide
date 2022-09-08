---
sidebar_position: 2
---

# Lists

A list simply a collection of multiple values stored within a single variable. In Python lists are written with square brackets.

```python
x = ["apple", "banana", "cherry"]
```

Here, the variable `x` is a list. To declare a list, you can just assign multiple values to a variable with square brackets. Note that the values in the list can be of any data type. Items within lists are seperated by commas.

In Python, all values within lists are indexed. This means that you can access each value within a list by referring to its index. The first item in a list has the index `0`, the second item has the index `1`, and so on.

For Example:
```python title="List Indexes"
x = ["apple", "banana", "cherry"]
#       0        1         2

print(x[0]) # apple
print(x[1]) # banana
print(x[2]) # cherry
```




## List Methods

Lists are objects, and like all objects they have methods. Methods are functions that are built into objects.

These are some of the most common list methods:

1. **List Indexing**

    Python lists are indexed, which means that you can access each value within a list by referring to its index. 
    You can access the values of the lists using square brackets `[]` and the index of the value you want to access.

    ```python title="List Indexing"
    x = ["apple", "banana", "cherry"]
    #       0        1          2

    # Get a specific item in the list
    print(x[1]) # banana
    ```
   
    Here, the variable `x` is a simple list with 3 values. The first value has the index `0`, the second value has the index `1`, and the third value has the index `2`. To access the second value, you can use the index `1` in square brackets `[]` after the variable `x`. This will print the value `banana` to the console.

2. **List Slicing**

    You can also access a range of items in a list by using the slice syntax. This is done by specifying where to start and where to end the range. When specifying a range, the return value will be a new list with the specified items.

    ```python title="List Slicing"
    x = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
    #       0        1          2         3        4        5        6

    # Get a range of items in the list
    print(x[2:5]) # ['cherry', 'orange', 'kiwi']
    ```
   
    Here, the variable `x` is a simple list with 7 elements. The first value has the index `0`, the second value has the index `1`, and the third value has the index `2`. To access a range of values, you can use the index `2` in square brackets `[]` after the variable `x`. This will print the values `cherry`, `orange`, and `kiwi` to the console.

3. **List Length**

    To determine how many items a list has, use the `len()` function.

    ```python title="List Length"
    x = ["apple", "banana", "cherry"]
    print(len(x)) # 3
    ```
   
    Here, the variable `x` is a simple list with 3 elements. To determine the length of the list, you can use the `len()` function. This will print the integer value `3` to the console.

4. **List Append**
    
    To add an item to the end of the list, use the `append()` method.
    
    ```python title="List Append"
    x = ["apple", "banana", "cherry"]
    x.append("orange")
    print(x) # ['apple', 'banana', 'cherry', 'orange']
    ```
    
    Here, the variable `x` is a simple list with 3 elements. To add an item to the end of the list, you can use the `append()` method. This will print the list `['apple', 'banana', 'cherry', 'orange']` to the console.

5. **List Insert**
    
    To add an item at the specified index, use the `insert()` method.
        
    ```python title="List Insert"
    x = ["apple", "banana", "cherry"]
    x.insert(2, "orange")
    print(x) # ['apple', 'banana', 'orange', 'cherry']
    ```
        
    Here, the variable `x` is a simple list with 3 elements. To add an item to the list at the specified index, you can use the `insert()` method. This will print the list `['apple', 'banana', 'orange', 'cherry']` to the console.
    
6. **List Remove**
    
    To remove an item from the list, use the `remove()` method.
        
    ```python title="List Remove"
    x = ["apple", "banana", "cherry"]
    x.remove("banana")
    print(x) # ['apple', 'cherry']
    ```
        
    Here, the variable `x` is a simple list with 3 elements. To remove an item from the list, you can use the `remove()` method. This will print the list `['apple', 'cherry']` to the console.
    
7. **List Pop**

    To remove an item at the specified index, use the `pop()` method.
        
    ```python title="List Pop"
    x = ["apple", "banana", "cherry"]
    x.pop(1)
    print(x) # ['apple', 'cherry']
    ```
        
    Here, the variable `x` is a simple list with 3 elements. To remove an item from the list at the specified index, you can use the `pop()` method. This will print the list `['apple', 'cherry']` to the console.
    
8. **List Join**

    To join a list's items into a string, use the `join()` method.
        
    ```python title="List Join"
    x = ["apple", "banana", "cherry"]

    # Join the items of a list into a string
    y = "-".join(x)
    print(y) # apple-banana-cherry
    ```
      
    Here, the variable `x` is a simple list with 3 elements. To join the items of a list into a string, you can use the `join()` method. This will print the string `apple-banana-cherry` to the console.
    
    You can join the elements with custom separators between the list elements. Like doing `"=".join(x)` will result in the items being joined and each one of the items will be seperated with `=` instead of `-`.

9. **Loop through List**

    To loop through a list, use the `for` loop.
        
    ```python title="Loop through List"
    x = ["apple", "banana", "cherry"]
    for item in x:
        print(item)
    ```
    
    Here, the `for` loop will loop through each item in the list. This will print the items `apple`, `banana`, and `cherry` to the console.
 
10. **List Clear**

    To empty a list, use the `clear()` method.
        
    ```python title="List Clear"
    x = ["apple", "banana", "cherry"]
    x.clear()
    print(x) # []
    ``` 
    
    Here, the variable `x` is a simple list with 3 elements. To empty a list, you can use the `clear()` method. This will print the empty list `[]` to the console.

11. **List Reverse**

    To reverse the order of a list, use the `reverse()` method.
        
    ```python title="List Reverse"
    x = ["apple", "banana", "cherry"]
    x.reverse()
    print(x) # ['cherry', 'banana', 'apple']
    ```
12. **List Sort**

    To sort a list, use the `sort()` method.
        
    ```python title="List Sort"
    x = [100, 50, 65, 82, 23]
    x.sort()
    print(x) # [23, 50, 65, 82, 100]
    ```
    
    Here, the variable `x` is a simple list with 5 elements. To sort a list, you can use the `sort()` method. This will print the list `[23, 50, 65, 82, 100]` to the console.

13. **List Count**

    To determine how many times an item appears in a list, use the `count()` method.
        
    ```python title="List Count"
    x = ["apple", "banana", "cherry", "apple", "cherry"]
    print(x.count("apple")) # 2
    ```
    
    Here, the variable `x` is a simple list with 5 elements. To determine how many times an item appears in a list, you can use the `count()` method. This will print the integer value `2` to the console.

14. **List Extend**
    
    To add the elements of a list (or any iterable), to the end of the current list, use the `extend()` method.
        
    ```python title="List Extend"
    x = ["apple", "banana", "cherry"]
    y = ["orange", "mango", "grapes"]
    x.extend(y)
    print(x) # ['apple', 'banana', 'cherry', 'orange', 'mango', 'grapes']
    ```
    
    Here, the variable `x` is a simple list with 3 elements. To add the elements of a list (or any iterable), to the end of the current list, you can use the `extend()` method. This will print the list `['apple', 'banana', 'cherry', 'orange', 'mango', 'grapes']` to the console.


    



