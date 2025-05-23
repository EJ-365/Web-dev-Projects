const parent = document.querySelector(".parent");
const key = document.querySelectorAll(".key");
const inputText = document.querySelector(".input-text");

// add event listener to all the keys
parent.addEventListener("click", function (e) {
  for (let i = 0; i < key.length; i++) {
    if (e.target === key[i]) {
      if (key[i].classList.contains("equals")) {
        calculate();
      } else if (key[i].classList.contains("del")) {
        // Remove last character
        inputText.value = inputText.value.slice(0, -1) || "0";
      } else if (key[i].classList.contains("reset")) {
        // Reset to 0
        inputText.value = "0";
      }  else if (key[i].classList.contains("square-root")) {
        // Calculate square root
        let val = parseFloat(inputText.value);
        let result = Math.sqrt(val);
        inputText.value = result;
      } else if (key[i].classList.contains("cube-root")) {
        // Calculate cube root
        let val = parseFloat(inputText.value);
        let result = Math.cbrt(val);
        inputText.value = result;
      } else {
        // If input is 0, replace it; otherwise, append
        if (inputText.value === "0") {
          inputText.value = key[i].textContent;
        } else {
          inputText.value += key[i].textContent;
        }
      }
    }
  }
});

function calculate() {
  let input = inputText.value; // get the input value
  let operatorMatch = input.match(/[+\-X\/]/); // uses regEx (regular expression )
  if (operatorMatch) {
    let operator = operatorMatch[0];
    let [num1, num2] = input.split(operator);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "X": // Capital X for multiplication
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid";
    }
    inputText.value = result;
  }
}
