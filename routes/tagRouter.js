const Router = require("express")
const router = new Router
//const { body } = require("express-validator");

const TagController = require("../controllers/tagController");

const AuthMiddleware = require("../middlewares/authMiddleware")

//  http://localhost:5000/tag
router.post("/tag", AuthMiddleware, TagController.createTag);

//  http://localhost:5000/tag/:id
router.get("/tag/:id", AuthMiddleware, TagController.getTagById)

//  http://localhost:5000/tag/:id
router.put("/tag/:id", AuthMiddleware, TagController.updateTag)

//  http://localhost:5000/tag/:id
router.delete("/tag/:id", AuthMiddleware, TagController.deleteTag)

//  http://localhost:5000/tag
router.get("/tag", AuthMiddleware, TagController.allTags);

module.exports = router