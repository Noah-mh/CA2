/*  Title: Introduction about me
    Author: Lwin Moe Htet
    Date: 08/08/2022
       */

"use strict"; // Use Strict Mode of JavaScript

function showMore(readMore, readMoreButton) {
  document.getElementById(readMore).classList.remove("text-truncate"); // Remove Text-truncate class
  document.getElementById(readMoreButton).setAttribute("value", "Show Less"); // Change Text Display
  document
    .getElementById(readMoreButton)
    .setAttribute("onclick", `showLess("${readMore}", "${readMoreButton}")`); // Change function of button
}

function showLess(readMore, readMoreButton) {
  document.getElementById(readMore).classList.add("text-truncate"); // Add Text-truncate class
  document.getElementById(readMoreButton).setAttribute("value", "Read More"); // Change Text Display
  document
    .getElementById(readMoreButton)
    .setAttribute("onclick", `showMore( "${readMore}", "${readMoreButton}" )`); // Change function of button
}
