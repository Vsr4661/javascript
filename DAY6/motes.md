# React Native Day 1 Notes

## Overview

Today I set up my React Native development environment and learned the fundamentals of building user interfaces using React Native.

---

# Environment Setup

## Node.js

Installed and configured:

* NVM (Node Version Manager)
* Node.js v22.x (LTS)

Useful Commands:

```bash
nvm install 22
nvm use 22
nvm alias default 22
node -v
npm -v
```

---

## Expo

Created a React Native project using Expo.

Useful Commands:

```bash
npx create-expo-app react-native-learning
npx expo start
```

---

## Expo Go

* Installed Expo Go on mobile device.
* Connected Expo project using QR code.
* Resolved Expo SDK compatibility issues.

---

# Core React Native Components

## View

Equivalent to HTML div.

```jsx
<View>
  <Text>Hello</Text>
</View>
```

Used as a container for other components.

---

## Text

Equivalent to HTML p or span.

```jsx
<Text>Hello React Native</Text>
```

Important:

Everything displayed on screen must be wrapped inside a Text component.

Correct:

```jsx
<Text>Hello</Text>
```

Incorrect:

```jsx
<View>
  Hello
</View>
```

---

## Pressable

Equivalent to HTML button.

```jsx
<Pressable onPress={() => alert("Clicked")}>
  <Text>Click Me</Text>
</Pressable>
```

Used to handle user interactions.

---

# JSX Rules

## Single Parent Element

A component must return a single parent element.

Incorrect:

```jsx
<View />
<Text />
```

Correct:

```jsx
<View>
  <Text>Hello</Text>
</View>
```

---

## JavaScript Variables

Variables must be declared outside JSX.

Correct:

```jsx
const name = "Vaibhav";

return (
  <Text>{name}</Text>
);
```

Incorrect:

```jsx
return (
  const name = "Vaibhav";
  <Text>{name}</Text>
);
```

---

## Curly Braces

Used to display JavaScript values.

```jsx
const age = 22;

<Text>{age}</Text>
```

Output:

```text
22
```

---

# React Hooks

## useState

Used for managing component state.

Import:

```jsx
import React, { useState } from "react";
```

Create State:

```jsx
const [message, setMessage] = useState("");
```

Update State:

```jsx
setMessage("Hello React Native");
```

---

# Event Handling

## onPress

Used with Pressable.

```jsx
<Pressable
  onPress={() => {
    setMessage("Button Clicked");
  }}
>
  <Text>Click Me</Text>
</Pressable>
```

---

# State Driven UI

UI updates automatically when state changes.

Example:

```jsx
const [message, setMessage] = useState("");

<Text>{message}</Text>
```

Button Click:

```jsx
setMessage("Welcome to React Native");
```

Output:

```text
Welcome to React Native
```

---

# Mini Project

## Message Display App

Features:

* Display name and age.
* Button click updates state.
* Message appears dynamically.

Code Structure:

```jsx
const [message, setMessage] = useState("");

<Pressable
  onPress={() =>
    setMessage("Ohohoo you did it")
  }
>
  <Text>Click Me</Text>
</Pressable>

<Text>{message}</Text>
```

---

# Common Errors Fixed

## Missing Default Export

Incorrect:

```jsx
function App() {}
```

Correct:

```jsx
export default function App() {}
```

---

## Multiple Root Elements

Incorrect:

```jsx
<View />
<Pressable />
```

Correct:

```jsx
<View>
  <Pressable />
</View>
```

---

## Missing Closing Tags

Incorrect:

```jsx
<View>
  <Text>Hello</Text>
```

Correct:

```jsx
<View>
  <Text>Hello</Text>
</View>
```

---

# React Native vs React

| React Native | React Web       |
| ------------ | --------------- |
| View         | div             |
| Text         | p/span          |
| TextInput    | input           |
| Pressable    | button          |
| Image        | img             |
| ScrollView   | scrollable div  |
| FlatList     | map() for lists |

---