input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    Strip_12.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    basic.pause(myStepLength)
    Strip_12.show()
    Strip_12.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    basic.pause(myStepLength)
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.clear()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    Strip_12.clear()
    basic.pause(myStepLength)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(myStepLength)
    Strip_12.clear()
    basic.pause(myStepLength)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(myStepLength)
    Strip_12.clear()
    basic.pause(myStepLength)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(myStepLength)
    Strip_12.clear()
    basic.clearScreen()
    basic.pause(myStepLength)
})
let Strip_12: neopixel.Strip = null
let myStepLength = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
myStepLength = 0
// let Strip_1: neopixel.Strip = null
Strip_12 = neopixel.create(DigitalPin.P5, 5, NeoPixelMode.RGB)
myStepLength = 50
basic.forever(function () {
	
})
