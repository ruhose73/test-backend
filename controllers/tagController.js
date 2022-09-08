const UserService = require("../services/userService");
const AuthService = require("../services/authService");
const TagService = require("../services/tagService");
//const { validationResult } = require("express-validator");
const ApiStatus = require("../handlers/apiStatus");

class TagController {

    //  http://localhost:5000/tag
    async createTag(req, res, next) {
        try {
            const { name, sortorder } = req.body;
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            const tagData = await TagService.createTag(accessToken, name, sortorder)
            return res.json(tagData);
        } catch (e) {
            return next(ApiStatus.internal(e.message));
        }
    }

    //  http://localhost:5000/tag/:id
    async getTagById(req, res, next) {
        try {
            const tagId = req.params.id;
            const tagData = await TagService.getTagById(tagId)
            return res.json(tagData)
        } catch (e) {
            return next(ApiStatus.internal(e.message));
        }
    }

    //  http://localhost:5000/tag/:id
    async updateTag(req, res, next) {
        try {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            const tagId = req.params.id;
            const updateTag = await TagService.updateTag(tagId, accessToken, { name: req.body.name ? req.body.name : null },
                { sortorder: req.body.sortOrder ? req.body.sortOrder : null }
            );
            return res.json(updateTag);
        } catch (e) {
            return next(ApiStatus.internal(e.message))
        }
    }

    //  http://localhost:5000/tag/:id
    async deleteTag(req, res, next) {
        try {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            const tagId = req.params.id;
            await TagService.deleteTag(tagId, accessToken)
            return next(ApiStatus.noContent());
        } catch (e) {
            return next(ApiStatus.internal(e.message))
        }
    }

    //  http://localhost:5000/tag?sortByOrder&sortByName&offset=10&length=10
    async allTags(req, res, next) {
        try{
        const getTags = await TagService.allTags(
            { sortByOrder: req.query.sortByOrder == '' ? true : false, 
            offset: req.query.offset ? req.query.offset : 0,
            sortByName: req.query.sortByName == '' ? true : false , 
            length: req.query.length ? req.query.length : 10 });
        return res.json(getTags);
        } catch (e) {
            return next(ApiStatus.internal(e.message))
        }
    }
}

module.exports = new TagController();