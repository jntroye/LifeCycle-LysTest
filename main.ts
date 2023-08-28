let Strip_1: neopixel.Strip = null
let StepLength = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    Strip_1.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    Strip_1.show()
    basic.pause(StepLength)
    Strip_1.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    Strip_1.show()
    basic.pause(StepLength)
    Strip_1.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Strip_1.show()
    basic.pause(StepLength)
    Strip_1.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    basic.pause(StepLength)
    Strip_1.show()
    Strip_1.setPixelColor(4, neopixel.colors(NeoPixelColors.Green))
    basic.pause(StepLength)
    Strip_1.show()
    basic.pause(StepLength)
    Strip_1.clear()
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
    Strip_1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(StepLength)
    Strip_1.clear()
    basic.pause(StepLength)
    Strip_1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(StepLength)
    Strip_1.clear()
    basic.pause(StepLength)
    Strip_1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(StepLength)
    Strip_1.clear()
    basic.pause(StepLength)
    Strip_1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(StepLength)
    Strip_1.clear()
    basic.clearScreen()
})
basic.forever(function () {
	
})
