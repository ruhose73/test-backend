const AuthService = require("../services/authService");
const { validationResult } = require("express-validator");
const ApiStatus = require("../handlers/apiStatus");

class AuthController {

    //  http://localhost:5000/signin
    async signin(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Ошибка при валидации"));
            }
            const { email, password, nickname } = req.body;
            const userData = await AuthService.signin(email, password, nickname);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/login
    async login(req, res, next) {
        try {
            const { email, password} = req.body;
            const userData = await AuthService.login(email, password);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/logout
    async logout(req, res, next) {
        try {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            await AuthService.logout(accessToken);
            return next(ApiStatus.noContent());
        } catch (e) {
            next(e);
        }
    }
    
    //  http://localhost:5000/refresh
    async refresh(req, res, next) {
        try {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            const userData = await AuthService.refresh(accessToken);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new AuthController();