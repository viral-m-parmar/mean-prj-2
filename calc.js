function add(a,b){
    c = a+b;
    console.log("Add : ",c)
}

function sub(a,b){
    c = a-b;
    console.log("Sub : ",c)
}

var x = 1000;

module.exports.addition = add
module.exports.substraction = sub
module.exports.x = x



