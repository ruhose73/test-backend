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

}

module.exports = new TagController();