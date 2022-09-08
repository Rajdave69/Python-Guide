---
sidebar_position: 3
---

# Dictionaries

Dictionaries are simply key-value pairs. They are used to store data values in key:value pairs. A dictionary is a collection which are ordered(from Python 3.7 and Later), changeable and does not allow duplicates.

```python
x = {"name" : "John", "age" : 36}
```

Here, `name` and `age` are both keys, and `John` and `36` are both values. To declare a dictionary, you can just assign multiple values to a variable with curly brackets. Note that the values in the dictionary can be of any data type. Items within dictionaries are seperated by commas. The key and value are seperated by a colon.



## Dictionary Methods

Dictionaries are objects, and like all objects they have methods. Methods are functions that are built into objects.

These are some of the most common dictionary methods:

1. **Get Key Value**

    There are two main methods to get the value of a key in Python. 
    
    The first one is to use the `get()` method. The `get()` method returns the value of the item with the specified key. If the key does not exist, the second parameter will be returned instead.

    ```python
    x = {"name" : "John", "age" : 36}
    print(x.get("age")) # 36
    ```
    
    The second method is to use square brackets `[]`. The square brackets `[]` will return the value of the item with the specified key. If the key does not exist, an error will occur.

    ```python
    x = {"name" : "John", "age" : 36}
    print(x["age"]) # 36
    ```
   
2. **Change Key Value**

    You can change the value of a specific item by referring to its key name.

    ```python
    x = {"name" : "John", "age" : 36}
    x["age"] = 40
    print(x) # {'name': 'John', 'age': 40}
    ```

3. **Add New Key Value**

    You can add an item to the dictionary by using a new index key and assigning a value to it.

    ```python
    x = {"name" : "John", "age" : 36}
    x["country"] = "Norway"
    print(x) # {'name': 'John', 'age': 36, 'country': 'Norway'}
    ```
   
4. **Remove Key Value**

    There are several methods to remove items from a dictionary.
    
    The first one is to use the `pop()` method. The `pop()` method removes the item with the specified key name.

    ```python
    x = {"name" : "John", "age" : 36}
    x.pop("age")
    print(x) # {'name': 'John'}
    ```
    
    The second method is to use the `popitem()` method. The `popitem()` method removes the last inserted item.

    ```python
    x = {"name" : "John", "age" : 36}
    x.popitem()
    print(x) # {'name': 'John'}
    ```
    
    The third method is to use the `del` keyword. The `del` keyword removes the item with the specified key name.

    ```python
    x = {"name" : "John", "age" : 36}
    del x["age"]
    print(x) # {'name': 'John'}
    ```
    Note: The del keyword simply deletes an Python object. It does not return anything.

5. **Clear Dictionary**

    The `clear()` method empties the dictionary.

    ```python
    x = {"name" : "John", "age" : 36}
    x.clear()
    print(x) # {}
    ```
   
6. **Get Dictionary Keys**

    The `keys()` method will return a list of all the keys in the dictionary.

    ```python
    x = {"name" : "John", "age" : 36}
    print(x.keys()) # dict_keys(['name', 'age'])
    ```
    Here, the result is a `dict_keys` object, which is a view object. The view object contains the keys of the dictionary, as a list. The view object will reflect any changes done to the dictionary, so if you add or remove an item, the view object will also get updated.

7. **Get Dictionary Values**

    The `values()` method will return a list of all the values in the dictionary.

    ```python
    x = {"name" : "John", "age" : 36}
    print(x.values()) # dict_values(['John', 36])
    ```
   Here, the values are returned, in the same order as the keys. 

8. **Get Dictionary Items**

    The `items()` method will return each item in a dictionary, as tuples in a list.

    ```python
    x = {"name" : "John", "age" : 36}
    print(x.items()) # dict_items([('name', 'John'), ('age', 36)])
    ```
    Here, each item is returned as a tuple(an unmodifiable list), with the key and value.

9. **Dictionary Loop**

   You can loop through a dictionary by using a `for` loop.

   When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well.

   ```python
   x = {"name" : "John", "age" : 36}
   for key in x:
       print(key) # name age
   ```
   Note: If you're using Python 3.7 or later, the dictionary will be ordered, meaning that the items will appear in the same order that you added them.

   To print the values of a dictionary, one can use the values() method.

   ```python
   x = {"name" : "John", "age" : 36}
   for value in x.values():
       print(value) # John 36
   ```
   To print both keys and values, one can use the items() method.

   ```python
   x = {"name" : "John", "age" : 36}
   for key, value in x.items():
       print(key, value) # name John age 36
   ```
   Note: When looping through dictionaries, the key and value variables are actually references to the key and value of the item you are currently looking at.

    

   