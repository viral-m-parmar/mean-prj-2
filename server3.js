const express = require("express")
const productController = require("./productController/productContoller")

const app = express()

// middleware
app.use(express.urlencoded({extended:true}))    //form - data browser
app.use(express.json())     //json-data - ios/android

app.post("/addProduct",productController.addProduct)
app.get("/getAllProduct",productController.getAllProduct)
app.delete("/deleteProductById/:productId",productController.deleteProductById)

app.listen(9999);

