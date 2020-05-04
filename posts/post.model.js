const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', schema);
