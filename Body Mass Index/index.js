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
    let weight = weightInput.value; // to hold the weight value input element 

    // For displaying the reset button 
reset.style.display = 'block';
result.style.display ="block";

    if(height === "") {
        return result.textContent = "Please Enter a valid height!";
    }

    else if (weight === "") {
        return result.textContent = "Please Enter a valid weight!";
    }
    
    else {
result.innerHTML = `
<div class="loader-div">
<img class="loader" src="Animation - 1748764638312.gif" alt="loading...">
 </div>
`;

setTimeout(()=> {
     calculateBMI(height,weight);// argument to get the user input(value)

}, 1000) 
    }

}

// calculate BMI

const calculateBMI = (height, weight) => {
    // converting the height to meter by dividing by 100; currently it's in Centimeter
height = height / 100;
let bmi = (weight / Math.pow(height,2)).toFixed(1); // hight raised to power 2 or height squared using Math.pow and set it to 2 decimal places
console.log(bmi);

// categorize the result
if(bmi < 18.5) {
   showResult(`Underweight:😒 <span>${bmi}</span>`, 'gray');

}

else if(bmi >= 18.5 && bmi <= 24.9) {
showResult(`Normal: 😍  <span>${bmi}</span>`, 'green')
}

else if (bmi >= 25.0 && bmi <= 29.9) {
    showResult(`Overweight:😮  <span>${bmi}</span>`, 'orange')
}

else {
    showResult(`Obese: 😱 <span>${bmi}</span>`, 'darkred') 
}
}

// function that will show the result for us
function showResult(val, color){
result.style.backgroundColor = color
return result.innerHTML = val;
}


// event listener for reset button
reset.addEventListener('click', () => {
    form.reset(); 
    result.style.display = "none"; // hiding the result
    reset.style.display ="none";
})

// form.reset() clears the form