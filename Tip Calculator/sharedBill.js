/* this program calculate tips, total amount, tip per person and 
total per person based on the user input for price, tip percent and number of people */

// variables declaration

const price = document.querySelector(".sharedBillInputPrice"); // price input
const tip = document.querySelector(".sharedBillTipPercentInput"); // tip input
const numOfPeople = document.querySelector(".sharedBillNumOfPeopleInput"); // number of people input

function sharedBillMain() {
  // input validation function 
  inputValidation(price, tip, numOfPeople); // for input validation
}

// user input validation
function inputValidation(price, tip, numOfPeople) {
  // the parameters are not the same as the ones on the very top: these are in a function scope
  if (price.value === "" || isNaN(price.value)) {
    alert("Please enter a valid price");
  }

  // check if the user enter a 0 for price
  else if (price.value < 0) {
    alert("Enter a positive number for price");
  } else if (tip.value === "" || isNaN(tip.value)) {
    alert("Please enter a valid tip percentage");
    return null;
  } else if (numOfPeople.value === "" || isNaN(numOfPeople.value)) {
    alert("Please enter a valid number of people");
    return null;
  }

  // returned as an object
  return {
    price: Number(price.value),
    tip: Number(tip.value),
    numOfPeople: Number(numOfPeople.value),
  };
}

// function to clear the user input if click on clear
function sharedBillClear() {
  tip.value = `${0}%`;
  numOfPeople.value = 0;
  clearPrice(price);
}

// function for clearing the price only
const clearPrice = (price) => (price.value = `$${(0).toFixed(2)}`);
