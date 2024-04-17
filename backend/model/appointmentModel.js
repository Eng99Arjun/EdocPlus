const { Schema, model } = require('../connection');


const appointmentSchema = new Schema({
    doctor:{ type: Schema.Types.ObjectId},
    slot:{type: Schema.Types.ObjectId},
    patient:{type: Schema.Types.ObjectId}
    
    
});

module.exports = model('appointment', appointmentSchema);