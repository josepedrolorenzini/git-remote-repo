const Post = require("../model/post");


///create a post

const createPost = async (req, res) => {
    const {name,subject,age,city}  = req.body;

    try {
        const post = await Post.create({name,subject,age,city});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read All Posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            count: posts.length,
            posts,
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//read single post
async function getPost (req, res) {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({
            message: "The post has been successfully retrieved.",
            post,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//update Post
async function updatePost (req, res) {
    const { id } = req.params;
 try {
   const post = await Post.findByIdAndUpdate(
        {_id: id} ,
        {name,subject,age,city}  = req.body,
        {new: true,useFindAndModify:false}    
       );
       console.log(post);
       if (!post) {
       return res.status(404).json({ message: "Post not found" });
       }
       res.status(200).json({
        message:'The post has been successfully updated.',
        post});
 } catch (error) {
        res.status(400).json({ error: error.message });
 }
}


//delete post 

async function deletePost (req, res) {
    const { id } = req.params;
  
    try {
        const post = await Post.findByIdAndDelete({ _id: id });
       
        if(!post){
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "The post has been successfully removed." });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }  
 }





module.exports = {createPost , getAllPosts , updatePost ,deletePost , getPost};