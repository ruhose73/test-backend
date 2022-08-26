const bcryptjs = require("bcryptjs");
const ApiStatus = require("../handlers/apiStatus")
const db = require('../config/database')
const uuid = require("uuid");
const AuthDTO = require("../dto/authDTO");
const TokenService = require("./tokenService");


class AuthService {

    async signin(email, password, nickname) {
        try {
            const candidate = await db.query("SELECT uid FROM users WHERE email = $1 OR nickname = $2", [email, nickname])
            if (candidate.rows.length > 0) {
                throw ApiStatus.badRequest("Пользователь с таким email или nickname уже существует");
            }
            const userId = uuid.v4();
            const hashedPassword = await bcryptjs.hash(password, 5);
            const user = await db.query("INSERT INTO users (uid, email, password, nickname) VALUES ($1,$2,$3,$4)", [userId, email, hashedPassword, nickname])
            //! сделать селект
            const authDTO = new AuthDTO(user);
            const token = TokenService.generateToken({ ...authDTO });
            return token;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async login(email, password) {
        try {
            const user = await db.query("SELECT * FROM users WHERE email = $1", [email])
            const isPassEquals = await bcryptjs.compare(password, user.rows[0].password);
            if(!isPassEquals) {
                throw ApiStatus.badRequest("Неверные данные");
            }
            const authDTO = new AuthDTO(user);
            const token = TokenService.generateToken({ ...authDTO });
            return token;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async logout(accessToken) {
        try {
            const userData = TokenService.validateAccessToken(accessToken)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            return null;
        } catch(e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async refresh(accessToken) {
        try {
            const userData = TokenService.refreshAcessToken(accessToken)
            return userData
        } catch(e) {
            throw ApiStatus.internal(e.message);
        }
    }
}

module.exports = new AuthService();