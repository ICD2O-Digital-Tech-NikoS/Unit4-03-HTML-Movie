// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function ageLimit() {
  // get user input and declare it as a variable for their age
  let userAge = document.getElementById("age").value;
  // if statement to see if user age is above certain age limits for different movie ratings
  if (userAge >= 100) {
    document.getElementById("user-info").innerHTML = "Bruv you are a dinosaur, good luck getting out of that chair my boi. L R.I.P";
  } 
  else if (userAge >= 17) {
    document.getElementById("user-info").innerHTML = "You can see an R rated movie alone.";
  } 
  else if (userAge >= 13) {
    document.getElementById("user-info").innerHTML = "You can see a PG-13 rated movie alone.";
  } 
  else if (userAge >= 5) {
    document.getElementById("user-info").innerHTML = "You can see a G or PG rated movie alone.";
  } 
  else {
    document.getElementById("user-info").innerHTML = "Buddy, your younger than 5 years old, go play with toys or something.";
  }
 // adds another message at the end of each message.
 document.getElementById("user-info").innerHTML = document.getElementById("user-info").innerHTML + "<br><br>Thanks for verifying your age!";
}
