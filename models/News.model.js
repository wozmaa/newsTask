const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    categoriesId: {
        ref: 'Categories',
        type: mongoose.SchemaTypes.ObjectId
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;