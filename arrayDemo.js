let x = []

x.push(11)
x.push(22)
x.push(33)
x.push(44)
x.push(55)


console.log(x);

console.log(x[0]);

console.log("Elements in array")
for(let i = 0; i<x.length; i++){
    console.log(x[i])
}

x.pop() // Last Element is Deleted 

console.log(x)

// 33 is removed 

let dummy = []
for(let i = 0; i<x.length; i++){
    if(x[i] != 33){
        dummy.push(x[i])
    }
}
x = dummy
console.log(x);

// remove 22 using map function
let fakeArray = []
x.map(data => {
    if(data != 22){
        fakeArray.push(data)
    }
})
console.log(fakeArray);

// remove 11 using filter

x = x.filter(data => data != 11)
console.log(x);
