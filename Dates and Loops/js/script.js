console.log("testas");

let today = new Date();
console.log(today);

let newyear = new Date(2021,11,31,23,59,59,59);
console.log(newyear);

let todayms = new Date(0);
console.log(todayms);

// Date formats

// 2021-12-04 ISO Date

// 04/12/2021 Short Date

// Dec 04 2021 long Date

// Date Methods

console.log(today.getTime());

console.log(today.getFullYear());

const months = ["Sausis", "Vasaris", "Kovas","Balandis","Geguze", "Birzelis", "Liepa", "Rugpjutis","Rugsejis", "Spalis", "Lapkritis "," Gruodis"];

console.log(today.getMonth());// gaunam indeksa

console.log(months[today.getMonth()]);

console.log(today.getDate());

// getHours() getMinutes() getSeconds() getMiliseconds()

const days = ["Sekmadienis", "Pirmadienis", "Antradienis", "Treciadienis", "Ketvirtadienis", "Penktadienis", "Sestadienis"];

console.log(days[today.getDay()]);


//////////////////////////////////////

// Ciklai - Loops

// for - perbega per koda nustatyta kartu skaiciu
// while - perbega per koda tiek kartu kol yra teisinga salyga

for (let i = 0; i < 6; i++ ){
    console.log(i);
  
}

const numbers =[1,2,3,4,5,6,7,8,9];

for(let i = 0; i<numbers.length; i++){
    numbers[i] +=1
}

console.log(numbers);

let i = 0;
while( i<10){
    console.log("Number is " + i);
    i++;
}

for(let i = 0; i<numbers.length; i++ ){
    if (numbers[i]===5){
        numbers[i] = 50;
    }
}
console.log(numbers)
