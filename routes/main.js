
const index = require("./index.js")
const buku = require('./buku')
const users = require('./user')
const toko = require('./toko.routes')

const routes = (app) => {
    app.use("/", index)
    app.use("/buku", buku)
    app.use("/toko", toko)
    app.use("/user", users)
}

module.exports = routes