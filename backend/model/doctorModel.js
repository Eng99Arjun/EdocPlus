const { Schema, model } = require('../connection');

const doctorSchema= new Schema({
    name:{type:String,required:true},
    specialization:String,
   // patientScore:number,
    gender:String,
    Address:String,
});

module.exports=model('posts',doctorSchema);