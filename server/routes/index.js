const userRouter = require('./user')
const {notFound, errHandler} = require('../middlewares/error_handler')

const initRoutes = (app) => {
    app.use('/api/user', userRouter)

    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoutes