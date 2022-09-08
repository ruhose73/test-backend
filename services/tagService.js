const ApiStatus = require("../handlers/apiStatus")
const TokenService = require("./tokenService")
const db = require('../config/database')
const CreatorDTO = require('../dto/creatorDTO')
const TagDTO = require('../dto/tagDTO')
const MetaDTO = require('../dto/metaDTO')

class TagService {

    async createTag(token, name, sortOrder) {
        try {
            const userData = TokenService.validateAccessToken(token)
            const candidate = await db.query("SELECT id FROM tags WHERE name = $1", [name])
            if (candidate.rows.length > 0) {
                throw ApiStatus.badRequest("Тэг с таким именем уже существует");
            }
            const tag = await db.query("INSERT INTO tags (creator, name, sortorder) VALUES ($1,$2,$3) RETURNING id, name, sortorder",
                [userData.uid, name, sortOrder]);
            await db.query("INSERT INTO usertags (creatorid, tagid) VALUES ($1,$2)", [userData.uid, tag.rows[0].id]);
            return (tag.rows[0])
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async getTagById(tagId) {
        try {
            const tagFullInfo = await db.query("SELECT tags.id, tags.creator, tags.name, tags.sortOrder, users.nickname, users.uid " +
                "FROM tags LEFT OUTER JOIN users on tags.creator = users.uid WHERE tags.id = $1", [tagId])
            const creator = new CreatorDTO(tagFullInfo.rows[0])
            const tag = new TagDTO(tagFullInfo.rows[0])
            return ({ creator, ...tag })
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async updateTag(tagId, token, name, sortorder) {
        try {
            const userData = TokenService.validateAccessToken(token)
            await db.query("UPDATE tags SET name = COALESCE($1, name), sortorder = COALESCE($2, sortorder) " +
                "WHERE id = $3 AND creator = $4", [name.name, sortorder.sortorder, tagId, userData.uid])
            const tagFullInfo = await db.query("SELECT tags.id, tags.creator, tags.name, tags.sortOrder, users.nickname, users.uid " +
                "FROM tags LEFT OUTER JOIN users on tags.creator = users.uid WHERE tags.id = $1", [tagId])
            const creator = new CreatorDTO(tagFullInfo.rows[0])
            const tag = new TagDTO(tagFullInfo.rows[0])
            return ({ creator, ...tag })
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async deleteTag(tagId, token) {
        try {
            const userData = TokenService.validateAccessToken(token)
            //! в pg удаляется каскадом по дефолту (насколько я помню)
            await db.query("DELETE FROM tags WHERE id = $1 AND creator = $2", [tagId, userData.uid])
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

    async allTags(inputParams) {
        //Я решил не изобретать пагинацию и сортировку и сделал ее средствами БД
        try {
            const tagsFullInfo = await db.query(`SELECT tags.id, tags.creator, tags.name, tags.sortorder, users.nickname, users.uid ` +
                `FROM tags LEFT OUTER JOIN users on tags.creator = users.uid` +
                ` ORDER BY (${inputParams.sortByOrder == true ? 'sortorder' : inputParams.sortByName == true ? 'name' : 'id'}) LIMIT $1 OFFSET $2`,
                [inputParams.length, inputParams.offset]);
            const data = [];
            tagsFullInfo.rows.forEach((element) => {
                const creator = new CreatorDTO(element)
                const tag = new TagDTO(element)
                data.push({ creator, ...tag })
            });
            const countTags = await db.query(`SELECT COUNT(*) FROM tags`)
            const meta = new MetaDTO({ offset: inputParams.offset, length: inputParams.length, quantity: countTags.rows[0].count })
            return ({ data, meta })
        } catch (e) {
            throw ApiStatus.internal(e.message);
        }
    }

}

module.exports = new TagService();