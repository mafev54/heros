const mongoose = require('mongoose')

const Schema = mongoose.Schema
const HeroSchema = new Schema ({
    name:{
        type:String,
        require: true,
        maxLength:100
    }
})

const hero = mongoose.model("hero",HeroSchema)
module.exports = hero
