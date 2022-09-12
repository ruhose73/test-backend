const jwt = require("jsonwebtoken");
const ApiStatus = require("../handlers/apiStatus")

class TokenService {

    generateToken(payload) {
        try {
            const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
            const expire = (jwt.decode(token).exp).toString();
            return { token, expire }
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }
}

module.exports = new TokenService();
