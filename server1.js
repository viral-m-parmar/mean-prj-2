http = require("http");

http.createServer(function (req,res){
        
    let url = req.url
    
    if(url == "/welcome"){
        res.end("welcome to the Node")
    }
    else if(url == "/time"){
        let d = new Date()
        res.end(d + " " + d.getHours())
    }
    else{
        res.end("Hi")
    }

}).listen(9999)