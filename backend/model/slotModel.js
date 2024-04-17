const { Schema, model } = require('../connection');


const slotSchema = new Schema({
    testedAt: { type: Date },
    type:String,
    date : {type: Date},
    time : {type: String},
    booked: {type : Boolean, default: false},
    doctor: { type: Schema.Types.ObjectId, ref: 'doctor' },
    createdAt: {type:Date,default:Date.now},
});

module.exports = model('slot', slotSchema);