const Router = require("express")
const router = new Router
const AuthRouter = require("./authRouter")
const UserRouter = require("./userRouter")
const TagRouter = require("./tagRouter")


router.use(AuthRouter)
router.use(TagRouter)
router.use(UserRouter)


module.exports = router