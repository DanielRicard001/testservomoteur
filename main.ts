input.onButtonPressed(Button.A, function () {
    if (Commutateur % 2 == 0) {
        while (PositionHoriz <= LimiteHorizMax) {
            PositionHoriz += 2
            servos.P0.setAngle(PositionHoriz)
        }
    } else {
        while (PositionVertical <= LimiteVertiMax) {
            PositionVertical += 2
            servos.P1.setAngle(PositionVertical)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    Commutateur += 1
})
input.onButtonPressed(Button.B, function () {
    if (Commutateur % 2 == 0) {
        while (PositionHoriz <= LimiteHorizMax) {
            PositionHoriz += -2
            servos.P0.setAngle(PositionHoriz)
        }
    } else {
        while (PositionVertical <= LimiteVertiMax) {
            PositionVertical += -2
            servos.P1.setAngle(PositionVertical)
        }
    }
})
let PositionVertical = 0
let Commutateur = 0
let PositionHoriz = 0
let LimiteVertiMax = 0
let LimiteHorizMax = 0
let LimiteHorizMin = 0
LimiteHorizMax = 180
let LimiteVertiMin = 0
LimiteVertiMax = 90
PositionHoriz = 0
Commutateur = 0
servos.P0.setRange(LimiteHorizMin, LimiteHorizMax)
servos.P0.setAngle(LimiteHorizMin)
servos.P1.setRange(LimiteVertiMin, LimiteVertiMax)
servos.P0.setAngle(LimiteVertiMin)
