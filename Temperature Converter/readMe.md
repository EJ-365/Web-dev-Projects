# Temperature Converter

A simple and responsive web application for converting temperatures between Celsius and Fahrenheit. This project is built with plain HTML, Tailwind CSS, and vanilla JavaScript. It provides instant conversion and user-friendly feedback.

![Temperature Converter Screenshot](images/background.png)

## ✨ Features

*   **Two-Way Conversion:** Convert from Celsius to Fahrenheit and vice-versa.
*   **Responsive Design:** The layout adapts smoothly to desktop and mobile devices.
*   **User-Friendly Interface:** Clean and intuitive design for easy use.
*   **Input Validation:** Provides clear error messages if the input is empty or a conversion type isn't selected.
*   **Keyboard Support:** Use the `Enter` key to submit the conversion.
*   **Conditional Messaging:** Displays a fun "Apply Sunscreen" message for warmer temperatures.

## 🛠️ Technologies Used

*   **HTML5:** For the basic structure and content of the web page.
*   **Tailwind CSS:** A utility-first CSS framework for rapid and responsive styling.
*   **JavaScript (ES6+):** For handling the conversion logic, DOM manipulation, and user events.

## 🚀 How to Use

To run this project locally, simply clone the repository or download the files and open the `index.html` file in your favorite web browser.

1.  **Enter a temperature** in the input field.
2.  **Select the conversion direction** using the radio buttons (e.g., Celsius → Fahrenheit).
3.  **Click the "Submit" button** or press the `Enter` key on your keyboard.
4.  The converted temperature will be displayed instantly.

## 📂 File Structure

```
Temperature Converter/
├── 📂 images/
│   └── background.png
├── index.html
├── index.js
└── README.md
```

## 💻 Code Overview

### `index.html`
This file contains the HTML structure of the application. It includes the input field, radio buttons for selecting the conversion type, a submit button, and elements to display the result and messages. It links to Tailwind CSS via a CDN and the local `index.js` script.

### `index.js`
This file contains all the JavaScript logic for the application.
*   It selects the necessary DOM elements.
*   An event listener on the "Submit" button triggers the main conversion function.
*   The function validates user input, performs the correct temperature calculation based on the selected radio button, and updates the DOM to display the result.
*   It also handles the logic for displaying the "Apply Sunscreen" message.
*   An additional event listener allows for form submission by pressing the `Enter` key.