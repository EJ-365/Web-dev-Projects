const daysEl = document.querySelector('.days'),
hoursEl = document.querySelector('.hours'),
minutesEl = document.querySelector('.minutes'),
secondsEl = document.querySelector('.seconds'), 
h1 = document.querySelector('h1');

const countTo = "Dec 09 2025";
const count = setInterval(() => {
    const currentDate = new Date();
    const endsDate = new Date(countTo);
    const totalSeconds = (endsDate - currentDate) / 1000 // converting it to seconds 1 milliseconds is equal to 1000 so 3ms === 3s
    const days = Math.floor(totalSeconds/86400) // because: they are 86400 seconds in a day i.e 60s * 60mins * 24 = 86400;to get the day divide 86400 / seconds
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60;
     const seconds = Math.floor(totalSeconds) % 60;

     daysEl.textContent = days;
     hoursEl.textContent = hours;
       minutesEl.textContent = addZeroToSeconds(minutes);
        secondsEl.textContent = addZeroToSeconds(seconds);

        /* when it get to that time of the event*/

        if(totalSeconds < 0) {
            clearInterval(count);
            h1.textContent = "Happy Birthday to you"
        }
})

/* add zero to seconds when it's less than 10 below like 01,02,03 ... 10) */
function addZeroToSeconds(zero) {
    return zero < 10 ? `0${zero}` : zero;
}