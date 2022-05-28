const { Router } = require("express");

const { categoriesController } = require('../controllers/categories.controller');

const router = Router();

router.post('/comments/:id', categoriesController.postCategories)
router.delete('/comments/:id', categoriesController.deleteCategoriesById)
router.get('/comments/:id', categoriesController.getCategories)

module.exports = router