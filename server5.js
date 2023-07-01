const express = require("express")
const { Error } = require("mongoose")
const multer = require("multer")

const app = express()

const myStorage = multer.diskStorage({

    destination: function(req,file,cb){
        cb(null,"uploads")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:myStorage,fileFilter: function (req,file,cb) {
    
    if(file.mimetype == "image/jpeg" || file.mimetype == "image/x-png"){
        cb(null,true)
    }else{
        cb(null,false)
        cb(new Error("Valid extension are jpeg / png"))
    }
},
    limits:{fileSize:1584675}   // size consider in bytes
})


app.post("/signup",upload.single("profilepic"),function(req,res){

    console.log(req.body)   // it gives text
    console.log(req.file);  // it gives file img/video
    res.json({msg:"Signup done",status:200,data:"signup done"})
})

app.listen(9999);
