/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya 
 * Created on: Nov 2023
 * This program makes wheels move forward unless there's an object within 10 cm.
*/

// variables 
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Asleep)
basic.pause(1000)

// loop forever
while (true) {
  // setup
  basic.showIcon(IconNames.Asleep)

  if (input.buttonIsPressed(Button.A) == true) {
    basic.clearScreen()
    distanceToObject = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
    basic.showNumber(distanceToObject)
    if (distanceToObject <= 10) {

    }
    basic.showIcon(IconNames.Angry)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
    basic.showIcon(IconNames.Happy)

  }

  if (input.buttonIsPressed(Button.B) == true) {
    // move car forwards and backwards
    basic.showIcon(IconNames.Yes)
    robotbit.StpCarMove(10, 48)
    basic.pause(500)
    robotbit.StpCarMove(-10, 48)
    basic.showIcon(IconNames.Happy)
  }
}
