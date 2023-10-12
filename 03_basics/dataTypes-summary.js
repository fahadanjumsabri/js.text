//primitive

//7 Types:String,number,boolean,null,undefined,symbol,bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn =false
const outsidetem = null
let useremail;

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id === anotherid);
// const bignumber = 12673848328784394n


//reference (non-primitive)

//array,objects.function

const heros = ["shaktiman","doga","nagraaj"];
let myobj = {
    name:"fahad",
    age:14
}

const myfunction = function(){
    console.log("fahad");
}

console.log(typeof anotherid);

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// stack memory(primitive),heap memory(non-primitive)

let myyoutubename = "fahad@gogle.com"
let anothername = myyoutubename
anothername = "chaiaurcode"
console.log(myyoutubename);
console.log(anothername);

let userone= {
    email: "user@email.com",
    Upi :"user@ybl"
}
usertwo = userone
usertwo.email = "fahad@gogle.com"

console.log(userone.email);
console.log(usertwo.email);
