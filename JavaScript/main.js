/*  Title: Introduction about me
    Author: Lwin Moe Htet
    Date: 08/08/2022
       */
"use strict"; // Use Strict Mode of JavaScript

window.onscroll = function () {
  ReturnUp();
};

function OnLoad() {
  document.getElementById("Return").style.visibility = "collapse"; // Hides Return Element
  document.getElementById("Return").style.opacity = "0"; // Make Return Element hidden using opacity
}

// When Return Element is clicked
function ReturnUp() {
  // winScroll = number of pixels an element's content is scrolled vertically.
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // height = minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar
  // - it includes the element’s padding, but not its border, margin or horizontal scrollbar (if present)
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // Check how far user has scrolled down
  var scrolled = (winScroll / height) * 100;
  if (scrolled > 1) {
    document.getElementById("Return").style.visibility = "visible"; // if scrolled down then show Return element
    document.getElementById("Return").style.opacity = "1";
  } else {
    document.getElementById("Return").style.visibility = "collapse"; // else hide Return element
    document.getElementById("Return").style.opacity = "0";
  }
}
