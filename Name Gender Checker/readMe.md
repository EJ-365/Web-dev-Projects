# Name Gender Checker

## Overview

The Name Gender Checker is a simple web application that predicts the gender of a name using the Genderize.io API. It allows users to input a name and receive a prediction along with a confidence percentage.

## Features

*   Predicts the gender of a given name.
*   Displays the prediction accuracy as a percentage.
*   Provides a user-friendly interface.

## Technologies Used

*   HTML
*   CSS (Tailwind CSS)
*   JavaScript
*   Genderize.io API

## Setup and Usage

1.  Open `index.html` in your browser.
2.  Enter a name in the input field.
3.  Click the magnifying glass icon or press Enter to submit the name.
4.  The predicted gender and accuracy will be displayed below the input field.

## Code Explanation

*   `index.html`: This file contains the HTML structure for the user interface. It includes the input field, the magnifying glass icon, and the display area for the results. Tailwind CSS is used for styling.
*   `index.js`: This file contains the JavaScript code that handles user input, calls the Genderize.io API, and displays the results.

    *   The `getGender()` function:
        *   Retrieves the name entered by the user.
        *   Validates the input to ensure it's not a number.
        *   Fetches data from the Genderize.io API.
        *   Extracts the gender and probability from the API response.
        *   Displays the results in the `displayResult` element.

## External Resources

*   [Genderize.io API](https://genderize.io/)
*   [Tailwind CSS](https://tailwindcss.com/)