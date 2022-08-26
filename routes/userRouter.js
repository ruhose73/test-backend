const Router = require("express")
const router = new Router
const { body } = require("express-validator");

const UserController = require("../controllers/userController");

//! Далее роуты с авторизацией

//  http://localhost:5000/user
router.get("/user", UserController.getUser);

//  http://localhost:5000/user
router.put("/user",
    body("email").isEmail(),
    body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1,minSymbols: 1, returnScore: false}),
    body("nickname").not().isEmpty(),
    UserController.putUser
);

//  http://localhost:5000/user
router.delete("/user", AuthController.logout);

module.exports = router