
# Objects

### Q1. Object Manipulation

Create a `user` object with `name` and `age`.

* Add a new property `city`
* Update `age`
* Delete `city`

---

### Q2. Check Empty Object

Write a function:

```js
isEmpty(obj)
```

Return `true` if the object has no properties.

---

### Q3. Sum Object Values

Given:

```js
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
```

Return the total salary.

---

### Q4. Deep Copy vs Shallow Copy

Create a nested object and demonstrate:

* Reference copy
* Shallow copy
* Deep copy

---

# Object Methods, this, Constructor

### Q5. Calculator Object

Create an object with methods:

* read(a, b)
* sum()
* multiply()

Use `this`.

---

### Q6. Method Chaining

Create a ladder object that supports:

```js
ladder.up().up().down().showStep();
```

---

### Q7. Constructor Function

Create a constructor:

```js
function User(name, age)
```

Create at least 3 users using `new`.

---

# Optional Chaining & Symbols

### Q8. Optional Chaining

Safely access:

```js
user.profile.address.city
```

even when some properties don't exist.

---

### Q9. Symbol Property

Create a Symbol-based ID for a user object and verify it doesn't appear in a `for...in` loop.

---

# Numbers & Strings

### Q10. Extract Currency Value

Convert:

```js
"$120"
```

into:

```js
120
```

---

### Q11. Random Integer

Create:

```js
randomInteger(min, max)
```

---

### Q12. Check Spam

Detect whether a string contains:

```text
viagra
xxx
```

(case-insensitive)

---

### Q13. Palindrome Checker

Check whether a string is a palindrome.

Examples:

```text
madam → true
hello → false
```

---

# Arrays & Array Methods

### Q14. Remove Duplicates

Remove duplicate values from an array.

Example:

```js
[1,2,2,3,3,4]
```

---

### Q15. Find Second Largest Number

Find the second largest element in an array.

---

### Q16. Array Transformations

Given:

```js
[1,2,3,4,5]
```

Use:

* map() → double values
* filter() → even values
* reduce() → sum values

---

### Q17. Group Users by Age

Input:

```js
[
 {name:"John", age:20},
 {name:"Pete", age:20},
 {name:"Ann", age:25}
]
```

Output:

```js
{
  20:[...],
  25:[...]
}
```

Use `reduce()`.

---

# Iterables, Map, Set

### Q18. Custom Iterable

Create a custom iterable object that generates numbers from 1 to 5.

Use:

```js
for...of
```

---

### Q19. Word Frequency Counter

Count occurrences of words using a `Map`.

Example:

```js
["apple","apple","banana"]
```

---

### Q20. Unique Values

Remove duplicates using `Set`.

---

# Object Utilities & Destructuring

### Q21. Highest Salary

Given:

```js
{
 John:100,
 Pete:300,
 Ann:250
}
```

Return the employee with the highest salary.

Use:

```js
Object.entries()
```

---

### Q22. Destructuring Practice

Using destructuring:

* Extract `name` and `age`
* Rename `name` to `userName`
* Provide a default value for `city`

---

# Date & Time

### Q23. Age Calculator

Given a birth date, calculate current age.

---

# JSON

### Q24. JSON Practice

1. Convert an object to JSON using `JSON.stringify()`
2. Convert it back using `JSON.parse()`
3. Exclude a `password` property using a replacer function

---

# Bonus (Optional)

### Q25. Mini Expense Tracker

Create functions to:

* Add expense
* Remove expense
* Calculate total expenses

Use:

* Objects
* Arrays
* reduce()
* Date
