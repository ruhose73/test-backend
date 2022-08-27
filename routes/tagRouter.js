const Router = require("express")
const router = new Router
//const { body } = require("express-validator");

const TagController = require("../controllers/tagController");

const AuthMiddleware = require("../middlewares/authMiddleware")

//  http://localhost:5000/tag
router.post("/tag", AuthMiddleware, TagController.createTag);

module.exports = router