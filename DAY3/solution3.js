
// Q1. Object Manipulation
// Create a user object with name and age.
// - Add a new property city
// - Update age
// - Delete city

function manipulateUserObject(){
    let user = {
        name: "John",
        age: 30
    };

    // Add a new property city
    user.city = "New York";

    // Update age
    user.age = 31;

    // Delete city
    delete user.city;

    console.log(user);
}

manipulateUserObject();



// Q2. Check Empty Object
// Write a function:
// isEmpty(obj)
// Return true if the object has no properties.

objectIsEmpty = (obj) => {
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}

console.log(objectIsEmpty({})); 
console.log(objectIsEmpty({name: "John"})); 


// Q3. Sum Object Values
// Given:
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// Return the total salary.


function sumSalaries(salaries){
    let total = 0;
    for(let key in salaries){
        if(salaries.hasOwnProperty(key)){
            total += salaries[key];
        }
    }
    return total;
}

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

console.log(sumSalaries(salaries));     


// Q4. Deep Copy vs Shallow Copy
// Create a nested object and demonstrate:
// - Reference copy
// - Shallow copy
// - Deep copy


const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};

// Reference copy
const referenceCopy = original;

// Shallow copy
const shallowCopy = Object.assign({}, original);

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

   
// Q5. Calculator Object
// Create an object with methods:
// - read(a, b)
// - sum()
// - multiply()
// Use this.


const calculator = {
    a: 0,
    b: 0,
    read(a, b){
        this.a = a;
        this.b = b;
    },
    sum(){
        return this.a + this.b;
    },
    multiply(){
        return this.a * this.b;
    }
};

calculator.read(5, 3);
console.log(calculator.sum()); 
console.log(calculator.multiply());  


// Q6. Method Chaining
// Create a ladder object that supports:
// ladder.up().up().down().showStep();

const ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep(); 


// Q7. Constructor Function
// Create a constructor:
// function User(name, age)
// Create at least 3 users using new.

function User(name, age){
    this.name = name;
    this.age = age;
}

const user1 = new User("John", 30);
const user2 = new User("Ann", 25);
const user3 = new User("Pete", 35);

console.log(user1);
console.log(user2);
console.log(user3);


// Q8. Optional Chaining
// Safely access:
// user.profile.address.city
// even when some properties don't exist.

const user = {
    name: "John",
    profile: {
        
    }
};

console.log(user.profile?.address?.city); 


// Q9. Symbol Property
// Create a Symbol-based ID for a user object.
// Verify it doesn't appear in a for...in loop.

const userWithSymbol = {
    name: "John",
    age: 30
};

const id = Symbol("id");
userWithSymbol[id] = 12345;

for(let key in userWithSymbol){
    console.log(key); 
}

console.log(userWithSymbol[id]);    



// Q10. Extract Currency Value
// Convert:
// "$120"
// into:
// 120

function extractCurrencyValue(str){
    return parseFloat(str.replace(/[^0-9.-]+/g,""));
}

console.log(extractCurrencyValue("$120"));  


// Q11. Random Integer
// Create:
// randomInteger(min, max)

function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 10));


// Q12. Check Spam
// Detect whether a string contains:
// "viagra"
// "xxx"
// (case-insensitive)

function checkSpam(str){
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");
}

console.log(checkSpam("Hello, how are you?")); 
console.log(checkSpam("Get your viagra now!")); 
console.log(checkSpam("Stop this xxx!")); 


// Q13. Palindrome Checker
// Check whether a string is a palindrome.
//
// Examples:
// madam -> true
// hello -> false

function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama"));    


// Q14. Remove Duplicates
// Remove duplicate values from an array.
//
// Example:
// [1,2,2,3,3,4]

function removeDuplicates(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,3,4]));


// Q15. Find Second Largest Number
// Find the second largest element in an array.

function secondLargest(arr){
    let first = -Infinity, second = -Infinity;
    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        } else if(num > second && num < first){
            second = num;
        }
    }
    return second;
}

console.log(secondLargest([1, 5, 3, 9, 2]));


// Q16. Array Transformations
// Given:
// [1,2,3,4,5]
//
// Use:
// - map() -> double values
// - filter() -> even values
// - reduce() -> sum values

const numbers = [1,2,3,4,5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const even = numbers.filter(num => num % 2 === 0);
console.log(even);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);   


// Q17. Group Users by Age
// Input:
// [
//   {name:"John", age:20},
//   {name:"Pete", age:20},
//   {name:"Ann", age:25}
// ]
//
// Output:
// {
//   20:[...],
//   25:[...]
// }
//
// Use reduce().

const users = [
    {name:"John", age:20},
    {name:"Pete", age:20},
    {name:"Ann", age:25}
];

const groupedByAge = users.reduce((acc, user) => {
    if(!acc[user.age]){
        acc[user.age] = [];
    }
    acc[user.age].push(user);
    return acc;
}, {});

console.log(groupedByAge);  


// Q18. Custom Iterable
// Create a custom iterable object
// that generates numbers from 1 to 5.
//
// Use:
// for...of

const iterable = {
    [Symbol.iterator](){
        let num = 1;
        return {
            next(){
                if(num <= 5){
                    return {value: num++, done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

for(let value of iterable){
    console.log(value);
}   


// Q19. Word Frequency Counter
// Count occurrences of words using a Map.
//
// Example:
// ["apple","apple","banana"]

function wordFrequency(arr){
    const frequencyMap = new Map();
    for(let word of arr){
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
    return frequencyMap;
}

console.log(wordFrequency(["apple","apple","banana"])); 



// Q20. Unique Values
// Remove duplicates using Set.
 
function uniqueValues(arr){
    return [...new Set(arr)];
}

console.log(uniqueValues([1,2,2,3,3,4]));   


// Q21. Highest Salary
// Given:
// {
//   John:100,
//   Pete:300,
//   Ann:250
// }
//
// Return the employee with the highest salary.
//
// Use Object.entries().


const salaries = {
    John:100,
    Pete:300,
    Ann:250
};

const highestSalaryEmployee = Object.entries(salaries).reduce((acc, [name, salary]) => {
    return salary > acc.salary ? {name, salary} : acc;
}, {name: '', salary: -Infinity});

console.log(highestSalaryEmployee); 


// Q22. Destructuring Practice
// Using destructuring:
// - Extract name and age
// - Rename name to userName
// - Provide a default value for city


const user = {
    name: "John",
    age: 30
};

const {name: userName, age, city = "Unknown"} = user;

console.log(userName); 
console.log(age); 
console.log(city);



// Q23. Age Calculator
// Given a birth date,
// calculate current age.

function calculateAge(birthDate){
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();  

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

console.log(calculateAge("1990-01-01"));



// Q24. JSON Practice
//
// 1. Convert an object to JSON using JSON.stringify()
// 2. Convert it back using JSON.parse()
// 3. Exclude a password property using a replacer function


const user = {
    name: "John",
    age: 30,    

    password: "secret"  
};  

const jsonString = JSON.stringify(user, (key, value) => {   
    if(key === "password"){
        return undefined; 
    }
    return value;
}       

);

console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser);    



















