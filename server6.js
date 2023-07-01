const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRoutes = require("./routes/product.routes")
const catagoryRoutes = require("./routes/catagory.routes")

// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// product routes
app.use("/",productRoutes); //  /addproductdb

// catagory routes
app.use("/",catagoryRoutes)

// dbConnection 
mongoose.connect("mongodb://127.0.0.1:27017/mean23").then(()=>{
    console.log("DBConnected...");
})

app.listen(9999);

