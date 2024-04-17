const { Schema, model } = require('../connection');


const appointmentSchema = new Schema({
    doctor:{ type:Types.ObjectId},
    slot:{type:Types.ObjectId},
    patient:{type:Types.ObjectId}
    
    
});

module.exports = model('appointment', appointmentSchema);