/* This code calculate price tip amount and the total amount after the tip
 based on the user price.
 ----------------------------------------------------------------------------------------------
 Notes: the calculate and clear button has onClick on the html element.
toFixed() is a method for formatting numbers as strings.
forEach(); is an array method for looping an element, if you look closely i didn't
create more than one forEach() i use one forEach for all of them (the ones multiple class names i.e 
the table details "td" elements).
 querySelectorALl means it select all the classes or id with the name that matches the element*/
/* ----------------------------------END---------------------------------*/

// declaring our variables

const priceInput = document.querySelector(".tipPriceValue"); // for the user input

// variable for the results:
const tipPercent = document.querySelectorAll(".tipPercent"); // to display the tip
const tipAmount = document.querySelectorAll(".tipAmount"); // to display the tip amount
const tipTotal = document.querySelectorAll(".tipTotal"); // to display the tip total
const special = document.querySelector(".special"); // recommendation tip percent
const specialAMount = document.querySelector(".specialAmount"); // recommendation tip percent
const specialTotal = document.querySelector(".specialTotal"); // recommendation tip percent

// function to clear the price input and the result
function clearTipCalc() {
  priceInput.value = 0; // set the input to 0

  // loop through the tipTotal and the tipAmount, and then apply $0 in 2 decimal places
  for (let i = 0; i < tipAmount.length; i++) {
    tipAmount[i].textContent = `$${(0).toFixed(2)}`;
    tipTotal[i].textContent = `$${(0).toFixed(2)}`;
  }
}

// main function entrance: to process other function
function main() {
  if (priceInput.value === "") {
    alert("Please enter a number");
  } else if (priceInput.value < 0) {
    alert("Please enter a positive number");
  } else if (isNaN(priceInput.value)) {
    alert("Please enter a number not a letter!");
  } else {
    priceCal();
  }
}

// tip price calculator function to display the results
function priceCal() {
  // display the tip
  tipPercent.forEach((percent, i) => {
    const percentValue = (i + 1) * 5;
    percent.textContent = `${percentValue}%`;

    if (percentValue === 15) {
      special.style.color = "green";
      special.style.fontWeight = "bold";

      specialAMount.style.fontWeight = "bold";
      specialAMount.style.color = "green";

      specialTotal.style.fontWeight = "bold";
      specialTotal.style.color = "green";
    }

    // calculate the tip amount
    const price = Number(priceInput.value); // converted to a number
    const getTip = percentValue / 100;
    const tipValue = getTip * price; // holding the tip current value
    tipAmount[i].textContent = `$${tipValue.toFixed(2)}`; // make the value to return only 2 decimal places

    // add the tip amount to price total:
    const getTiptotal = (price + tipValue).toFixed(2);
    tipTotal[i].textContent = `$${getTiptotal}`;
  });
}

priceCal();
