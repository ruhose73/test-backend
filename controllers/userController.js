const UserService = require("../services/userService");
const AuthService = require("../services/authService");
const { validationResult } = require("express-validator");
const ApiStatus = require("../handlers/apiStatus");

class UserController {

    //  http://localhost:5000/user
    async getUser(req, res, next) {
        try {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            const userData = await UserService.getUser(accessToken)
            return res.json(userData);
        } catch (e) {
            return next(ApiStatus.internal(e.message));
        }
    }

    //  http://localhost:5000/user
    async putUser(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Ошибка при валидации"));
            }
            const { email, password, nickname } = req.body;
            const userData = await UserService.putUser(email, password, nickname);
            return res.json(userData);
        } catch (e) {
            return next(ApiStatus.internal(e.message));
        }
    }

    //  http://localhost:5000/user
    async delete(req, res, next) {
        try {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            await UserService.deleteUser(accessToken)
            await AuthService.logout(accessToken);
            return next(ApiStatus.noContent());
        } catch (e) {
            return next(ApiStatus.internal(e.message));
        }
    }
}

module.exports = new UserController();