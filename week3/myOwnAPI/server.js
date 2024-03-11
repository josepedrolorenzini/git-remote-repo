require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/posts", require("./src/route/post"))


mongoose.connect(process.env.MONGODB_URI)
.then(() =>{ 
    app.listen(process.env.PORT , ()   =>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.error(`Error connecting to MongoDB: ${error.message}`);
});









/*

mongoose.connect(process.env.MONGODB_URI)
.then( ()   => { 

    // app.get('/', (req,res) => {
        
    //     res.send('Hello World');
    // });

    //get all posts
    app.get('/', getAllPosts);

    app.listen(process.env.PORT , ()  => { 
        console.log('Server is running on port http://localhost:'+process.env.PORT);
    })
})
.catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message)
})


//console.log(app);




// db.students.insertMany([{name:'jose',subject:'javascript',age:42,city:'sydney'}, {name:"jared", subject:"mongodb",age:25,city:'melbourne'}])

// good link tutorial 
//https://medium.com/featurepreneur/connect-mongodb-database-to-express-server-step-by-step-53e548bb4967
*/