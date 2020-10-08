const mongoose = require('mongoose')

const options = {

    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}


       mongoose.connect("mongodb+srv://codethique:game0fthecode@soflabs.bjat1.mongodb.net/reflectpress?retryWrites=true&w=majority",{
            connectTimeoutMS: 5000,
            useNewUrlParser: true,
            useUnifiedTopology : true
         });



module.exports = mongoose