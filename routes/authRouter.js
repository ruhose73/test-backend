const Router = require("express")
const router = new Router
const { body } = require("express-validator");

const AuthController = require("../controllers/authController");

//  http://localhost:5000/signin
router.post(
    "/signin",
    body("email").isEmail(),
    body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, returnScore: false}),
    body("nickname").not().isEmpty(),
    AuthController.signin
);

//  http://localhost:5000/login
router.post("/login", AuthController.login);

//  В ТЗ вообще POST но я бы поставил GET
//  http://localhost:5000/logout
router.post("/logout", AuthController.logout);

//  http://localhost:5000/refresh
router.get("/refresh", AuthController.refresh);


module.exports = router