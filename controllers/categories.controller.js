const Categories = require('../models/Categories.model')

module.exports.categoriesController = {
    postCategories:(req, res) => {
        Categories.create({
            categoriesName: req.body.categoriesName
        }).then((data) => {
            res.json(data)
        })
    },
    deleteCategoriesById:(req, res) => {
        Categories.findByIdAndRemove(req.params.id).then(() => {
            res.json('категория удалена')
        })
    },
    getCategories:(req, res) => {
        Categories.find().then((data) => {
            res.json(data)
        })
    }
}