const hoursEl = document.querySelector(".hours"),
  minutesEl = document.querySelector(".minutes"),
  secondsEl = document.querySelector(".seconds"),
  ampmEl = document.querySelector(".ampm");

const clock = setInterval(() => {
  const now = new Date();
  let getHours = now.getHours() % 12; // divide by 12 and get the value of the remainder
  if (getHours === 0) {
    getHours = 12;
  }
  /* the concise way to change the 0 to 12 when it get to midnight
   is now.getHours() % 12 || 12; */ 
   
  const getMinutes = now.getMinutes();
  const getSeconds = now.getSeconds();

  hoursEl.innerHTML = addZero(getHours);
  minutesEl.innerHTML = addZero(getMinutes);
  secondsEl.innerHTML = addZero(getSeconds);
  ampmEl.innerHTML = getAMPM(now.getHours());
});

/* This function add zero 0 to minutes,hour,seconds whenever it's less than 10 to form
this pattern 00,01,02,03,04,05.....10*/
function addZero(zero) {
  if (zero < 10) {
    return `0${zero}`;
  } else {
    return zero;
  }
}

/* function to change it to AM and PM */
function getAMPM(hour) {
  if (hour >= 12) {
    return `pm`;
  } else {
    return `am`;
  }
}
