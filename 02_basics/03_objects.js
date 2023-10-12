//singleton
//object.create

//literal objects
const mysym = Symbol("key1")

const JsUser = {
    name:"fahad",
    "full name":"fahad anjum sabri",
    [mysym]:"key1",
    age: "14",
    location:"rawalpindi",
    email:"fahad@gogle.com",
    isLoggedIn:false,
    lastloginDay:["monday","saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full name"]);
// console.log( JsUser[mysym]);


JsUser.email = "fahad123@mm.com"
// Object.freeze(JsUser)
JsUser.email = "fahad123@m.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log ("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log (`Hello js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
