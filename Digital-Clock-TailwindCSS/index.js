function updateClock() {
    const now = new Date();
    let hours = now.getHours();
  
    /* for the moon and the sun to determine if it's 6pm(18) to 6am */
    let isNightTime = false;
  
    if (hours >= 18 || hours < 6) {
      isNightTime = true;
    }
  
    // initially, it's 24 hours clock and i have to convert it to 12 hours clock
  
    if (hours >= 12) {
      document.querySelector(".ampm").textContent = "pm";
    } else {
      document.querySelector(".ampm").textContent = "am";
    }
  
    // converting to 12 hours clock
  
    /* the statement below get the remainder, if the hours is below 12 it return it as it's 
      unchanged if it's above 12 like 14/12 the remainder is 2; that will be 2pm or 2am depending the time
      if the hour is 12; i.e 12/12 = 0; remainder is 0; so it skips 0 and do the next one which is the OR statement, 0 is a falsy value in js */
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0); // convert it to string and double the digit
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
  
    // for the date
    const currentDate = now.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    const timeString = `${hours}:${minutes}:${seconds}`; // organize them in order but using template string literal
    document.getElementById("clock").textContent = timeString; // output it to the clock element
  
    // change the moon and the sun faces
    const moonSun = document.querySelector(".moon-sun"); // the image element
    if (isNightTime) {
      moonSun.src = "images/moon.png";
      moonSun.alt = "moon";
    } else {
      moonSun.src = "images/sun.png";
      moonSun.src = "sun";
    }
  
    document.querySelector(".date").textContent = currentDate;
  }
  
  updateClock(); // call the function
  setInterval(updateClock, 1000); // continue running every 1 secs; note 1000 = 1 milisec same thing as 1 sec
  