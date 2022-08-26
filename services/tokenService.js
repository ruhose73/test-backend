const jwt = require("jsonwebtoken");


class TokenService {

    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
        //! Не очень понятно почему стрингом, но ТЗ есть ТЗ
        const  expire = (jwt.decode(accessToken).exp).toString();
        return {accessToken, expire}
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    refreshAcessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData
        } catch (e) {
            return null
        }
    }
}

module.exports = new TokenService();