
# Async / Await

## async

* `async` function always returns a Promise.
* Return value is automatically wrapped in a Promise.

```js
async function test() {
  return 100;
}
```

Output:

```js
Promise { 100 }
```

## await

* Can only be used inside an async function.
* Pauses execution until Promise resolves.
* Returns resolved value.

```js
const result = await Promise.resolve(10);
console.log(result);
```

Output:

```js
10
```

---

# Promise API

## Promise.all()

* Waits for all promises.
* One failure = entire promise fails.

```js
Promise.all([p1, p2, p3]);
```

## Promise.allSettled()

* Waits for all promises.
* Never fails.
* Returns status of each promise.

```js
Promise.allSettled([p1, p2]);
```

## Promise.race()

* First settled promise wins.
* Success or failure.

```js
Promise.race([p1, p2]);
```

## Promise.any()

* First successful promise wins.
* Ignores rejected promises.

```js
Promise.any([p1, p2]);
```

---

# Error Handling

## try...catch

```js
try {
  // risky code
}
catch(error) {
  // handle error
}
```

## Error Object

```js
error.name
error.message
```

## finally

* Always executes.

```js
finally {
}
```

## throw

```js
throw new Error("Invalid Input");
```

---

# Custom Errors

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

## instanceof

```js
err instanceof Error
err instanceof ValidationError
```

Used to identify error type.

---

# Modules

## Named Export

```js
export const PI = 3.14;
```

Import:

```js
import { PI } from "./math.js";
```

## Default Export

```js
export default greet;
```

Import:

```js
import greet from "./file.js";
```

### Interview Rule

```text
Named Export -> {}
Default Export -> No {}
```

---

# Dynamic Import

```js
const module =
await import("./math.js");
```

## Key Points

* Returns Promise.
* Used for Lazy Loading.
* Improves performance.

---

# Currying

## Definition

Convert:

```js
fn(a,b,c)
```

Into:

```js
fn(a)(b)(c)
```

## Example

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
```

## Uses

* Partial Application
* Reusability
* Functional Programming

## Interview

* Implemented using Closures.

---

# DOM

## Definition

DOM = Document Object Model

* Tree representation of HTML.
* Allows JavaScript to manipulate HTML.

```js
document
```

Main DOM object.

---

# DOM Selection

## getElementById()

```js
document.getElementById("id");
```

## querySelector()

```js
document.querySelector(".box");
```

Returns first match.

## querySelectorAll()

```js
document.querySelectorAll(".box");
```

Returns all matches.

---

# Attributes vs Properties

## Attribute

* Original HTML value.

```js
getAttribute("value")
```

## Property

* Current DOM value.

```js
input.value
```

### Interview

```text
Attribute -> Initial Value
Property -> Current Value
```

---

# DOM Manipulation

## textContent

```js
element.textContent
```

* Plain text.

## innerHTML

```js
element.innerHTML
```

* Parses HTML.

## Create Element

```js
document.createElement()
```

## Add Element

```js
append()
prepend()
```

## Remove Element

```js
remove()
```

---

# Events

## addEventListener()

```js
element.addEventListener(
  "click",
  handler
);
```

## Event Object

```js
e.type
e.target
```

### e.target

Element that triggered event.

### e.type

Type of event.

---

# Event Bubbling

Flow:

```text
Child
↑
Parent
↑
Grandparent
```

Bottom → Top

## stopPropagation()

```js
e.stopPropagation();
```

Stops bubbling.

---

# Event Capturing

Flow:

```text
Grandparent
↓
Parent
↓
Child
```

Top → Bottom

Enable:

```js
addEventListener(
  "click",
  handler,
  true
);
```

---

# Event Delegation

## Definition

Single listener on parent handles child events using bubbling.

## Formula

```text
Parent Listener
+
Bubbling
+
e.target
=
Event Delegation
```

## Benefits

* Better Performance
* Less Memory Usage
* Dynamic Elements

---

# Form Events

## input

* Fires on every keystroke.

## change

* Fires after value changes and input loses focus.

## focus

* Fires when input gains focus.

## blur

* Fires when input loses focus.

## submit

* Fires when form is submitted.

## preventDefault()

```js
e.preventDefault();
```

Stops page reload/default action.

---

# DOMContentLoaded

```js
document.addEventListener(
  "DOMContentLoaded",
  fn
);
```

## Key Points

* HTML parsed.
* DOM created.
* Does NOT wait for images/videos.

---

# load Event

```js
window.addEventListener(
  "load",
  fn
);
```

Waits for:

* HTML
* CSS
* Images
* Videos
* Fonts

---

# async vs defer

## async

* Downloads in parallel.
* Executes immediately after download.
* Order not guaranteed.

## defer

* Downloads in parallel.
* Executes after HTML parsing.
* Preserves script order.

### Interview

```text
async -> Execute ASAP

defer -> Execute After HTML Parsing
```
