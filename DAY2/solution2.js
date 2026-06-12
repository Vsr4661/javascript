// 1. Print numbers from 1 to 10 using a `while` loop.

function printNumbers(){
   let i =1;
   while(i<=10){
    console.log(i);
    i++;
   }
}
printNumbers();

// 2. Print all even numbers between 1 and 20 using a `for` loop.

function printEvenNumbers(){
    for(let i=1;i<=20;i++){
        if(i%2==0)
        console.log(i);
    }

}
printEvenNumbers();


//3. Find the sum of numbers from 1 to 100.

function sumOfNumbers(){
    let sum = 0;
    for( let i =0;i<=100;i++){
        sum = sum +i;
    }
    console.log(sum);
}

sumOfNumbers();


// 4. Print the multiplication table of 5.

function multiplication5(){
    for( let i=1;i<=10; i++){
        console.log(`5 x ${i} = ${5*i}`);
    }
}
multiplication5();


// 5. Use `break` to stop a loop when the value reaches 7.

function breakAtSeven(){
    for ( let i =1 ;i<=10;i++){
        if(i==7){
            break;
        }
        console.log(i);
    }
}
breakAtSeven();


// 6.  Use `continue` to skip all even numbers between 1 and 10.

function skipEvenNumbers(){
    for( let i=1;i<=10; i++){
        if(i%2==0){
            continue;
        }
        console.log(i);
    }
}
skipEvenNumbers();


// 7. Create a switch statement that prints the day of the week based on a number (1-7).

function printDayofWeek(dayNumber){
    switch(dayNumber){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;      
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
}
printDayofWeek(1);
printDayofWeek(5);
printDayofWeek(8);


// 8. Build a simple calculator using switch (`+`, `-`, `*`, `/`).

function simpleCalculator(num1, mum2, operator){
    switch( operator){
        case '+':
            console.log(num1 + mum2);
            break;
        case '-':
            console.log(num1 - mum2);
            break;  
        case '*':
            console.log(num1 * mum2);
            break;
        case '/':
            if(mum2 === 0){
                console.log("Cannot divide by zero");
            } else {
                console.log(num1 / mum2);
            }
            break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /."); 
    }
}
simpleCalculator(10, 5, '+');
simpleCalculator(10, 5, '-');
simpleCalculator(10, 5, '*');
simpleCalculator(10, 5, '/');
simpleCalculator(10, 0, '/');
simpleCalculator(10, 5, '^');


// 9. Print a message based on grades (`A`, `B`, `C`, `D`) using switch.

function printGradeMessage(grade){
    switch(grade){
        case 'A':
            console.log("Excellent!");
            break;
        case 'B':
            console.log("Good job!");
            break;
        case 'C':
            console.log("You can do better.");          
            break;
        case 'D':
            console.log("Needs improvement.");  
            break;
        default:
            console.log("Invalid grade. Please enter A, B, C, or D.");
    }
}   
printGradeMessage('A');
printGradeMessage('B');
printGradeMessage('C');
printGradeMessage('D');
printGradeMessage('E');



// 10. Write a function that returns the square of a number.


function square(num){
    return num * num
}
console.log(square(5));
console.log(square(-3));
console.log(square(0));

// 11. Write a function that returns the larger of two numbers.

function larger(num1, num2){
    return num1 > num2 ? num1 : num2;

}
console.log(larger(10, 20));
console.log(larger(-5, 3));
console.log(larger(7, 7));

// 12. Write a function with three parameters: `firstName`, `lastName`, and `profession`.

function createProfile(firstName, secondName, profession){
    return `Name: ${firstName} ${secondName}, Profession: ${profession}`;
}

console.log(createProfile("John", "Doe", "Software Engineer"));


// 13. Write a function that checks whether a number is prime or not.

function isPrime(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(15));
console.log(isPrime(17));
console.log(isPrime(1));
console.log(isPrime(-5));

/* 14.  Convert the following into a Function Expression:   ```js
function add(a, b) {
  return a + b;
}
``` */
const add = function(a, b){
    return a + b;
}
console.log(add(5, 10));
console.log(add(-3, 7));


// 15.  Create a callback function example using a Function Expression.

function performOperation(num1, num2, operation){
    return operation(num1, num2);
}
const multiply = function(a, b){
    return a * b;
}
console.log(performOperation(5, 10, multiply));
console.log(performOperation(7, 3, multiply));

// 16. Convert the following into an Arrow Function:

```js
function multiply(a, b) {
  return a * b;
}
```

const multiplyArrow = (a,b)=> a*b;
console.log(multiplyArrow(5, 10));
console.log(multiplyArrow(7, 3));



// 17. Write an Arrow Function that returns the largest of three numbers.

const largestOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}
console.log(largestOfThree(10, 20, 15));
console.log(largestOfThree(-5, -3, -10));
console.log(largestOfThree(7, 7, 7));

// 18. Write a multiline Arrow Function that calculates the area of a rectangle.

const areaOfRectangle = ( length, width) => {
    const area = length * width;
    return area;
}
console.log(areaOfRectangle(5, 10));
console.log(areaOfRectangle(7, 3));



