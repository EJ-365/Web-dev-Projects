/* create a variable to select the 
content(parent element that holds the information) */

const content = document.querySelector('.content');
const randomNum = document.querySelector('.randomNum');


/* add event listener to the window object; so it will generate random number
when the page loads */
window.addEventListener('load', getRandomNum);

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


