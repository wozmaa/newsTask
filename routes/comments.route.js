const { Router } = require("express");

const { commentsController } = require('../controllers/comments.controller');

const router = Router();

router.post('/comments', commentsController.postComments)
router.delete('/comments/:id', commentsController.deleteCommentsById)
router.get('/comments/:id', commentsController.getCommentById)

module.exports = router