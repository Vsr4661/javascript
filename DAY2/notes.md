# JavaScript Day 2 Notes

## Loops

### while Loop

* Runs while condition is true.
* Condition checked before each iteration.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### for Loop

* Best when number of iterations is known.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### break

* Exits the loop immediately.

```js
if (i === 3) break;
```

### continue

* Skips current iteration.

```js
if (i % 2 === 0) continue;
```

---

## Switch Statement

* Alternative to multiple if-else statements.
* Uses strict equality (`===`).

```js
let value = "2";

switch (value) {
  case "1":
    console.log("One");
    break;

  case "2":
    console.log("Two");
    break;

  default:
    console.log("Unknown");
}
```

### Important

```js
"2" !== 2
```

---

## Functions

### Function Declaration

```js
function greet(name) {
  return `Hello ${name}`;
}
```

### Parameters vs Arguments

```js
function add(a, b) { // parameters
  return a + b;
}

add(2, 3); // arguments
```

### Default Parameters

```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

### Return

```js
function square(n) {
  return n * n;
}
```

If no return is used, function returns:

```js
undefined
```

---

## Function Expressions

### Syntax

```js
let greet = function() {
  console.log("Hello");
};
```

### Features

* Function stored in a variable.
* Not hoisted.
* Can be passed as arguments.

```js
let sayHi = function() {
  console.log("Hi");
};
```

### Callback Example

```js
function process(callback) {
  callback();
}

process(function() {
  console.log("Executed");
});
```

---

## Arrow Functions

### Basic Syntax

```js
const add = (a, b) => a + b;
```

### Single Parameter

```js
const square = n => n * n;
```

### No Parameters

```js
const greet = () => "Hello";
```

### Multiline Arrow Function

```js
const add = (a, b) => {
  let result = a + b;
  return result;
};
```

### Important

* One line → return is automatic.
* Multiple lines → use explicit return.

---

## JavaScript Specials

### Strict Mode

```js
"use strict";
```

### Variables

```js
let
const
var
```

### Data Types

* Number
* BigInt
* String
* Boolean
* Null
* Undefined
* Object
* Symbol

### typeof

```js
typeof 5;        // number
typeof "Hello";  // string
typeof true;     // boolean
```

### Special Cases

```js
typeof null; // object
```

### Equality

```js
0 == false;   // true
0 === false;  // false
```

Always prefer:

```js
===
```

### Nullish Coalescing

```js
let name = null;
console.log(name ?? "Guest");
```

Output:

```js
Guest
```

---

## Quick Revision

* while → condition-based loop.
* for → counter-based loop.
* break → exit loop.
* continue → skip iteration.
* switch uses `===`.
* Function Declaration is hoisted.
* Function Expression is not hoisted.
* Arrow Functions are shorter syntax.
* No return → undefined.
* Use `===` instead of `==`.
* `typeof null` → "object" (JavaScript bug).
* Use `"use strict"` in modern JS.
