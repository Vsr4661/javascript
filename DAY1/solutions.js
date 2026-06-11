/*
Day 01 Solutions
Topics:
- Variables
- Data Types
- Type Conversion
- Operators
- Comparisons
- Conditions
- Logical Operators
*/

// 1. Check whether a number is positive, negative or zero.

 function checknumber(num){
    if (num>0) return "Positive";
    if (num<0) return "Negative";
    else return "Zero";
}
    
console.log(checknumber(5)); 
console.log(checknumber(-3));
console.log(checknumber(0)); 



// 2. Check whether a number is even or odd.



function checkEvenOdd(num){
    if(num%2==0) return "even";
    else return "odd"
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));   


// 3. Check whether a year is a leap year or not.



function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));



// 4. Find the greater of two numbers.


function findGreater(a, b) {
    return (a > b) ? a : b;
}
console.log(findGreater(10, 20));
console.log(findGreater(30, 25));



// 5. Find the largest among three numbers.



 function findlargest(a,b,c){
    if(a>b && a>c) return "a is largest";
    if (b>a && b>c) return "b is largest";
    else return "c is largest";
 }

 console.log(findlargest(10,20,30));
 console.log(findlargest(50,20,30));
 console.log(findlargest(10,60,30));

 

 // 6.  Convert Celsius to Fahrenheit.

 

 function celsiusToFahrenheit(celsius) {
     return (celsius * 9/5) + 32;
 }

 console.log(celsiusToFahrenheit(0));
 console.log(celsiusToFahrenheit(100));

 

 // 7. Check whether a character is vowel or consonant.

 

 function checkVowelConsonant(char) {
    if (char.length !== 1) {
        return "Please enter a single character.";
    }
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(char)) {
        return "Vowel";
    } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        return "Consonant";
    } else {
        return "Not an alphabetic character.";
    }

}

console.log(checkVowelConsonant('a'));
console.log(checkVowelConsonant('B'));
console.log(checkVowelConsonant('1'));




// 8. Print numbers from 1 to N.



function printNumbers(n){
    for (let i=1;i<=n; i++){
        console.log(i);

    }
    
}

console.log(printNumbers(15));


 
 // 9. Print all even numbers from 1 to N

 function printEvenNumbers(n){
    for (let i=1; i<=n; i++){
        if (i%2==0) console.log(i);
    }
  
 }
 console.log(printEvenNumbers(20));

 //10. Calculate sum of first N natural numbers.

    function sumOfNaturalNumbers(n){
        let sum=0;
        for (let i=1; i<=n; i++){
            sum+=i;
        }
        return sum;
    }
    console.log(sumOfNaturalNumbers(10));

    // 11. Calculate factorial of a number.

    function factorial(n) {
        if (n < 0) return "No factorials for negative numbers";
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }
    console.log(factorial(5));
    console.log(factorial(0));
    console.log(factorial(-3));

    // 12. Count digits in a number.

    function countDigits(num) {
        if (num === 0) return 1;
        let count = 0;
        num = Math.abs(num);
        while (num > 0) {
            count++;
            num = Math.floor(num / 10);
        }
        return count;
    }

    console.log(countDigits(12345));
    console.log(countDigits(0));
    console.log(countDigits(-9876));


    // 13. Reverse a number.

    function reverseNumber(num) {
        let reversed = 0;
        let sign = num < 0 ? -1 : 1;
        num = Math.abs(num);
        while (num > 0) {
            reversed = (reversed * 10) + (num % 10);
            num = Math.floor(num / 10);
        }
        return sign * reversed;
    }
    
    console.log(reverseNumber(12345));
    console.log(reverseNumber(-6789));
    console.log(reverseNumber(0));

    // 14. Check whether a number is palindrome.

    function isPalindrome(num) {
        const reversed = reverseNumber(num);
        return reversed === num;
    }

    console.log(isPalindrome(12321));
    console.log(isPalindrome(-12321));
    console.log(isPalindrome(12345));

    // 15. Build a simple calculator using switch.

function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) return "Cannot divide by zero";
            return num1 / num2;
        default:
            return "Invalid operator";
    }

}

console.log(simpleCalculator(10, 5, '+'));
console.log(simpleCalculator(10, 5, '-'));
console.log(simpleCalculator(10, 5, '*'));
console.log(simpleCalculator(10, 5, '/'));
console.log(simpleCalculator(10, 0, '/'));
console.log(simpleCalculator(10, 5, '^'));


// 16. Determine grade from marks.

function determineGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    } else if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(determineGrade(95));
console.log(determineGrade(85));
console.log(determineGrade(75));
console.log(determineGrade(65));
console.log(determineGrade(55));

