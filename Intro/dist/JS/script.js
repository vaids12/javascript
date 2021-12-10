// Duomenu išvedimo budai

console.log("JS atskirame faile");

document.getElementById ("heading1").innerHTML = "Keičiame elemento turinį";

document.write(" <h2>Rašome tiesiai į HTML dokumentą </h2>");

// window.alert("ALERT!");

// Statement - Values, Keywords, Expresions, Comments, Operators

// Kintamieji

var firstName;

firstName = "Vaidas";
console.log(firstName);

// pagrindinis naudojamas
let lastName = "Simkunas";

const PI = 3.14159;

firstName= "Jonas"
console.log(firstName);

let additionalHeading= "<h1>Title</h1>"

document.write(additionalHeading);

// Duomenų tipai

String
let string = "tekstas";

// skaiciai
let number = 6; 
let number2 = 6.59;

let sum = number + number2;

console.log(sum);

// Boolean

let x = true;


// Operators

// Sudetis (+) Atimti(-) Daugyba(*) Dalyba(/) increment (++) Decrement(--)

// console.log(string + " "+ "papildomas tekstas");

console.log (number + string);

console.log (number*number2/89);

// number=number++
// console.log(number);

// Assignment operators
// = reiksmei priskirti

// let x = 5;

// x = x + 10;

// x +=10;

// += -= *= /= 
let firstName1=" Vaidas ";
let script = "  Mano vardas yra "
document.write( "<h1>"+ script  + firstName1 +"</h1>" );
let script1 = "ir man yra";
let number3 = 99;
let script2 = "metų";
document.write ( "<h1>"+script+firstName1+script1+ " "+number3+" " +script2+"</h1>" );


// paskaiciuoti kiek bus amzius po x  metu


let age = 15;
let years = 30;
console.log(age+ years);

// document.write(age+years);

let ageAfter= age+years;

let sentence = "Po "+ years+" metų man bus"+ageAfter
document.write(sentence);

let a = "15";
let b = "10";
let c=a*b;
console.log (a);
console.log(c);

// Salygos - Conditions

// IF ir SWITCH
if ("salyga"){
    // kodas kuris vykdomas jei salyga true
}


if (age<18){
    console.log("Access denied");
}

if (years===30){
    console.log("yes");
}else{
    console.log("no");
}

if (b<10){
    console.log("true");
}else if (b>10){
    console.log("b yra daugiau uz 10");
}else {
console.log ("b yra lygus 10");
}











