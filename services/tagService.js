const ApiStatus = require("../handlers/apiStatus")
const TokenService = require("./tokenService");
const db = require('../config/database')

class TagService {

    async createTag(token, name, sortOrder) {
        try {
            const userData = TokenService.validateAccessToken(token)
            const candidate = await db.query("SELECT id FROM tags WHERE name = $1", [name])
            if (candidate.rows.length > 0) {
                throw ApiStatus.badRequest("Тэг с таким именем уже существует");
            }
            const tag = await db.query("INSERT INTO tags (creator, name, sortorder) VALUES ($1,$2,$3) RETURNING id, name, sortorder",[userData.uid, name, sortOrder]);
            return (tag.rows[0])
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

}

module.exports = new TagService();