var products = []

function addProduct(req,res){
    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty
    let productId = parseInt(Math.random()*1000000)

    let product = {
        "productId" : productId,
        "productName" : productName,
        "price" : price,
        "qty" : qty,
    }
    products.push(product)

    res.json({"msg":"Product Added","data":product,"rcode":200})
}

function getAllProduct(req,res){
    res.json({"msg":"Products Retrived","data":products,"rcode":200})
}

function deleteProductById(req,res){

    let productId = req.params.productId
    console.log("productId : " + productId)
    console.log(`productId : ${productId}`)
    
    let oldLength = products.length;
    // delete product by using filter
    products = products.filter(product => product.productId != productId)
    let newLength = products.length;

    if(oldLength == newLength){
        res.json({"msg":"productId Invalid","data":productId,"rcode":-9})
    }
    else{
        res.json({"msg":"product deleted","data":productId,"rcode":200})
    }
}

module.exports.addProduct = addProduct;
module.exports.getAllProduct = getAllProduct;
module.exports.deleteProductById = deleteProductById;
