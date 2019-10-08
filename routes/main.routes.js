
const index = require("./index.routes")
const verifyToken = require('../middlewares/verify_token.middleware')
const buku = require('./buku.routes')
const users = require('./user.routes')
const toko = require('./toko.routes')
const auth = require('./auth.routes')

const routes = (app) => {
    app.use("/", index)
    app.use("/buku", buku)
    app.use("/toko", toko)
    app.use("/user",verifyToken() , users)
    app.use("/auth", auth)
}

module.exports = routes