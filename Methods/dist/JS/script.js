console.log("test")


// number and methods

let a = 5;
let b = 5.2569;
let c = 56e6;   //56 000 000

//sveikas skaicius iki 15 zenklu , po kablelio gali buti 17.

let d = 0.2+0.1; //rezultatas 0.30000000000000004
console.log(d);

let e= ((0.2*10)+(0.1*10))/10
console.log(e);


console.log(typeof a.toString() );

let f= b.toString();
console.log(typeof f);

//suapvalinimas

b =  b.toFixed(1);
console.log(b);
//number pavercia i string


//String to number


b= Number(b);
console.log(b);
// b = parseInt(b);
// console.log(b);
b = parseFloat(b);
console.log(b);

// String methods

let word = "Ketvirtadienis"
console.log(word.length);

//karpyti teksta

let cars = "volvo, mazda, skoda";
console.log(cars);
let car = cars.slice(7,12); // jei skaiciai neigiami tai skaiciuoja nuo galo
console.log(car);

//substring()  tas pats kaip slice tik nepriima neigiamu reiksmiu

let car2 = cars.substr( -5, 5)
console.log(car2);

// replace part of string 

let newCars = cars.replace("volvo", "bmv");
console.log(newCars);


// Join  string

let newWord = word.concat(", ", cars, ", Penktadienis");
console.log(newWord);

//4 uzdavinys

let n = 1221;

let g = n.toString();

let gSplit=g.split("").reverse().join("");

console.log(gSplit)

let nReverse =parseInt(gSplit);


if (n===nReverse){
    console.log("polindromas");
}else {
    console.log(" nera polindromas");
}
    



