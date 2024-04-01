const mongoose = require('mongoose');
const url="mongodb+srv://arush123:Arush1234@cluster0.fbjmkwy.mongodb.net/EdocPlusDB?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous function-return Promise object
mongoose.connect(url)
//sortcut- thenc
.then((result) => {
    console.log('database connected successfully');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;