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
            const tags = await db.query("SELECT id, name, sortorder FROM tags WHERE creator = $1", [userData.uid])
            user.rows[0].tags = tags.rows
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
        try {
            const userData = TokenService.validateAccessToken(token)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            await db.query("DELETE FROM tags WHERE id = $1 AND creator = $2", [tagId, userData.uid])
            const tagsFullInfo = await db.query("SELECT id, name, sortorder FROM tags WHERE id = $1 AND creator = $2 ", [tagId, userData.uid])
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

    async userTag(token, tags) {
        try {
            const userData = TokenService.validateAccessToken(token)
            if (!userData) {
                throw ApiStatus.UnauthorizedError();
            }
            const data = []
            const buffer = new ArrayBuffer(16);
            const uint8 = new Uint8Array(buffer);
            for (var i = 0; i < tags.tags.length; i++) {
                const checkTag = await db.query("SELECT id, name, sortorder FROM tags WHERE id = $1", [tags.tags[i]])
                if (!checkTag.rows[0]) {
                    throw ApiStatus.badRequest("Тэг не найден");
                }
                Atomics.store(uint8, i, tags.tags[i])
                const updateTag = await db.query("UPDATE tags SET creator = COALESCE($1, creator) " +
                    "WHERE id = $2 RETURNING id, name, sortorder", [userData.uid, Atomics.load(uint8, i)])
                await db.query("UPDATE usertags SET creatorid = COALESCE($1, creatorid) " +
                    "WHERE tagid = $2", [userData.uid, Atomics.load(uint8, i)])
                const tag = new UserTagDTO(updateTag.rows[0])
                data.push(tag)
            }
            return { "tags": data }
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }
}

module.exports = new UserService();
