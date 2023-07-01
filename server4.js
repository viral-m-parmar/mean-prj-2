const express = require("express")
const mongoose = require("mongoose")
const productController = require("./controller/productControllerDb")
const catagoryController = require("./controller/catagoryController")
const industryController = require("./controller/industryController")
const equityController = require("./controller/equityController")

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/mean23").then(()=>{
    console.log("DB Connected Succesfully...");
})

// product routes
app.post("/addproductdb",productController.addProduct);
app.get("/getallproductdb",productController.getAllProduct);
app.get("/products/:productId",productController.getProductById);
app.delete("/delete/:productId",productController.deleteProductById)
app.put("/updateproduct",productController.updateProductById)
app.post("/filterproduct",productController.filterProducts)

// catagory routes
app.post("/catagoryadd",catagoryController.addCatagory)
app.get("/getallcatagory",catagoryController.getAllCatagory)

// industry routes
app.post("/industry",industryController.readAndUploadIndustry)

// equity routes
app.post("/equity",equityController.uplodaEquity)
app.get("/getallequity",equityController.getAllEquity)

app.listen(9999)