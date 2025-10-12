// for the weather elements
const cityDisplay = document.querySelector(".cityDisplay"); // shows the city and state name
const tempDisplay = document.querySelector(".tempDisplay"); // shows the temperature in Fahrenheit
const descDisplay = document.querySelector(".descDisplay"); // shows the description
const weatherEmoji = document.querySelector(".weatherEmoji"); // shows the description
const symbol = document.querySelector(".symbol"); // shows the F and the degree symbol

function updateClock() {
  const now = new Date();
  let hours = now.getHours();

  /* for the moon and the sun to determine if it's 6pm(18) to 6am */
  // let isNightTime = false;

  // if (hours >= 18 || hours < 6) {
  //   isNightTime = true;
  // }

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
  // const moonSun = document.querySelector(".moon-sun"); // the image element
  // if (isNightTime) {
  //   moonSun.src = "images/moon.png";
  //   moonSun.alt = "moon";
  // } else {
  //   moonSun.src = "images/sun.png";
  //   moonSun.alt = "sun";
  // }

  document.querySelector(".date").textContent = currentDate;
}

updateClock(); // call the function
setInterval(updateClock, 1000); // continue running every 1 secs; note 1000 = 1 milisec same thing as 1 sec



/******************Weather functionality ********************** */

/* 
  reverse geolocation for Openweather: http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}

 getCoordinate will be use to get the weather information and to display the city and state name
 the getCoordinate returns the lat and lon and then i will use reverse  geolocation to convert it, to 
 get the city name and state for weather info

 */

function getCoordinate() {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude, // returns the latitude
          lon: position.coords.longitude, // returns the longitude
        });
      },
      () => {
        cityDisplay.textContent = `Location Not Found`;
        cityDisplay.classList.add('location-not-found');
        cityDisplay.style.color = "red";
        cityDisplay.style.fontSize = "18px";
        tempDisplay.textContent = "";
        descDisplay.textContent = "";
        symbol.textContent = "";
        weatherEmoji.textContent = "";
        reject("Location Not Found"); // Reject with a simple message if location is not available
      }
    );
  });
}

// getlocation async to return the promise
// showCoordinates() is the main function where all other function is being called
async function showCoordinates(){
  try {
    const { lat, lon } = await getCoordinate();
    getLocation(lat, lon);
    // Call once immediately, then update periodically.
    weatherInfo(lat, lon);
    // Update every 60 seconds (60000 ms). Use an arrow function to avoid calling immediately.
    setInterval(() => weatherInfo(lat, lon), 60000);
  } catch (err) {
    console.error(err);
  }
}

// this function will take our lat and lon and then gives us the city name and state
async function getLocation(lat, lon) {
  try {
    const apiKey = "13a1a5254d1d6319b1a2bd49fae225a1";
    // Use HTTPS and limit=1. The reverse geocoding API returns an array.
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

    const response = await fetch(url); // fetching the geolocation api
    const data = await response.json(); // put the response in JSON format
    if (data && data.length) {
      cityDisplay.textContent = `${data[0].name}, ${data[0].state}`; // shows the city name and state
    } else {
      console.log("City name not found");
    }
  } catch (err) {
    console.error(err); // catch any error if exits
  }
}

/*  Weather information: shows weather details and other info 
apiKey: "login to openWeather to see"

url: https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}
*/
async function weatherInfo(lat, lon){
  try {
    const apiKey = "13a1a5254d1d6319b1a2bd49fae225a1";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const tempKelvin = data.main.temp; // temperature in kelvin

    const toFahrenheit = ((tempKelvin - 273.15) * 9) / 5 + 32; // kelvin to fahrenheit
    const getFahrenheit = Math.ceil(toFahrenheit); // remove decimals and round up

    symbol.textContent = "°F"; // show this "F" next to the temperature
    tempDisplay.innerHTML = getFahrenheit; // display the temperature on the screen

    // for description
    const getDesc = data.weather[0].description; // get the weather description
    descDisplay.textContent = getDesc; // display it

    // now lets change the emoji
    // d and n at the end of the cases means day and night
    const iconId = data.weather[0].icon; // holding the icon
    let emoji = ""; // to manipulate the emoji's

    switch (iconId) {
      case "01d": // Clear Sky for day
        emoji = "☀️";
        break;

      case "01n": // Clear Sky for night
        emoji = "🌙";
        break;

      case "02d":
      case "02n": // Few Clouds
        emoji = "🌤️";
        break;
      case "03d":
      case "03n": // Scattered Clouds
      case "04d":
      case "04n": // Broken/Overcast Clouds
        emoji = "☁️";
        break;
      case "09d":
      case "09n": // Shower Rain
        emoji = "🌧️";
        break;
      case "10d":
      case "10n": // Rain
        emoji = "☔";
        break;
      case "11d":
      case "11n": // Thunderstorm
        emoji = "⛈️";
        break;
      case "13d":
      case "13n": // Snow
        emoji = "❄️";
        break;
      case "50d":
      case "50n": // Mist/Fog/Atmosphere
        emoji = "🌫️";
        break;
      default:
        emoji = "❓";
    }

    weatherEmoji.textContent = emoji;
  } catch (err) {
    console.error(err);
  }
}
showCoordinates(); // the main function