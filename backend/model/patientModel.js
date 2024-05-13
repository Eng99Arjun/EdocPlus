const { Schema, model } = require('../connection');


const patientSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    contactNo: String,
    age: Number,
    gender: String,
    address:String,
    avatar: { type: String, default: 'default.jpg' },
    reports: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('patient', patientSchema);