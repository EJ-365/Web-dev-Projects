/*  BMI => width (kg)/ height (m^2) // formula
 Normal => 18.5 - 24.9;
underweight => <18.5
overweight => 25-29.9
Obese => >30 and above 
*/

"use strict";
const btn = document.querySelector('.btn'),
form = document.querySelector('form'),
 result = document.querySelector('.result'),
 reset = document.querySelector('.reset'),
heightInput = document.getElementById('height'),
weightInput = document.getElementById('weight');

// add event listener to the button

form.addEventListener('submit', validateInput );

function validateInput(e) {
    e.preventDefault();
    let height = heightInput.value; // variable name height and the variable element name for the input value called "heightInput and weightInput" declared at the top of the page
    let weight = weightInput.value;

    if(height === "") {
        return result.textContent = "Please Enter a valid height!";
    }

    else if (weight === "") {
        return result.textContent = "Please Enter a valid weight!";
    }
    else {
        calculateBMI(height,weight); // argument to get the user input(value)
    }
}

// calculate BMI

const calculateBMI = (height, weight) => {
    // converting the height to meter; currently it's in Centimeter
height = height / 100;
let bmi = (weight / Math.pow(height,2)).toFixed(1); // hight raised to power 2 or height squared using Math.pow and set it to 2 decimal places
console.log(bmi);

// categorize the result
if(bmi < 18.5) {
    result.textContent = bmi;
    // result.style.backgroundColor = 'yellow'
    // result.style.color = "black"
}

// tbd

}