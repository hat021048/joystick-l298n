function Kjør () {
    pins.digitalWritePin(DigitalPin.P13, In1)
    pins.digitalWritePin(DigitalPin.P14, In2)
    pins.digitalWritePin(DigitalPin.P15, In3)
    pins.digitalWritePin(DigitalPin.P16, In4)
    pins.analogWritePin(AnalogPin.P1, EnA)
    pins.analogWritePin(AnalogPin.P2, EnB)
}
let EnB = 0
let EnA = 0
let In4 = 0
let In3 = 0
let In2 = 0
let In1 = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P4) > 520) {
        In1 = 1
        In2 = 0
        EnA = pins.analogReadPin(AnalogPin.P4) - 512
    } else if (pins.analogReadPin(AnalogPin.P4) < 500) {
        In1 = 0
        In2 = 1
        EnA = 512 - pins.analogReadPin(AnalogPin.P4)
    } else {
        EnA = 0
    }
    if (pins.analogReadPin(AnalogPin.P10) > 520) {
        In3 = 1
        In4 = 0
        EnB = pins.analogReadPin(AnalogPin.P10) - 512
    } else if (pins.analogReadPin(AnalogPin.P10) < 500) {
        In3 = 1
        In4 = 0
        EnB = 512 - pins.analogReadPin(AnalogPin.P10)
    } else {
        EnB = 0
    }
    Kjør()
})
