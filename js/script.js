// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function ageLimit() {
  // get user input and declare it as a variable for their age
  let userAge = document.getElementById("age").value;
  // if statement to see if user age is above certain age limits for different movie ratings
  if (userAge >= 17) {
    document.getElementById("user-info").innerHTML = "You can see an R rated movie alone.";
  } else if (userAge >= 13) {
    document.getElementById("user-info").innerHTML = "You can see a PG-13 rated movie alone.";
  } else if (userAge >= 5) {
    document.getElementById("user-info").innerHTML = "You can see a G or PG rated movie alone.";
  } else {
    document.getElementById("user-info").innerHTML = "buddy, your younger than  years old, go play with toys or something.";
  }
  document.getElementById("user-info").innerHTML = "Thanks for verifying your age!";
}