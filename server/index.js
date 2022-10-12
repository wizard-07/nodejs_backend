// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// require("dotenv").config();

// app.use(cors());
// app.use(express.json());
 
// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology : true,
// }).then(()=>{
//     console.log("db connection successful");
// })
// .catch((err)=>{
//     console.log(err.message);
// });

// const server = app.listen(process.env.PORT , ()=>{
//     console.log(`server started on port ${process.env.PORT }`);
// })

const express = require("express")
const path = require("path")
const app  = express()
const port = 3000;

// const path = path.join(__dirname,"../public/demo");
const pathstatic ="D:/deverse/public/demo";
//app.use(express.static(pathstatic));


//setting the template engine
const templatePath = path.join(__dirname,"../template");
app.set("views",templatePath);
app.set("view engine","hbs");

app.get("",(req,res)=>{          //always run from the root folder if views is placed in root folder
    res.render('index.hbs',{
        bitch : "i am not a bitch",
    });
})

app.get("/",(req,res)=>{
    res.send("hello from the other end");
})


app.listen(port,()=>{
    console.log (`connected to ${port}`);
})