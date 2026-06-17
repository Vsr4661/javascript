// =========================================
// Question 1
// Write an async function that returns the value 100.
// =========================================

function asyncReturn100() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(100);
        }, 1000);
    });
}

async function getValue() {
    const value = await asyncReturn100();
    console.log(value);
}

getValue();


// =========================================
// Question 2
// Create a Promise that resolves after 2 seconds
// and use await to print the resolved value.
// =========================================

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms} milliseconds`);
        }, ms);
    });
}

async function printDelayedValue() {
    const value = await delay(2000);
    console.log(value);
}

printDelayedValue();


// =========================================
// Question 3
// Write an async function that uses try...catch
// to handle a rejected Promise.
// =========================================

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong!");
        }, 1000);
    });
}

async function handleRejectedPromise() {
    try {
        const result = await rejectedPromise();
        console.log(result);
    } catch (error) {
        console.error("Caught Error:", error);
    }
}

handleRejectedPromise();


// =========================================
// Question 4
// Create three Promises and use Promise.all()
// to print all resolved values.
// =========================================

function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 Resolved");
        }, 1000);
    });
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 Resolved");
        }, 2000);
    });
}

function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 Resolved");
        }, 1500);
    });
}

async function runPromiseAll() {
    const results = await Promise.all([
        promise1(),
        promise2(),
        promise3()
    ]);

    console.log(results);
}

runPromiseAll();


// =========================================
// Question 5
// Create three Promises where one rejects
// and use Promise.allSettled().
// =========================================

function promiseA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise A Resolved");
        }, 1000);
    });
}

function promiseB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise B Rejected");
        }, 2000);
    });
}

function promiseC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise C Resolved");
        }, 1500);
    });
}

async function runAllSettled() {
    const results = await Promise.allSettled([
        promiseA(),
        promiseB(),
        promiseC()
    ]);

    console.log(results);
}

runAllSettled();


// =========================================
// Question 6
// Create two Promises with different delays
// and use Promise.race().
// =========================================

function fastPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fast Promise Won");
        }, 1000);
    });
}

function slowPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Slow Promise Finished");
        }, 3000);
    });
}

async function runRace() {
    const result = await Promise.race([
        fastPromise(),
        slowPromise()
    ]);

    console.log(result);
}

runRace();


// =========================================
// Question 7
// Create three Promises where the first two reject
// and the third resolves.
// Use Promise.any().
// =========================================

function rejectPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 1 Failed");
        }, 1000);
    });
}

function rejectPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 2 Failed");
        }, 2000);
    });
}

function resolvePromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 Succeeded");
        }, 1500);
    });
}

async function runPromiseAny() {
    try {
        const result = await Promise.any([
            rejectPromise1(),
            rejectPromise2(),
            resolvePromise()
        ]);

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

runPromiseAny();


// =========================================
// Question 8
// Write a program that throws an error
// when age is less than 18.
// =========================================

async function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18");
    }

    return "Age is valid";
}

async function validateAge(age) {
    try {
        const result = await checkAge(age);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

validateAge(16);
validateAge(21);


// =========================================
// Question 9
// Create a custom error class named
// ValidationError.
// =========================================

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }

    return "Input is valid";
}

try {
    console.log(validateInput(""));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


// =========================================
// Question 10
// Use try...catch...finally
// to handle an error and print messages
// from all blocks.
// =========================================

function riskyOperation() {
    throw new Error("Something went wrong");
}

try {
    riskyOperation();
} catch (error) {
    console.error("Caught Error:", error.message);
} finally {
    console.log("Finally block executed");
}