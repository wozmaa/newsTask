const req = require('express/lib/request')
const res = require('express/lib/response')
const Comments = require('../models/Comments.model')

module.exports.commentsController = {
    postComments:(req, res) => {
        Comments.create({
            commName: req.body.commName,
            commText: req.body.commText,
            newsId: req.body.newsId
        }).then((data) => {
            res.json(data)
        })
    },
    deleteCommentsById:(req, res) => {
        Comments.findByIdAndRemove(req.params.id).then(() => {
            res.json(data)
        })
    },
    getCommentById:(req, res) => {
        Comments.find({newsId: req.params.id}).then((data) => {
            res.json(data)
        })
    }
}