const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb+srv://todo:list@cluster0.pjlyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {                         
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("connected MongoDB"))
        .catch(err => console.log(err))
}

module.exports = connectDB

