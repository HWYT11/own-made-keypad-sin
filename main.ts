let myinput = ""
basic.forever(function () {
    keypad.setKeyPad4(
    DigitalPin.P8,
    DigitalPin.P12,
    DigitalPin.P13,
    DigitalPin.P14,
    DigitalPin.P0,
    DigitalPin.P1,
    DigitalPin.P2,
    DigitalPin.P11
    )
    if (pins.digitalReadPin(DigitalPin.P8) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P12) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P13) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P14) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P0) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P1) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P2) > 0) {
    	
    }
    if (pins.digitalReadPin(DigitalPin.P11) > 0) {
    	
    }
})
basic.forever(function () {
    myinput = keypad.getKeyString()
    basic.showString(myinput)
})
