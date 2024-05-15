const { Schema, model, Types } = require('../connection');


const feedbackSchema = new Schema({
    Username: { type: String, required: true },
    Email: { type: String, required: true },
    Message: { type: String, required: true },
    rating: { type: Number, required: true }
});

module.exports = model('feedback', feedbackSchema);