

/*
Q1. Counter using Closure

Create a function createCounter()
that returns a function.

Example:

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
*/

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());

/*
Q2. Private Variable using Closure

Create createBankAccount(initialBalance)

Methods:

* deposit(amount)
* withdraw(amount)
* getBalance()

Balance should not be directly accessible.
*/

function createBankAccount(initialBalance){
    let balance = initialBalance;
    return {
        deposit(amount){
            balance += amount;
        },
        withdraw(amount){
            if(amount <= balance){
                balance -= amount;
            } else {
                console.log("Insufficient funds");
            }
        },
        getBalance(){
            return balance;
        }
    };
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());



/*
Q3. Sum using Rest Parameters

Implement:

sum(...numbers)

Example:
sum(1,2,3,4) // 10
*/

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1,2,3,4));  




/*
Q4. Array Copy using Spread Syntax

Create a copy of an array using
spread syntax.

Example:

const arr = [1,2,3];
const copy = ?
*/

const arr = [1,2,3];
const copy = [...arr];
console.log(copy);  



/*
Q5. Merge Objects using Spread

Merge:

{name:"John"}
{age:25}

Expected:

{
name:"John",
age:25
}
*/

const obj1 = {name:"John"};
const obj2 = {age:25};

const merged = {...obj1, ...obj2};
console.log(merged);

/*
Q6. Recursive Factorial

Implement:

factorial(5)

Output:
120
*/

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));



/*
Q7. Recursive Fibonacci

Implement:

fib(6)

Output:
8
*/

function fib(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));




/*
Q8. Custom Map

Implement your own map function.

Example:

customMap(
[1,2,3],
x => x * 2
)

Output:
[2,4,6]
*/

function customMap(arr, fn){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i], i, arr));
    }
    return result;
}

console.log(customMap([1,2,3], x => x * 2));



/*
Q9. call()

Create a function greet()

Use call() to change this.
*/

function greet(){
    console.log(`Hello, ${this.name}`);
}

const user = {name: "John"};
greet.call(user);   




/*
Q10. apply()

Create:

function add(a,b,c)

Use apply()
with an array.
*/


function add(a,b,c){
    return a + b + c;
}

const numbers = [1,2,3];
console.log(add.apply(null, numbers));      



/*
Q11. bind()

Create a bound function.

Example:

const boundFn =
greet.bind(user)
*/


function greet(){
    console.log(`Hello, ${this.name}`);
}

const user = {name: "John"};
const boundFn = greet.bind(user);
boundFn();  

