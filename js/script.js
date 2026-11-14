// ===================================
// 1. DOM ELEMENTS
// ===================================

const clock = document.querySelector("#clock");
const period = document.querySelector("#period");
const currentDate = document.querySelector("#date");

const formatToggle = document.querySelector("#formatToggle");
const themeToggle = document.querySelector("#themeToggle");


// ===================================
// 2. APPLICATION STATE
// ===================================

// true = 12-hour format
// false = 24-hour format

let is12HourFormat = true;


// ===================================
// 3. DISPLAY CLOCK
// ===================================

function displayClock() {

  // Get current date and time
  const date = new Date();

  // Extract hours, minutes and seconds
  let hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  // Determine AM or PM
  const ampm = hr >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (is12HourFormat) {

      hr = hr % 12;

      // Convert midnight (0) to 12
      if (hr === 0) {
          hr = 12;
      }

  }

  // Add leading zeros
  const formattedHr = String(hr).padStart(2, "0");
  const formattedMin = String(min).padStart(2, "0");
  const formattedSec = String(sec).padStart(2, "0");

  // Display time
  clock.textContent = `${formattedHr}:${formattedMin}:${formattedSec}`;

  // Display AM/PM only in 12-hour format
  period.textContent = is12HourFormat ? ampm : "";

  // Display current date
  currentDate.textContent = date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
  });

}


// ===================================
// 4. INITIALIZE CLOCK
// ===================================

// Display time immediately
displayClock();

// Update time every second
const timerId = setInterval(displayClock, 1000);


// ===================================
// 5. 12 / 24 HOUR FORMAT TOGGLE
// ===================================

formatToggle.addEventListener("click", function () {

  is12HourFormat = !is12HourFormat;

  // Update button text
  formatToggle.textContent = is12HourFormat
      ? "Switch to 24-hour"
      : "Switch to 12-hour";

  // Immediately refresh the clock
  displayClock();

});


// ===================================
// 6. DARK / LIGHT MODE TOGGLE
// ===================================

themeToggle.addEventListener("click", function () {

  const isDarkMode = document.body.classList.toggle("dark-mode");

  if (isDarkMode) {

    // Dark mode
    document.body.style.backgroundColor = "#0d1117";
    document.body.style.color = "#ffffff";

    // document.querySelector(".clock-card").style.backgroundColor = "#0d1117";

    themeToggle.textContent = "Light Mode";

  } else {

    // Light mode
    document.body.style.backgroundColor = "#f1f5f9";
    document.body.style.color = "#1e293b";

    // document.querySelector(".clock-card").style.backgroundColor = "#ffffff";

    themeToggle.textContent = "Dark Mode";

  }

});
