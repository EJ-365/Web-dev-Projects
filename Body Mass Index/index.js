/*  BMI => kg/m^2 // formula
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
        // calculateBMI();
    alert ("got it");
    }
}