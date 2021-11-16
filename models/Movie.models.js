const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title:String,
    genre:String,
    plot:String,
    cast:{
        types:[Schema.Types.ObjectId],
        ref: "Celebrities"
    },
});

const movieModel = mongoose.model("Movie", MovieSchema) 

module.exports = movieModel
