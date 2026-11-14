# 🕒 Digital Clock

A responsive Digital Clock built using **HTML, CSS, and Vanilla JavaScript**.

The application displays the current system time and date, with interactive controls for switching between 12-hour and 24-hour formats and dark/light themes.

## ✨ Features

- Display current hours, minutes, and seconds.
- Automatically update time every second.
- Display AM/PM indicator.
- Support 12-hour and 24-hour formats.
- Display current weekday and date.
- Toggle between dark and light themes.
- Responsive user interface.

## 🛠️ Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## 📚 JavaScript Concepts Practiced

- DOM manipulation
- JavaScript `Date` object
- `getHours()`, `getMinutes()`, `getSeconds()`
- `toLocaleDateString()`
- `setInterval()`
- `clearInterval()`
- Callback functions
- `addEventListener()`
- Conditional statements
- Boolean state management
- String formatting using `padStart()`
- Dynamic CSS manipulation
- `classList.toggle()`

## 🧠 Engineering Judgments

- Initialize the clock immediately before starting the interval.
- Use the system clock as the source of truth.
- Choose `setInterval()` for recurring updates.
- Avoid using blocking infinite loops.
- Handle midnight and noon correctly.
- Separate time retrieval, formatting, and display responsibilities.
- Maintain time-format preferences through application state.
- Keep presentation and business logic separate.

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder.

3. Open `index.html` in your browser.

No additional dependencies or build tools are required.

## 🎯 Learning Objective

This project focuses on understanding JavaScript date and time handling, recurring execution, DOM updates, event-driven programming, and application state management.

## 🔗 Live Demo

[View Live Project](https://digital-clock-nczs.onrender.com/)

## 👨‍💻 Author

Developed as part of my Vanilla JavaScript learning journey.
