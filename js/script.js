// Copyright (c) 2020 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-01-Storyboard/sw.js", {
    scope: "/ICS20-Unit3-01-Storyboard/",
  })
}

/**
 * This function displays an alert.
 */
function calculateClicked() {
  //input
  const baseOneOfTrapezoid = parseInt(
    document.getElementById("base-one-of-trapezoid").value
  )
  const baseTwoOfTrapezoid = parseInt(
    document.getElementById("base-two-of-trapezoid").value
  )
  const heightOfTrapezoid = parseInt(
    document.getElementById("height-of-trapezoid").value
  )

  //process
  const areaOfTrapezoid =
    baseOneOfTrapezoid + (baseTwoOfTrapezoid * heightOfTrapezoid) / 2

  //output
  document.getElementById("area").innerHTML =
    "The area of this Trapezoid is " + areaOfTrapezoid.toFixed(2) + " cm²."
}
