const Router = require("express")
const router = new Router
const { body } = require("express-validator");
const AuthMiddleware = require("../middlewares/authMiddleware")
const UserController = require("../controllers/userController");

//  http://localhost:5000/user
router.get("/user", AuthMiddleware, UserController.getUser);

//  http://localhost:5000/user
router.put("/user",
    body("email").isEmail(),
    body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1,minSymbols: 1, returnScore: false}),
    body("nickname").not().isEmpty(),
    AuthMiddleware,
    UserController.putUser
);

//  http://localhost:5000/user
router.delete("/user", AuthMiddleware, UserController.delete);

//  http://localhost:5000/user/tag
//router.post("/user/tag", AuthMiddleware, UserController.userTags);

//  http://localhost:5000/user/tag/:id
//router.delete("/user/tag/:id", AuthMiddleware, UserController.deleteTag);

//  http://localhost:5000/user/tag/my
router.get("/user/tag/my", AuthMiddleware, UserController.myTags);

module.exports = router