const mongoose = require("mongoose")
////schema 

const postSchema = new mongoose.Schema({
    name:    { type: String, required: true },
    subject: { type: String, required: true },
    age:     { type: Number, required: true },
    city:    { type: String, required: true },
});


//collections
const Post = mongoose.model("schools", postSchema);


module.exports = Post;