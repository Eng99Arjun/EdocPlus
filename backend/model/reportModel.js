const { Schema, model } = require('../connection');


const reportSchema = new Schema({
    patientName: String,
    testName: String,
    DOB: Date,
    Gender: String,
    Contact: String,
    referredBy:String,
    testedAt: { type: Date, default: Date.now },
});

module.exports = model('report', reportSchema);