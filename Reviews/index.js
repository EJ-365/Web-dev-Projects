/* If you want to test js code you can use this file */
function factorial(n) {
  let sum = 1;
  for (let i = n; i > 0; i--) {
    sum *= i;
  }
  return sum;
}

// console.log(factorial(5));

// count backward
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// const numbers = [2,3,4,5,6,7,8];
// const evenNumbers = numbers.filter(num => num % 2 === 0)
// if(evenNumbers.length){
//     console.log("even numbers: " + evenNumbers);
// }
// else {
//     console.log("Odd numbers");
// }