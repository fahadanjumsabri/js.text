const name = "fahad anjum sabri"
const repocount = 50

// console.log( name +   repocount    + " value")
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String('fahad-hc')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const  newString = gameName.substring(0,4)
console.log(newString);

const  anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringone = "   fahad    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "htpps://fahad.com/fahad%20rajpoot"
console.log(url.replace('%20','-'));
console.log(url.includes("hitesh"));

