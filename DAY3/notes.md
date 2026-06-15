# JavaScript Revision Notes

---

# Debugging in the Browser

## Useful Developer Tools
- Open DevTools:
  - Windows/Linux: `F12` or `Ctrl + Shift + I`
  - Mac: `Cmd + Option + I`

## Common Debugging Methods

```js
console.log(value);
console.error("Error");
console.warn("Warning");
console.table(array);
```

## Breakpoints
- Pause code execution at a specific line.
- Inspect variables and call stack.

## Debugger Statement

```js
let a = 10;
debugger;
console.log(a);
```

---

# Coding Style

## Naming Conventions

### Variables & Functions
```js
let userName;
function getUserData() {}
```

### Constants
```js
const MAX_USERS = 100;
```

## General Rules
- Use meaningful names.
- Keep functions small.
- Avoid deeply nested code.
- Use consistent indentation.

---

# Comments

## Single-line Comment

```js
// This is a comment
```

## Multi-line Comment

```js
/*
Multi-line comment
*/
```

## Good Practice
- Explain WHY, not WHAT.

Bad:
```js
// Increment i
i++;
```

Good:
```js
// Skip current user because account is inactive
i++;
```

---

# Ninja Code

Code that is difficult to read because it is overly clever.

Bad:

```js
for(i=0;i<l;i++);
```

Good:

```js
for(let i = 0; i < users.length; i++) {
}
```

Rule:
> Write code for humans first, computers second.

---

# Automated Testing with Mocha

## Test Structure

```js
describe("sum", function () {
  it("adds numbers correctly", function () {
    assert.equal(sum(2, 3), 5);
  });
});
```

### Keywords

| Keyword | Purpose |
|----------|----------|
| describe() | Group tests |
| it() | Single test case |
| assert | Check result |

---

# Polyfills and Transpilers

## Polyfill

Adds support for newer features in older browsers.

Example:

```js
if (!Array.prototype.includes) {
  // Polyfill code
}
```

## Transpiler

Converts modern JS into older JS.

Example:
- Babel

```js
const sum = (a, b) => a + b;
```

becomes

```js
var sum = function(a, b) {
  return a + b;
};
```

---

# Objects: The Basics

## Creating Objects

```js
let user = {
  name: "John",
  age: 25
};
```

## Access Properties

```js
user.name
user["age"]
```

## Add Property

```js
user.city = "Delhi";
```

## Delete Property

```js
delete user.city;
```

---

# Object References and Copying

Objects are stored by reference.

```js
let a = {};
let b = a;
```

Both point to the same object.

## Shallow Copy

```js
let clone = Object.assign({}, obj);
```

OR

```js
let clone = { ...obj };
```

---

# Garbage Collection

JavaScript automatically removes unused objects from memory.

Object becomes eligible when:
- No references remain.

```js
let user = {};
user = null;
```

---

# Object Methods and "this"

## Method

```js
let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
};
```

## this

Refers to object before the dot.

```js
user.sayHi();
```

`this` = user

---

# Constructor Function and new

## Constructor

```js
function User(name) {
  this.name = name;
}
```

## Creating Object

```js
let user = new User("John");
```

Steps:
1. Create empty object.
2. Assign `this`.
3. Execute function.
4. Return object.

---

# Optional Chaining ?.

Prevents errors when property may not exist.

```js
user?.address?.city
```

Without it:

```js
user.address.city
```

May throw error.

---

# Symbol Type

Unique identifier.

```js
let id = Symbol("id");
```

```js
user[id] = 123;
```

Properties using Symbol are hidden from normal loops.

---

# Object to Primitive Conversion

## String Conversion

```js
String(obj)
```

## Number Conversion

```js
Number(obj)
```

Custom conversion:

```js
obj[Symbol.toPrimitive]
```

---

# Data Types

## Primitive Types

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

## Non-Primitive

- Object

---

# Methods of Primitives

JavaScript temporarily wraps primitives in objects.

