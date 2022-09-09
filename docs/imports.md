---
sidebar_position: 7
---

# Imports

In Python, an import statement is used to import modules into the current namespace. The imported module can be referred to using the dot operator.

Basically, importing external modules is a way to use code written by other people.

## Importing Modules

In Python, a module is a file containing Python definitions and statements. The file name is the module name with the suffix `.py` appended.

To import a module, use the `import` keyword.

```python
import random
```

This will import the module `my_module` into the current namespace.

## Importing Specific Names

You can import specific Items from a module, by using the `from` keyword.

```python
from random import randint
```

This will import the `randint` function from the `random` module.

## Importing All Names

You can import all names from a module, by using the `from` keyword and the `*` operator.

```python
from random import *
```

This will import all names from the `random` module.

## Importing Modules as Names

You can import a module using an alias, by using the `as` keyword.

```python
import random as r
r.randint(0, 10) # works!
```

This will import the `random` module as `r`.

## Importing Specific Names as Names

You can import specific names from a module using an alias, by using the `as` keyword.

```python
from random import randint as r
r(0, 10) # works!
```

This will import the `randint` function from the `random` module as `r`.


This will import all names from the `random` module as `r`.

## Importing Modules from Other Modules

You can import modules from other modules, by using the `from` keyword.

```python
from random import randint
from math import sqrt
```

This will import the `randint` function from the `random` module and the `sqrt` function from the `math` module.

## Importing Modules from Other Modules as Names

You can import modules from other modules using an alias, by using the `as` keyword.

```python
from random import randint as r
from math import sqrt as s
```

This will import the `randint` function from the `random` module as `r` and the `sqrt` function from the `math` module as `s`.



