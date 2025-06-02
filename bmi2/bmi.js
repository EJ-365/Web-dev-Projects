/*  BMI => width (kg)/ height (m^2) // formula
 Normal => 18.5 - 24.9;
underweight => <18.5
overweight => 25-29.9
Obese => >30 and above 
*/
"use strict";
const form = document.querySelector('form'),
height = document.getElementById('height'),
weight = document.getElementById('weight'),
result = document.querySelector('.result'),
reset = document.querySelector('.reset');

// add event listener to the form so that i can access the submit button 

form.addEventListener('submit', validate );

function validate(event){
     event.preventDefault();
    let heightInput = height.value;
    let weightInput = weight.value;

    // when it's not being clicked yet
 result.style.display = "block";
    reset.style.display = "block";

if(heightInput === "") {
result.innerHTML = "Please Enter valid height in CM";
}

else if(weightInput === ""){
    result.innerHTML = "Please Enter valid weight in KG";
}

else {
result.innerHTML = `<div class="loader-div">
<img class="loader" src="loader.gif" alt="loading..."> 
</div>
`
;
   setTimeout(function() {
     calculate(heightInput, weightInput);
   }, 1000);
}
}

// function to calculate the BMI
function calculate(heightValue, weightValue) {
    // convert cm to m by dividing by 100
    heightValue = heightValue / 100;
    let bmi = (weightValue / Math.pow(heightValue, 2)).toFixed(2);
    console.log(bmi);
    
    // determine if underweight, overweight, normal or obese

     if (bmi <= 18.5) {
       showResult(`Underweight ☹️: <span>${bmi}</span>`, 'lightgray');
    }

    else if(bmi >= 18.5 && bmi <= 24.9){
          showResult(`Normal👍: <span>${bmi}</span>`, 'green');
    }

    else if (bmi >= 25 && bmi <= 29.9){
          showResult(`Overweight 😞: <span>${bmi}</span>`, 'orangered');
    }

    else {
        showResult(`Obese ⛔👩🏽‍⚕️: <span>${bmi}</span>`, 'darkred');
    }

}

function showResult(value, color){
    result.style.color = color;
    return result.innerHTML = value;
}

reset.addEventListener('click', function(){
    form.reset();
    result.style.display = "none";
    reset.style.display = "none";
})