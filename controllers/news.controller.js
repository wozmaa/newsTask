const News = require('../models/News.model')

module.exports.newsController = {
    postNews:(req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            categoriesId: req.body.categoriesId
        }).then((data) => {
            res.json(data)
        })
    },
    deleteNewsById:(req, res) => {
        News.findByIdAndRemove(req.params.id).then(() => {
            res.json('новость удалена')
        })
    },
    patchNewsById:(req, res) => {
        News.findByIdAndUpdate(req.params.id).then(() => {
            res.json('новость изменена')
        })
    },
    getNews:(req, res) => {
        News.find().then((data) => {
            res.json(data)
        })
    },
    getNewsById:(req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getNewsByCategories:(req, res) => {
        News.find({categoriesId: req.params.id}).then((data) => {
            res.json(data)
        })
    }
}