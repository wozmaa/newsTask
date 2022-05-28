const { Router } = require("express");

const { newsController } = require('../controllers/news.controller');

const router = Router();

router.post('/news', newsController.postNews);
router.delete('/news/:id', newsController.deleteNewsById);
router.patch('/news/:id', newsController.patchNewsById);
router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.getNewsById);
router.get('/news/categories/:id', newsController.getNewsByCategories);

module.exports = router