input.onPinPressed(TouchPin.P0, function () {
    My_Outcome = 1
    Calculate_Outcome()
})
radio.onReceivedNumber(function (receivedNumber) {
    Peer_Outcome = receivedNumber
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
function Calculate_Outcome () {
    if (Peer_Outcome == My_Outcome) {
        radio.sendString("Tie")
        basic.showString("TIE")
    } else if (My_Outcome == 1 && Peer_Outcome == 2) {
        radio.sendString("Win")
        basic.showString("LOSS")
    } else if (My_Outcome == 1 && Peer_Outcome == 3) {
        radio.sendString("Loss")
        basic.showString("WIN")
    } else if (My_Outcome == 2 && Peer_Outcome == 3) {
        radio.sendString("Win")
        basic.showString("LOSS")
    } else if (My_Outcome == 2 && Peer_Outcome == 1) {
        radio.sendString("Loss")
        basic.showString("WIN")
    } else if (My_Outcome == 3 && Peer_Outcome == 1) {
        radio.sendString("Win")
        basic.showString("LOSS")
    } else if (My_Outcome == 3 && Peer_Outcome == 2) {
        radio.sendString("Loss")
        basic.showString("WIN")
    } else {
    	
    }
    My_Outcome = 0
}
input.onPinPressed(TouchPin.P2, function () {
    My_Outcome = 3
    Calculate_Outcome()
})
input.onPinPressed(TouchPin.P1, function () {
    My_Outcome = 2
    Calculate_Outcome()
})
let Peer_Outcome = 0
let My_Outcome = 0
radio.setGroup(35)
