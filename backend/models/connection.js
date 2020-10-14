const mongoose = require('mongoose')

const OLD_MONGO_URL = `mongodb+srv://codethique:game0fthecode@soflabs.bjat1.mongodb.net/reflectpress?retryWrites=true&w=majority`;
const NEW_MONGO_URL = `mongodb+srv://sofiane:soso123456@cluster0.d2yqa.mongodb.net/reflectpress?retryWrites=true&w=majority`;

mongoose.connect(NEW_MONGO_URL, {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose
