const jwt = require('jsonwebtoken')

module.exports = () => {
    return (req, res, next) => {
        let token = req.header('Authorization')
        let unauthentificated = {
            status: 'unauthentificated',
            message: 'Invalid header token'
        }

        if(token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
                if(err) return res.status(401).json(unauthentificated)

                return next()
            })
        } else {
            return res.status(401).json(unauthentificated)
        }
    }
}