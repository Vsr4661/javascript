# JavaScript Revision Notes

---

# 1. Recursion & Call Stack

## Definition

A function calling itself until a base condition is met.

## Syntax

```js
function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}
```

## Important Points

* Must have a base condition.
* Every recursive call goes into the Call Stack.
* Missing base condition → Stack Overflow.
* Useful for trees, DFS, nested structures.

## Interview Points

```text
Recursion = Function calling itself
Base Case = Stops recursion
```

---

# 2. Rest Parameters

## Definition

Collects multiple arguments into an array.

## Syntax

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

## Important Points

* Rest parameter must be last.
* Produces an actual array.

```js
function fn(a, ...args) {}
```

---

# 3. Spread Syntax

## Definition

Expands an iterable into individual values.

## Examples

```js
const arr = [1,2,3];

console.log(...arr);
```

```js
const copy = [...arr];
```

```js
const obj = {
  ...user
};
```

## Interview Points

```text
Rest = Collect
Spread = Expand
```

---

# 4. Scope

## Types

### Global Scope

```js
let name = "John";
```

Accessible everywhere.

### Function Scope

```js
function test() {
  let age = 25;
}
```

### Block Scope

```js
{
  let x = 10;
}
```

## Interview Points

```text
let, const → block scoped
var → function scoped
```

---

# 5. Closures

## Definition

A closure is:

```text
Function + Lexical Environment
```

Inner function remembers variables from outer function.

## Example

```js
function outer() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}
```

## Uses

* Counters
* Private variables
* Debounce
* Memoization

## Interview Points

```text
Closure remembers outer variables
even after outer function finishes
```

---

# 6. var

## Important Points

```js
var x = 10;
```

* Function scoped
* Hoisted
* Can be redeclared

## Example

```js
console.log(a);

var a = 10;
```

Output:

```js
undefined
```

## Interview

```text
let/const → TDZ
var → initialized with undefined
```

---

# 7. Global Object

## Browser

```js
window
```

## Node.js

```js
global
```

## Example

```js
var a = 10;

console.log(window.a);
```

## Interview Point

```text
var becomes property of global object
let and const do not
```

---

# 8. Function Object & NFE

## Functions are Objects

```js
function sayHi() {}

sayHi.test = true;
```

## NFE

```js
const sayHi = function hello() {
  console.log("Hi");
};
```

## Benefits

* Self-reference
* Better stack traces

---

# 9. new Function

## Syntax

```js
const sum = new Function(
  "a",
  "b",
  "return a + b"
);
```

## Important Points

* Creates function from string.
* Rarely used.
* Executes in global scope.

---

# 10. setTimeout & setInterval

## setTimeout

Runs once.

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

## setInterval

Runs repeatedly.

```js
setInterval(() => {
  console.log("Hello");
}, 1000);
```

## Cancel

```js
clearTimeout(id);
clearInterval(id);
```

## Interview Output

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

---

# 11. call()

Invokes function immediately.

```js
fn.call(obj, arg1, arg2);
```

Example:

```js
greet.call(user);
```

---

# 12. apply()

Invokes function immediately.

Arguments passed as array.

```js
fn.apply(obj, [1,2]);
```

---

# 13. bind()

Returns a new function.

```js
const boundFn =
  fn.bind(obj);
```

## Example

```js
const greetUser =
  greet.bind(user);

greetUser();
```

## Difference

```text
call  → invoke now
apply → invoke now
bind  → invoke later
```

---

# 14. Arrow Functions

## Syntax

```js
const add = (a,b) => a+b;
```

## Important Points

* No own this
* No arguments object
* Cannot be constructor
* Cannot use new

## Example

```js
const user = {
  name: "John",

  regular() {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  }
};
```

Output:

```text
John
undefined
```

## Interview Point

```text
Arrow functions inherit this
from surrounding scope
```

---

# Quick Interview Revision

```text
Recursion → function calls itself

Rest → collect (...args)

Spread → expand (...arr)

Closure → function remembers outer vars

var → function scoped

setTimeout → once

setInterval → repeated

call(obj,a,b)

apply(obj,[a,b])

bind(obj) → returns function

Arrow Function:
- no own this
- no own arguments
- can't use new
```
