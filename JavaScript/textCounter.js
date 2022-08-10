/*  Title: Introduction about me
    Author: Lwin Moe Htet
    Date: 08/08/2022
       */

"use strict";
const messageEle = document.getElementById("floatingTextarea");
const counterEle = document.getElementById("counter");

messageEle.addEventListener("input", function (e) {
  const target = e.target;

  // Get the `maxlength` attribute
  const maxLength = target.getAttribute("maxlength");

  // Count the current number of characters
  const currentLength = target.value.length;

  counterEle.innerHTML = `${currentLength}/${maxLength}`;
});
