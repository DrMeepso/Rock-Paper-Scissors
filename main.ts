radio.onReceivedNumber(function (receivedNumber) {
    Peer_Outcome = receivedNumber
    My_Outcome = randint(1, 3)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
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
})
let My_Outcome = 0
let Peer_Outcome = 0
radio.setGroup(35)
