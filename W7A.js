// Create an array called ages with the given values.
let ages = [3,9,23,64,2,8,28,93]

// Subtract the first element from the last element in the array.
let difference = ages[ages.length - 1] - ages[0];
console.log(difference);

// Add a new age to the array.
ages.push(42);

// Repeat the subtraction step to ensure it works dynamically.
difference = ages[ages.length - 1] - ages[0];
console.log(difference);

// Initialize a sum variable.
let sum = 0
// Loop through the ages array to calculate the sum of all elements.
    for (i = 0; i < ages.length; i++) {
        sum += ages[i];
    } 
    // Calculate the average age.
    let average = sum / ages.length;
    console.log(average);

// Create an array called names with the given values.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Initialize a variable to hold the total number of letters.
let totalLetters = 0
// Get the number of names in the array.
let numberOfNames = names.length;
// Loop through the names array to calculate the total number of letters.
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length;
    } 
    // Calculate the average number of letters per name.
   let averageLetters = totalLetters / numberOfNames;
    console.log(averageletters);

    // Initialize a string to hold the concatenated names.

let concatenatedNames = "";
// Loop through the names array to concatenate all the names separated by spaces.
    for (let i = 0; i < numberOfNames; i++) {
        concatenatedNames; += names[i] + (i < numberOfNames - 1 ? " " : "");
    }
console.log(concatenatedNames); // Output the concatenated names.

/* 
Question 1:

You can access the last element in an array by using "ages.length -1",
or by saying "ages[7]" for example. Since arrays are a zero based index.

Question 2:

You can access the first element in an array by using the code "ages[0]" for example. */

// Create an array called nameLengths.
let nameLengths = [];
// Loop through the names array to add the length of each name to the nameLengths array.
    for(let i = 0; i < names.length; i++) {
       let nameLength = names[i].length;

        nameLengths.push(nameLength);
    }
    
    console.log(nameLengths); // Output the nameLengths array.

    // Initialize a variable to hold the sum of name lengths.
    let sumForNameLengths = 0
    // Loop through the nameLengths array to calculate the sum of all elements.
    for( let i = 0; i < nameLengths.length; i++) {
        sumForNameLengths += nameLengths[i];
    }

    console.log(sumForNameLengths); // Output the sum of name lengths.

    // Function to repeat a word n times.
    function repeatWord(word, n) {
        let result = '';
        // Loop to concatenate the word n times.
        for (let i = 0; i < n; i++) {
            result += word; // Return the repeated word.
        }
    }

        let repeatedWord = repeatWord('Hello, 3');
        console.log(repeatedWord); // Output the repeated word.

    // Function to get the full name by concatenating first and last names.
    function getFullName(firstName, lastName) {
        let fullName = firstName + ' ' + lastName;
        return fullName;
 }
    let fullName = getFullName('John', 'Doe');
    console.log(fullName); // Return the full name.

    // Function to check if the sum of an array of numbers is greater than 100.
    function isSumGreaterThan100(numbers1) {
        let sum1 = 0
    // Loop through the array to calculate the sum of all elements.
        for (let i = 0; i < numbers1.length; i++) {
            sum1 += numbers1[i];
        }
        return sum1 > 100; // Return true if the sum is greater than 100.
    }

    let array1 = [1, 23, 33, 43, 53, 63, 73];
    let array2 = [10, 20, 30, 40];
    console.log(isSumGreaterThan100(array1));
    console.log(isSumGreaterThan100(array2));

    // Function to calculate the average of an array of numbers.
    function averageNum(array1) {
        let sum3 = 0
            // Loop through the array to calculate the sum of all elements.
        for (let i = 0; i < array1.length; i++) {
        sum3 += array1[i];
        
    }

    let average3 = sum3 / array1.length
    return average1; // Return the average.

    let averageNums = averageNum(array1);
    console.log(averageNums); // Output the average of the array.

    // Function to compare the averages of two arrays of numbers.
    function averageNum1(array3, array4) {
        let sum3 = 0
        let sum4 = 0 
        // Loop through the first array to calculate the sum of its elements.
        for (let i = 0; i < array3.length; i++) {
        sum3 += array3[i];
        }
    }
        // Loop through the second array to calculate the sum of its elements.
    for (let i = 0; i < array4.length; i++) {
        sum4 += array4[i];
    }
        let average1 = sum3 / array3.length;
        let average2 = sum4 / array4.length;

        return average1 > average2; // Return true if the average of the first array is greater.

    }

    let array3 = [10, 20, 30, 40];
    let array4 = [5, 10, 15, 20];
    console.log(averageNum1(array3, array4)); // Output: true.

    function willBuyDrink(isHotOutside, moneyInPocket) {
        // Check if it is hot outside and if money in pocket is greater than 10.50
        if (isHotOutside && moneyInPocket > 10.50) {
            return true; // Return true if both conditions are met
        }
        return false; // Return false otherwise
    }
    
    // Example usage
    console.log(willBuyDrink(true, 11)); // Output: true
    console.log(willBuyDrink(true, 10)); // Output: false
    console.log(willBuyDrink(false, 11)); // Output: false
    
    /*
 * Function to add two numbers.
 * This function takes two parameters and returns their sum. 
 * I created this function to demonstrate a basic arithmetic operation
 * and to provide a utility for adding two numbers together.
 */
function addTwoNumbers(a, b) {
    return a + b;
}

// Example usage
console.log(addTwoNumbers(3, 5)); // Output: 8
console.log(addTwoNumbers(-1, 7)); // Output: 6
console.log(addTwoNumbers(10, 0)); // Output: 10
