const bcryptjs = require("bcryptjs");
const ApiStatus = require("../handlers/apiStatus")
const db = require('../config/database')
const uuid = require("uuid");
const PutUserDTO = require("../dto/putUserDTO");
const UserTagDTO = require("../dto/userTagDTO");
const TokenService = require("./tokenService");


class UserService {

    async getUser(token) {
        try {
            const userData = TokenService.validateAccessToken(token)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            const user = await db.query("SELECT email, nickname FROM users WHERE uid = $1", [userData.uid])
            //const tags = await db.query("SELECT id, name, sortorder FROM tags WHERE creator = $1", [userData.uid])
            //user.rows[0].tags = [tags.rows]
            return (user.rows[0])
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async putUser(email, password, nickname) {
        try {
            const candidate = await db.query("SELECT uid FROM users WHERE email = $1 OR nickname = $2", [email, nickname])
            if (candidate.rows.length > 0) {
                throw ApiStatus.badRequest("Пользователь с таким email или nickname уже существует");
            }
            const userId = uuid.v4();
            const hashedPassword = await bcryptjs.hash(password, 5);
            const user = await db.query("INSERT INTO users (uid, email, password, nickname) VALUES ($1,$2,$3,$4) RETURNING *", [userId, email, hashedPassword, nickname])
            const putUserDTO = new PutUserDTO(user.rows[0]);
            return putUserDTO
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async deleteUser(token) {
        try {
            const userData = TokenService.validateAccessToken(token)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            await db.query("DELETE FROM users WHERE uid = $1", [userData.uid])
            return null
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async myTags(token) {
        try {
            const userData = TokenService.validateAccessToken(token)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            const tagsFullInfo = await db.query("SELECT id,name,sortorder FROM tags WHERE creator = $1", [userData.uid])
            const data = []
            tagsFullInfo.rows.forEach((element) => {
                const tag = new UserTagDTO(element)
                data.push(tag)
            });
            return data
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async deleteTag(token, tagId) {
        try{
            const userData = TokenService.validateAccessToken(token)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            await db.query("DELETE FROM tags WHERE id = $1 AND creator = $2", [tagId, userData.uid])
            const tagsFullInfo = await db.query("SELECT id, name, sortorder FROM tags WHERE id = $1 AND creator = $2 ", [tagId, userData.uid])
            console.log(tagsFullInfo)
            const data = []
            tagsFullInfo.rows.forEach((element) => {
                const tag = new UserTagDTO(element)
                data.push(tag)
            });
            return data
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }
}

module.exports = new UserService();