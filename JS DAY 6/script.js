var a=10;
console.log(a)
function demo(){
    let b = 20;
    console.log(b);
}
demo()

let user = {
    FullName:"Yash Vats",
    address:"Dwarka",
    phone : 1234556,
    favcolor : ["red","black"]
}
console.log(user.FullName,user.phone,user.favcolor[1]);
console.log(Object.values(user));
console.log(Object.keys(user));

const car = {
    make: "Mahindra",
    model: "Thar"
};
// Object.freeze(car) 
// freeze cannot change
Object.seal(car)
//cannot add but only update
car.model="XEV9E"
car.color = "Red"
console.log(car)
