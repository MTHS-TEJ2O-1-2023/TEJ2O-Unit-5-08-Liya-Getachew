/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya
 * Created on: Nov 2023
 * This program makes wheels move forward unless there's an object within 10 cm.
*/

// variables
let distanceToObject: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Asleep)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    while (true) {
      // find distance from sonar
      basic.clearScreen()
      distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
      )

      // turn if distance < 10
      if (distanceToObject < 10) {
        robotbit.StpCarMove(-10, 48)
        basic.pause(500)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        basic.pause(500)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        basic.pause(500)
        robotbit.StpCarMove(10, 48)
      } else {
        // move forward
        robotbit.StpCarMove(10, 48)
      }
    }
  }
}
