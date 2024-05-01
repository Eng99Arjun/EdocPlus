const { Schema, model, Types } = require('../connection');


const reportSchema = new Schema({
    patient: String,
    testName: String,
    DOB: Date,
    Gender: String,
    Contact: String,
    referredBy:String,
    testedAt: { type: Date, default: Date.now },
});

module.exports = model('report', reportSchema);