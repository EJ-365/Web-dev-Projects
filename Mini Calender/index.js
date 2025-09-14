/* This is a  Mini Calender Project, it display the month, day of the week, date and the year */


/********************************** PROGRAM START HERE ***************************************************** */
//Global variables
const monthEl = document.querySelector(".month"); // month element
const dayOfWeekEl = document.querySelector(".dayOfWeek"); // Day of element
const dateEL = document.querySelector(".date"); // Date element
const yearEL = document.querySelector(".year"); // Year element


// function for date object
function main() {
  // get the date object
  const now = new Date();
  const month = now.toLocaleDateString(undefined, { month: "long" }); // get the month
  const dayOfWeek = now.toLocaleDateString(undefined, { weekday: "long" }); // for day of the week
  const date = now.getDate(); // get the date
  const year = now.getFullYear();

  // let's connect them to the html
  monthEl.textContent = month;
  dayOfWeek.textContent = dayOfWeek;
  dateEL.textContent = date;
  yearEL.textContent = year;

}

main();

/************************************* PROGRAM ENDS ********************************************** */