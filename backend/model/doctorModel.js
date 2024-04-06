const { Schema, model } = require('../connection');

const doctorSchema= new Schema({
    name:{type:String,required:true},
    specialization:String,
    patientScore:{type :  Number, default: 0},
    avatar: {type:String, default: 'doctor_placeholder.png'},
    gender:String,
    city:String,
    address:String,
    contact:String,
    email:String,
    password:String,
    createdAt: {type:Date, default:Date.now}
});

module.exports=model('posts',doctorSchema);