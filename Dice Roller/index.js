function rollDice() {
    // define the elements
    const numOfDice = document.getElementById("numOfDice").value; // get the value
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    // create two empty array to store the values of the dice rolls and images
    const values = [];
    const images = [];

    /* create a for loop that will loop base on the dice number selected and then generate a random
    number between 1 - 6 for each dice we're rolling: if we row 3 dices it should generate 3 random
     numbers.... like this */

     for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1; // random num from 1 - 6;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" alt="Dice${value}" width="150px" class="m-5">`);
     }

     diceResult.innerHTML = `Dice: ${values.join(',')}`;
     diceImages.innerHTML = images.join(" ");
}