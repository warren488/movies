var handler = require("./Test-Services/error")

handler.use(390, "jack", function (err) {
    if (typeof err == 'number') {
        return true
    }
}, "its a number!")
handler.use(500, "EONF", "code", { "sd": "gfgdfgdfg" })
handler.use(200, "test", "message.warren.more", { "sd": "gfgdfgdfg" })
handler.use({
    code: 400,
    message: "test",
    property: "new.property",
    returnMessage: "sdghhsd"
})
// handler.use('sadsud')