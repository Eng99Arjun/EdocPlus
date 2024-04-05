const { Schema, model } = require('../connection');

const patientSchema= new Schema({
 name:String,
 disease:String,

});

module.exports=model('patient',patientSchema);