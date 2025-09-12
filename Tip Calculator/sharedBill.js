/* this program calculate tips, total amount, tip per person and 
total per person based on the user input for price, tip percent and number of people 
the calculate and clea buttons are set to onclick attribute in the html file*/

// variables declaration

const price = document.querySelector(".sharedBillInputPrice"); // price input
const tip = document.querySelector(".sharedBillTipPercentInput"); // tip input
const numOfPeople = document.querySelector(".sharedBillNumOfPeopleInput"); // number of people input

// results variables
const tipValue = document.querySelector(".Sb-tipValue");
const totalAmountValue = document.querySelector(".sb-totalAmountValue");
const tipPerPersonValue = document.querySelector(".sb-tipPerPersonValue");
const totalPerPersonValue = document.querySelector(
  ".sb-totalAmountPerPersonValue"
);

// Tip per person and tip pe total element
const tipPerPersonEl = document.querySelector('.tipPerPersonEl');
const totalAmountPerPersonEl = document.querySelector('.totalAmountPerPersonEl');

/***********************************GLOBAL VARIABLE ENDS HERE *********************** */

function sharedBillMain() {
  // the main function that process the whole thing
  // input validation function
  const validated = inputValidation(price, tip, numOfPeople); // for input validation
  if (validated) {
    calcBillInput(); //  calc bill function call
  }
}

// user input validation
function inputValidation(price, tip, numOfPeople) {
  if (price.value === "" || isNaN(price.value)) {
    alert("Please enter a valid price");
    return null;
  }
  // check if the user enters a 0 or negative value for price
  if (Number(price.value) <= 0) {
    alert("Enter a positive number for price");
    return null;
  }
  if (tip.value === "" || isNaN(tip.value)) {
    alert("Please enter a valid tip percentage");
    return null;
  }
  // 0 or negative validation for tip
  if (Number(tip.value) <= 0) {
    alert("Tip can't be 0 or negative");
    return null;
  }
  if (numOfPeople.value === "" || isNaN(numOfPeople.value)) {
    alert("Please enter a valid number of people");
    return null;
  }
  // 0 or negative validation for number of people
  if (Number(numOfPeople.value) <= 0) {
    alert("Number of people can't be zero OR negative");
    return null;
  }
  return {
    price: Number(price.value),
    tip: Number(tip.value),
    numOfPeople: Number(numOfPeople.value),
  };
}

// function to calculate the price, tip and number of people
function calcBillInput() {
  const priceInput = Number(price.value); // convert the input value to a number
  const tipInput = Number(tip.value); // convert the input value to a number
  const numOfPeopleInput = Number(numOfPeople.value); // convert the input value to a number

  // calculations
  const percentTip = tipInput / 100;
  const tipAmount = percentTip * priceInput; // holding the tip amount
  tipValue.textContent = `$${tipAmount.toFixed(2)}`;

  // tip per person
  const tipPerPerson = tipAmount / numOfPeopleInput;
  tipPerPersonValue.textContent = `$${tipPerPerson.toFixed(2)}`;

  // total amount
  const totalAmount = tipAmount + priceInput;
  totalAmountValue.textContent = `$${totalAmount.toFixed(2)}`;

  if (numOfPeopleInput === 1) {
    tipPerPersonValue.style.display = "none";
    totalPerPersonValue.style.display = "none";
    tipPerPersonEl.style.display = "none";
    totalAmountPerPersonEl.style.display = "none";
  } else {
    tipPerPersonValue.style.display = "inline";
    totalPerPersonValue.style.display = "inline";
    // tip per person
    const tipPerPerson = tipAmount / numOfPeopleInput;
    tipPerPersonValue.textContent = `$${tipPerPerson.toFixed(2)}`;
    // total per person
    const totalPerPerson = totalAmount / numOfPeopleInput;
    totalPerPersonValue.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}

// function to clear the user input if click on clear
function sharedBillClear() {
  tip.value = "";
tipValue.textContent = `$${(0).toFixed(2)}`;
tipPerPersonValue.textContent = `$${(0).toFixed(2)}`;
totalAmountValue.textContent = `$${(0).toFixed(2)}`;
totalPerPersonValue.textContent = `$${(0).toFixed(2)}`;
  numOfPeople.value = "";
  clearPrice(price);
}

// function for clearing the price only
const clearPrice = (price) => (price.value = "");
