const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
    commName: String,
    commText: String,
    newsId: {
        ref: 'News',
        type: mongoose.SchemaTypes.ObjectId
    }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;