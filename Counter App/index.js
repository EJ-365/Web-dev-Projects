/*  variable to target the buttons(it's wrapper for the btn,add,reset,subtract), 
count, add,reset and the subtract */

const buttons = document.querySelector('.buttons');
const count = document.querySelector('.count');
// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const subtract = document.querySelector('.subtract');


// // event listener for add
// add.addEventListener('click',function(){
//     count.innerHTML++;
//  }) 

//  // event listener for subtract
//  subtract.addEventListener('click', function(){
//     count.innerHTML--;
//  })

//  // event listener for reset
//  resetCount.addEventListener('click', function(){
// count.innerHTML = 0;
//  });

buttons.addEventListener('click',function(e){
    if(e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor(); // calling the setColor to change the border color
    }

    else if(e.target.classList.contains('subtract')) {
        count.innerHTML--;
        setColor(); // calling the setColor to change the border color
    }

       else if(e.target.classList.contains('reset')) {
        count.innerHTML = 0;
         setColor();
    }
})


// setColor() function for changing the color of the border for the count element
function setColor(){
    if(count.innerHTML > 0) {
        count.style.borderColor = "lightgreen";
    }

    else if(count.innerHTML < 0) {
        count.style.borderColor = 'red'
    }

    else {
        count.style.borderColor = 'white';
    }
}