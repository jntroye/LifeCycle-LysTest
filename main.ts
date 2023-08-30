input.onButtonPressed(Button.A, function () {
	
})
pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
    radio.sendValue("pling", 0)
    if (input.runningTime() - debounceTimer > 100) {
        control.inBackground(function () {
            debounceTimer=input.runningTime()
            Number_of_hits += 1
            serial.writeValue("x", 0)
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
            Strip_12.show()
        })
    }
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    Strip_12.clear()
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(myStepLength)
    Strip_12.clear()
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(myStepLength)
    Strip_12.clear()
    Strip_12.show()
    basic.pause(myStepLength)
    Strip_12.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(myStepLength)
    Strip_12.clear()
    Strip_12.show()
    basic.pause(myStepLength)
})
let myStepLength = 0
let Strip_12: neopixel.Strip = null
let Number_of_hits = 0
let debounceTimer = 0
music.setTempo(900)
myStepLength = 0
// let Strip_1: neopixel.Strip = null
Strip_12 = neopixel.create(DigitalPin.P5, 5, NeoPixelMode.RGB)
let Strip_Circle = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
myStepLength = 50
Strip_12.clear()
Strip_12.show()
basic.forever(function () {
    serial.writeValue("HitData", Number_of_hits)
    Strip_Circle.setPixelColor(Number_of_hits, neopixel.colors(NeoPixelColors.Blue))
    Strip_Circle.show()
    if (Number_of_hits > 23) {
        Strip_Circle.setPixelColor(Number_of_hits - 24, neopixel.colors(NeoPixelColors.Green))
        Strip_Circle.show()
    }
    if (Number_of_hits > 47) {
        Strip_Circle.setPixelColor(Number_of_hits - 48, neopixel.colors(NeoPixelColors.Violet))
        Strip_Circle.show()
    }
    if (Number_of_hits > 71) {
        Strip_Circle.setPixelColor(Number_of_hits - 72, neopixel.colors(NeoPixelColors.Red))
        Strip_Circle.show()
    }
    if (Number_of_hits > 95) {
        Strip_Circle.setPixelColor(Number_of_hits - 96, neopixel.colors(NeoPixelColors.White))
        Strip_Circle.show()
    }
})
