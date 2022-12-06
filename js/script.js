// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-08-loops/sw.js", {
    scope: "/ICS2O-unit5-08-loops/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById("num2").value)

  let remainder = num1
  let count = 0

  if ((num1 > 0 || num2 > 0) && num1 > num2) {
    while (remainder > num2 || remainder == num2) {
      remainder -= num2

      count++
    }
    document.getElementById("answer").innerHTML =
      num1 + " ÷ " + num2 + " = " + count + " R " + remainder
  } else if (num1 < num2) {
    document.getElementById("answer").innerHTML =
      "The first number must be larger"
  } else {
    document.getElementById("answer").innerHTML =
      "please enter a POSITIVE integer that is NOT 0"
  }
}
