module.exports = function (io) {
    io.on("connection", async (socket) => {
        console.log("client is connected", socket.id)

        socket.on("disconnect", () => {
            console.log(`user ${socket.id} is disconnected`)
        })
    })
}