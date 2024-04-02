const { Schema, model } = require('../connection');

const doctorSchema= new Schema({
    name:{type:String,required:true},
    specilization:String,
   // patientScore:number,
    gender:{male,female},
    Address:string
});

module.exports=model('posts',doctorSchema);