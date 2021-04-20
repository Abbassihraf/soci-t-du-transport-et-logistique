const mongoose = require('mongoose');

const user_Mail =new mongoose.Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String,
    },
    Email:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Message:{
        type:String,
    },
    Date:{
        type:Date,
        default: Date.now
    }
})

const userMail = mongoose.model("userMail", user_Mail);
module.exports= userMail;