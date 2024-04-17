const { Schema, model } = require('../connection');


const slotSchema = new Schema({
    name: String,
    testedAt: { type: Date, default: Date.now },
    dateAt: {type:Date,default:Date.now},
    type:String,
    image:String,
    
    
});

module.exports = model('slot', slotSchema);