datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "temprature",
    "light"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"temprature",
"light"
)
loops.everyInterval(60000, function () {
    if (logging) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("temprature", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
        basic.clearScreen()
    }
})
