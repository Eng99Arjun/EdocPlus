const { Schema, model, Types } = require('../connection');


const appointmentSchema = new Schema({
    doctor: { type: Types.ObjectId, ref: 'doctor'},
    slot: { type: Types.ObjectId, ref: 'slot'},
    patient: { type: Types.ObjectId, ref: 'patient'},
    details: String,
    completed: { type: Boolean, default: false },
    status: { type: String, default: 'booked' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('appointment', appointmentSchema);