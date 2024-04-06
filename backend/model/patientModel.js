const { Schema, model } = require('../connection');

const mySchema= new Schema({
    fullName:String,
    email:String,
    password:String,
    contactNo:String,
    age:Number,
    gender: String,
    reports: {type : Array, default: []},
    createdAt: {}
});

module.exports=model('patient',mySchema);