input.onButtonPressed(Button.A, function () {
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
})
input.onButtonPressed(Button.B, function () {
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
})
let StepLength = 0
let Strip_1: neopixel.Strip = null
Strip_1 = neopixel.create(DigitalPin.P5, 5, NeoPixelMode.RGB)
Strip_1.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
Strip_1.show()
StepLength = 50
basic.forever(function () {
	
})
