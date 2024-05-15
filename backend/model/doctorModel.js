const { Schema, model } = require('../connection');


const doctorSchema = new Schema({
    name: { type: String, required: true },
    specialization: String,
    patientScore: { type: Number, default: 0 },
    avatar: { type: String, default: 'doctor_placeholder.png' },
    gender: String,
    city: String,
    address: String,
    contact: String,
    email: String,
    password: String,
    degree: String,
    training: String,
<<<<<<< HEAD
    about:String,
    fees:String,
    role:{type:String, default:"doctor"},
=======
    about: String,
    fees: String,
    meetingLink: { type: String, default: 'https://meet.google.com/yun-rcuf-fhi' },
>>>>>>> 4ef0f3725b27f6c46e563679638f5c35ee58ba9d
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('doctor', doctorSchema);    