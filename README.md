# Shegit

Shegit modular utilities. Shegit makes JS user-friendly by providing helper functions for working with different types of data.

We would be happy if you visit our [GitHub](https://github.com/or-temka/shegit/).

## Documentation

See https://or-temka.github.io/shegit/

## Installation

1. Installation npm (global):

   ```shell
   npm i -g npm
   ```

2. Installation `shegit` package last version:

   ```shell
   npm install --save shegit
   ```

## Example of Using

```javascript
  import _ from 'shegit'

  // Selects random items from array
  _.getRandomValue([1, 2, 3]) // 2

  // Solve the deep function to get the value of
  _.resolveValue(() => () => "text") // "text"

  // Transform all object keys
  const original = { firstName: 'John', lastName: 'Doe', age: 30 };
  const transformFn = (key) => key.toUpperCase();
  _.mapObjectKeys(original, transformFn); // { FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 30 }

  // RGB custom object to RGB array
  _.toColor({123, () => "+4", 500}, "array") // [123, 4, 255]
```
