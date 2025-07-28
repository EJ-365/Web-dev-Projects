const userInput = document.querySelector('input');
const submit = document.querySelector('button');
const displayResult = document.querySelector('.displayResult');
const userAttempt = document.querySelector('.userAttempt');

/* random number 
it generate the random number onced and make a decision
based on the random number being generated */
const random = Math.floor(Math.random() * 10) + 1
let attempt = 0;

// add a click event listener
submit.addEventListener('click', function (e) {
    e.preventDefault(); // prevent the form from auto submitting it

    // convert user input to number
    const userGuess = Number(userInput.value);

    // check if the input is valid
    if (isNaN(userGuess) || userInput.value === "") {
        displayResult.textContent = "Please enter a number";
        return;
    }

    attempt++;

    if (userGuess === random) {
        displayResult.style.color = 'lightgreen';
        displayResult.innerHTML = `You got it right! the answer was ${random}`;
        userAttempt.innerHTML = `${attempt} Attempts`;
        // reload the page after 7 secs
        setTimeout(() => {
            location.reload();
        }, 7000)
}
    // compare user guess with random number
    else if (userGuess < random) {
        displayResult.textContent = "Too low, try again:";
    }

    else {
        displayResult.textContent = "Too high, try again:";
    }
})

userInput.addEventListener('keydown', keyPressed);


function keyPressed(e) {
    if (e.key === 'Enter') {
        submit.click() // programmatically click just like a mouse click
    }
}