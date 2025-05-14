# Counter App

A simple interactive counter application demonstrating JavaScript event handling and DOM manipulation.

## Features

- Increment counter value
- Decrement counter value
- Reset counter to zero
- Dynamic border color changes based on counter value
  - Green: Positive numbers
  - Red: Negative numbers
  - White: Zero

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.6
- Bootstrap Icons

## Implementation Details

- Event delegation pattern used for button click handling
- Single event listener attached to button container
- Dynamic styling updates based on counter state
- Responsive design using Bootstrap

## Project Structure

```plaintext
Counter App/
│
├── index.html    # Main HTML structure
├── index.css     # Styling
├── index.js      # JavaScript functionality
└── README.md     # Project documentation
```

## Usage

1. Click the "Add" button to increment the counter
2. Click the "Subtract" button to decrement the counter
3. Click the "Reset" button to set the counter back to 0

## Setup

Simply open `index.html` in a web browser to run the application. No build process or installation required.

## Notes

- Icons are clickable through class-based event handling
- Border color updates automatically with counter value change
