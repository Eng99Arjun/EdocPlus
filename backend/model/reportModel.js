const { Schema, model, Types } = require('../connection');


const reportSchema = new Schema({
    appointment: {type : Types.ObjectId, ref: 'appointment'},
    details: String,
    prescription: String,
    medicalTests: Array,
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('report', reportSchema);
