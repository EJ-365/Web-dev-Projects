/**
 * calculator program: 
 * The above JavaScript code defines a simple calculator program that allows users to input values,
 * clear the display, and calculate the result using the eval function.
 * @param input - The `input` parameter in the `appendToDisplay` function represents the value that you
 * want to add to the display. It could be a number, an operator, or any other input that you want to
 * append to the display for calculation.
 */


const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input; //    
}

// clear display function 
function clearDisplay() {
    display.value = "";
    
}

// calculate function
function calculate() {
    try {
        display.value = eval(display.value); // automatically evaluate the expression i.e 1+2+3 = 5, 2*3 = 6 etc.
    }
    catch(err) {
        display.value = "Error";
    }
}

// note: eval is a string value