const { Schema, model } = require('../connection');
const patientModel = require('./patientRouter');

const patientSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    contactNo: String,
    age: Number,
    gender: String,
    reports: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('patient', patientSchema);