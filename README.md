# Event Onboarding Portal

A responsive event registration interface built with **React** and **CSS**.
This project collects participant and payment details through a structured multi-section form and includes dynamic event detail updates, client-side validation, and responsive layout behavior.

## Features

* **Multi-section registration flow**

  * Event information
  * Participant information
  * Payment information
  * Footer section
* **Controlled form inputs**

  * Built using React state management
* **Client-side validation**

  * Required field checks
  * Phone number length validation
  * Required radio selection validation
  * Conditional validation for “Other” platform input
* **Input sanitization**

  * Name field restricts invalid characters
  * Phone number accepts only digits and limits length
  * Ticket count accepts only numeric input
  * Email input removes spaces and converts text to lowercase
* **Dynamic event preview**

  * Updates displayed event name and date based on form input
* **Responsive layout**

  * Uses Flexbox, CSS Grid, and media queries for improved small-screen usability

## Tech Stack

* **React**
* **JavaScript (ES6+)**
* **CSS**
* **dayjs**

## Project Structure

* `App.js` – Renders the main page component
* `Page.js` – Handles form state, validation, submission logic, and layout composition
* `About.js` – Displays event information and dynamically updates selected values
* `Participant.js` – Collects participant details and source-of-discovery inputs
* `Payment.js` – Handles ticket count, payment method, confirmation, and submission
* `Footer.js` – Displays branding and social footer content
* `index.js` – Entry point
* `index.css` – Global styles and responsive layout rules

## Current Functionality

### Participant Information

* Full name input
* Date of birth input
* Gender selection
* Phone number input
* Email input
* Source-of-discovery radio options with conditional “Other” input

### Payment Information

* Number of tickets input
* Payment method selection
* Confirmation section
* Signature input
* Date signed input
* Submit button enabled only after confirmation

### Validation and Interaction

* Displays inline error messages after submission attempt
* Prevents invalid or incomplete form submission
* Resets form values after successful submission
* Shows alert on successful form submission

## Author

**Surya R M**
