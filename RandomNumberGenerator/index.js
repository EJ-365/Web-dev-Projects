/* create a variable to select the 
content(parent element that holds the information) */

const content = document.querySelector('.content');
const randomNum = document.querySelector('.randomNum');


/* add event listener to the window object; so it will generate random number
when the page loads */
window.addEventListener('load', getRandomNum); // whenever the page loads it will generate random number

content.addEventListener('click', function(e){
    if (e.target.classList.contains('btn')) {
        getRandomNum();
        
    }

    else if (e.target.classList.contains('reset')) {
        randomNum.textContent = 0;
    }
})


function getRandomNum() {
setInterval(()=> {
    randomNum.textContent = Math.floor(Math.random() * 11 ) + 0;
}, 2000);

}

/* Note the difference between setTimeout() and setInterval() 
The difference between setTimeout and setInterval is:

setTimeout runs a function once after a specified delay (in milliseconds).
setTimeout(() => {
 code runs once after the delay
}, 1000); // runs after 1 second

setInterval runs a function repeatedly, with a fixed time delay between each call.
setInterval(() => {
  code runs every 1 second
}, 1000);

Summary:

setTimeout: runs once after the delay.
setInterval: runs repeatedly at the specified interval.
*/