```js
"hello".toUpperCase()
```

```js
(12.345).toFixed(2)
```

---

# Numbers

## Useful Methods

```js
num.toFixed(2)
```

```js
Number("123")
```

## Parsing

```js
parseInt("100px")
```

```js
parseFloat("12.5")
```

## Random Number

```js
Math.random()
```

## Rounding

```js
Math.floor()
Math.ceil()
Math.round()
```

---

# Strings

## Length

```js
str.length
```

## Access Character

```js
str[0]
```

## Common Methods

```js
str.toUpperCase()
str.toLowerCase()
str.slice()
str.includes()
str.replace()
str.trim()
```

---

# Arrays

## Create Array

```js
let arr = [1, 2, 3];
```

## Access

```js
arr[0]
```

## Common Methods

```js
push()
pop()
shift()
unshift()
```

---

# Array Methods

## forEach

```js
arr.forEach(item => console.log(item));
```

## map

Returns transformed array.

```js
arr.map(x => x * 2);
```

## filter

Returns matching elements.

```js
arr.filter(x => x > 5);
```

## find

Returns first match.

```js
arr.find(x => x === 5);
```

## reduce

```js
arr.reduce((sum, cur) => sum + cur, 0);
```

## sort

```js
arr.sort((a, b) => a - b);
```

---

# Iterables

Objects that can be looped using `for...of`.

Examples:
- Array
- String
- Map
- Set

```js
for (let value of arr) {
}
```

---

# Map and Set

## Map

Stores key-value pairs.

```js
let map = new Map();

map.set("name", "John");
map.get("name");
```

### Methods

```js
set()
get()
has()
delete()
clear()
```

## Set

Stores unique values.

```js
let set = new Set();

set.add(1);
set.add(1);
```

Result:

```js
{1}
```

---

# WeakMap and WeakSet

## WeakMap

Keys must be objects.

```js
let weakMap = new WeakMap();
```

Features:
- No iteration.
- Auto garbage collection.

## WeakSet

Stores objects only.

```js
let weakSet = new WeakSet();
```

---

# Object.keys(), values(), entries()

```js
Object.keys(obj)
```

Returns keys.

```js
Object.values(obj)
```

Returns values.

```js
Object.entries(obj)
```

Returns key-value pairs.

Example:

```js
{
  name: "John",
  age: 25
}
```

Result:

```js
[
 ["name","John"],
 ["age",25]
]
```

---

# Destructuring Assignment

## Array Destructuring

```js
let [a, b] = [1, 2];
```

## Object Destructuring

```js
let { name, age } = user;
```

## Default Values

```js
let [a = 10] = [];
```

---

# Date and Time

## Current Date

```js
let now = new Date();
```

## Create Date

```js
new Date("2025-01-01");
```

## Common Methods

```js
getFullYear()
getMonth()
getDate()
getDay()
getHours()
```

---

# JSON Methods

## Convert Object to JSON

```js
JSON.stringify(obj);
```

## Convert JSON to Object

```js
JSON.parse(json);
```

Example:

```js
let user = {
  name: "John"
};
```

```js
let json = JSON.stringify(user);
```

---

# toJSON()

Controls JSON conversion.

```js
let user = {
  name: "John",
  toJSON() {
    return {
      username: this.name
    };
  }
};
```

```js
JSON.stringify(user);
```

Output:

```json
{
  "username": "John"
}
```

---

# Quick Interview Revision

## Object Copy
```js
{...obj}
Object.assign({}, obj)
```

## Array Copy
```js
[...arr]
```

## Map vs Object
- Map → Any key type
- Object → String/Symbol keys

## Set
- Stores unique values

## WeakMap
- Object keys only
- Not iterable

## JSON
```js
JSON.stringify()
JSON.parse()
```

## Destructuring
```js
const {name} = user;
const [a,b] = arr;
```

## Optional Chaining
```js
user?.address?.city
```

## Constructor
```js
const user = new User();
```

## this
- Refers to object before dot.
