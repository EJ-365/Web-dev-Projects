/* temperature converter 
Formula:

0C = 0 degree celsius (replace 0 by user input)
0F = 0 degree fahrenheit (replace 0 by user input)

formula for celsius to fahrenheit   (0C * 9/5) + 32 = F

formula for Fahrenheit to celsius  (0F - 32) *  5/9 = C
 declare our variables

 */

// for user input
const userInput = document.querySelector(".userInput");

// for radio checkboxes
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
// display elements
const displayResult = document.querySelector(".display");
const message = document.querySelector(".message");

// submit button
const submit = document.querySelector(".btn");

// listen when the user click submit
submit.addEventListener("click", function () {
  // validation
  if (userInput.value === null || userInput.value === "") {
    displayResult.innerHTML = "Please Enter a number";
    displayResult.style.color = "#ff644a";
  } else if (celsius.checked) {
    let result = (userInput.value * 9) / 5 + 32; // formula for C - F
    displayResult.innerHTML = `${result.toFixed(2)}°F`;
    displayResult.style.color = "lightgreen";

    if (result >= 59) {
      message.innerHTML = "Apply Sunscreen";
        message.style.color = "yellow";
    } else {
      message.innerHTML = ""; // Clear the message when temperature is below 59°F
    }
  } else if (fahrenheit.checked) {
    let result = ((userInput.value - 32) * 5) / 9;
    displayResult.innerHTML = `${result.toFixed(2)}°C`;
    displayResult.style.color = "lightgreen";

    if (result >= 15) {
      message.innerHTML = "Apply Sunscreen";
      message.style.color = "yellow";
    } else {
      message.innerHTML = ""; // Clear the message when temperature is below 59°F
    }
  } else {
    displayResult.innerHTML = "Select one of the options";
    displayResult.style.color = "#ff644a"; 
  }
});

// event listener for keyboard

userInput.addEventListener('keydown', function(e){
if (e.key === "Enter" && (celsius.checked || fahrenheit.checked)) {
    submit.click();
}
})