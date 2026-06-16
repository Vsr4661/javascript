# JavaScript Practice Questions

## Q1. Counter using Closure

Create a function `createCounter()` that returns a function.

Example:

```js
const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```

### Solution

```js
```

---

## Q2. Private Variable using Closure

Create `createBankAccount(initialBalance)`.

Methods:

* `deposit(amount)`
* `withdraw(amount)`
* `getBalance()`

Balance should not be directly accessible.

### Solution

```js
```

---

## Q3. Sum using Rest Parameters

Implement:

```js
sum(...numbers)
```

Example:

```js
sum(1, 2, 3, 4); // 10
```

### Solution

```js
```

---

## Q4. Array Copy using Spread Syntax

Create a copy of an array using spread syntax.

Example:

```js
const arr = [1, 2, 3];
const copy = ?;
```

### Solution

```js
```

---

## Q5. Merge Objects using Spread

Merge:

```js
{name: "John"}
{age: 25}
```

Expected Output:

```js
{
  name: "John",
  age: 25
}
```

### Solution

```js
```

---

## Q6. Recursive Factorial

Implement:

```js
factorial(5);
```

Output:

```js
120
```

### Solution

```js
```

---

## Q7. Recursive Fibonacci

Implement:

```js
fib(6);
```

Output:

```js
8
```

### Solution

```js
```

---

## Q8. Custom Map

Implement your own version of `map`.

Example:

```js
customMap([1, 2, 3], x => x * 2);
```

Output:

```js
[2, 4, 6]
```

### Solution

```js
```

---

## Q9. call()

Create a function `greet()`.

Use `call()` to execute the function with a custom `this`.

Example:

```js
function greet() {
  console.log(this.name);
}
```

### Solution

```js
```

---

## Q10. apply()

Create:

```js
function add(a, b, c)
```

Use `apply()` with an array.

Example:

```js
add.apply(null, [1, 2, 3]);
```

### Solution

```js
```

---

## Q11. bind()

Create a bound function using `bind()`.

Example:

```js
function greet() {
  console.log(this.name);
}

const user = {
  name: "John"
};

const boundFn = greet.bind(user);
```

### Solution

```js
```
