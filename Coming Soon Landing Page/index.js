const daysEl = document.querySelector('.days'),
 hoursEl = document.querySelector('.hours'),
 minutesEl = document.querySelector('.minutes'),
 secondsEl = document.querySelector('.seconds'),
 h1 = document.querySelector('h1');

const countTo = "9 Dec 2025";
// function for countdown
const countDown = setInterval(() => {
    const currentDate = new Date();
    const endsDate = new Date(countTo);
    const totalSeconds = (endsDate - currentDate) / 1000; // convert to seconds

    // calculations and conversion 
    const days = Math.floor(totalSeconds/ 3600 / 24);  // gives us number of days with that formula
     const hours = Math.floor(totalSeconds/ 3600) % 24; // convert seconds to hour and return the remainder as the hour
const minutes = Math.floor(totalSeconds / 60) % 60; // get the minutes as the remainder
const seconds = Math.floor(totalSeconds) % 60; // get the seconds only 

daysEl.innerHTML = `${days}`;
hoursEl.innerHTML = `${format(hours)}`;
minutesEl.innerHTML = `${format(minutes)}`;
secondsEl.innerHTML = `${ format(seconds)}`;

if(totalSeconds < 0) {
    clearInterval(countDown);
    h1.textContent = "Product Launch Begins";
}

    });

    /* this function return 01 - 09 when the count is less than 10  instead of a single 
    number like this 1,2,3,...10 we could do: 01,02,03,04 ..... 09 we just add a string 0 next to it 
    I called the format function inside the innerHTML where the mins,hour,seconds where assigned to
    innerHTML
    */
    function format(count){
        return count < 10 ? `0${count}` : count;
    }