// get the variables
const user = document.getElementById("user");
const displayResult = document.querySelector(".displayResult");

async function getGender() {
  try {
    const getValue = user.value;
    if (Number(getValue)) {
      alert("Enter a string");
    }
    const response = await fetch(`https://api.genderize.io?name= ${getValue}`);
    const message = await response.json();
    const percent = (message.probability * 100).toFixed(2);

    displayResult.textContent = `${message.name} is a ${message.gender} with ${percent}% accuracy`;
  } catch (err) {
    console.log(err);
  }
}
