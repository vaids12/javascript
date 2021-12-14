console.log("Test")

//Turime šešis atsitiktinius skaičius nuo 1000 iki 9999. Surikiuoti juos didėjimo tvarka.

// let a;
// let b;
// let c;
// let d;
// let e;
// let f;

// // a = Math.random();
// a= Math.floor(Math.random()*(9999-1000))+1000;

// //Math.floor(Math.random()*(9999-1000))+1000;
// console.log(a);

// b= Math.floor(Math.random()*(9999-1000))+1000;
// console.log(b);

// c= Math.floor(Math.random()*(9999-1000))+1000;
// console.log(c);

// d= Math.floor(Math.random()*(9999-1000))+1000;
// console.log(d);

// e= Math.floor(Math.random()*(9999-1000))+1000;
// console.log(e);

// f= Math.floor(Math.random()*(9999-1000))+1000;
// console.log(f);
// console.log ("__________________________")

// // 1 ciklas

// if(a>b){
//     let x = a;
//     a = b;
//     b = x;
// }

//  if(b>c){
//     let x = b;
//     b = c;
//     c = x;
// }

// if(c>d){
//     let x = c;
//     c = d;
//     d = x;
// }

// if(d>e){
//     let x = d;
//     d = e;
//     e = x;
// }

// if(e>f){
//     let x = e;
//     e = f;
//     f = x;
// }
// // 2 ciklas
// if(a>b){
//     let x = a;
//     a = b;
//     b = x;
// }

//  if(b>c){
//     let x = b;
//     b = c;
//     c = x;
// }

// if(c>d){
//     let x = c;
//     c = d;
//     d = x;
// }

// if(d>e){
//     let x = d;
//     d = e;
//     e = x;
// }
// // 3ciklas
// if(a>b){
//     let x = a;
//     a = b;
//     b = x;
// }

//  if(b>c){
//     let x = b;
//     b = c;
//     c = x;
// }

// if(c>d){
//     let x = c;
//     c = d;
//     d = x;
// }
// // 4 ciklas
// if(a>b){
//     let x = a;
//     a = b;
//     b = x;
// }

//  if(b>c){
//     let x = b;
//     b = c;
//     c = x;
// }
// // 5 ciklas
// if(a>b){
//     let x = a;
//     a = b;
//     b = x;
// }


// console.log(a, b, c, d, e, f);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


console.log("****************************")

// Funkcijos

//Tai yra kodo blokas,kuris vykdo tam tikrą užduotį ir kurį galima iškviesti kada norime.

function multiply(a , b){
    console.log(a*b);
}


multiply(11,2);

function greeting(){
    console.log(" hello, "+ firstName);
}

let firstName = "Marius";


function sum(a,b){
    return a+b;
    // toliau kodas neveikia
}

let suma = sum(25,56);

let skaicius1 = 78;
let skaicius2 = 896;

console.log("Suma yra "+sum(skaicius1,skaicius2));

// for creating Heading, where a is size and b is text

// function createHeading( a,b){
//     document.write("<h" + a+">"+b+ "</h"+ a + ">");
// }
// createHeading(1, "Pavadinimas");

// function createHeading( a,b){
//     return "<h" + a +">"+ b + "</h"+ a + ">";
// }

// document.write(createHeading(3,"funkcija su return"))

function createHeadingV2() {
    let  a;
    let b;
    a = parseInt(window.prompt("iveskite heading dydi"));
    b = window.prompt("iveskite pavadinimo teksta");

    document.write("<h" + a+">"+b+ "</h"+ a + ">");
}

// Masyvai -Arrays

const trees = [
    "Pusis",
    "Berzas",
    "Azuolas"
 ];

// let tree1 = "Pusis";
// let tree2 = "Berzas";
// let tree3 = "Azuolas";

const cars = [];
cars[0] = "BMW";
cars[1] = "Opel";
cars[2] = "Audi";

console.log(trees);
console.log(cars);
cars[2] = "Skoda";
console.log(cars);


let bestCar = cars[2];
console.log(bestCar);

console.log(typeof trees);

//Objektai - Objects

const student = {
    firstName:"Jonas", 
    lastName: "Jonaitis",
    age:23
}

console.log(student.lastName);

student.firstName = "Petras";
console.log(student);

// Array Methods

const furniture = [
    "stalas",
    "kede",
    "fotelis",
    "lova"

]

console.log(furniture);

console.log(furniture.toString());
console.log(furniture.join(" | "));

let bed = furniture.pop();
console.log(furniture);
console.log(bed);


furniture.push("sofa");
console.log(furniture);

furniture.shift();
furniture.unshift("spintele");


console.log(furniture.length);// paskutinis indeksas yra 1 mazesnis uz length

delete furniture[2];// nenaudojam trynimui nes padaro skyles
console.log(furniture);

furniture.splice(2,0, "lentyna", "lova");// pridedam masyvui
console.log(furniture);

furniture.splice(4,1);// trinam  masyve
console.log(furniture);

// Masyvu sujungimas

const smallCities = [
    "Kedainiai",
    "Marijampole",
    "Alytus",
    "Anyksciai"
];

const bigCities = [
    "Vilnius",
    "Kaunas",
    "Klaipeda",
    "Siauliai",
    "Panevezys"
];

const cities = bigCities.concat(smallCities); // po kablelio galima daugiau masyvu isvardinti


console.log(cities);

const cities2 = cities.concat("Silute");
console.log(cities2);

const bigThree = cities.slice(0,3);
console.log(bigThree);

const smallThree = [];
smallThree.splice(0,0, cities.slice(2,3).toString(), cities.slice(5,6).toString(), cities.slice(8,9).toString());

console.log(smallThree);

cities.sort();

console.log(cities);

cities.reverse();
console.log(cities);

const numbers = [1,56885855,562,7869];
numbers.sort();
console.log(numbers);

// number sort
numbers.sort(function(a,b){
    return a - b;// jei mazejimo tvarka , tai b - a
});

console.log(numbers);

const numbers2 = [12, 56, 89 , 1 , 54 , 999, 478];

let maxNo = parseInt( numbers2.sort(function(a,b){
    return a-b;
}).slice(numbers2.length-1).toString());

console.log(maxNo);

function minArray(array){
    return Math.min.apply(null, array);
}

let minNo = minArray(numbers2);
console.log(minNo);


function addOne(value, index, array){
  text += value + "<br>";
}

let text = "";
console.log(text);
numbers2.forEach(addOne);
document.write(text);

function increased (value, index, array) {
    return value + 1;
}

const numbers3 = numbers2.map(increased);
console.log(numbers3);

function doubleDigits(value, index, array){
    return value < 100;
}

const underHundrend = numbers2.filter(doubleDigits);

console.log(underHundrend);



