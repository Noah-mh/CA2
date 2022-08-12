/*  Title: Introduction about me
    Author: Lwin Moe Htet
    Date: 08/08/2022
       */


let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "a.m.";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "p.m.";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};

clock();
