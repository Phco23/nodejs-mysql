const router = require('express').Router()
const ctrls = require('../controllers/user')
const { verifyAccessToken, isAdmin } = require('../middlewares/verify_token')

router.post('/register', ctrls.register)
router.post('/login', ctrls.login)
router.get('/current',verifyAccessToken, ctrls.getCurrent)
router.post('/refresh-token', ctrls.refreshAccessToken)
router.get('/logout', ctrls.logout)
router.get('/forgot-password', ctrls.forgotPassword)
router.put('/reset-password', ctrls.resetPassword)
router.get('/', verifyAccessToken, isAdmin, ctrls.getUsers)
router.delete('/', verifyAccessToken, isAdmin, ctrls.deleteUser)
router.put('/current', verifyAccessToken, ctrls.updateUser)
router.put('/:uid', verifyAccessToken,isAdmin, ctrls.updateUserByAdmin)

module.exports = router