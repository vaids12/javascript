console.log("test");

//Task1 Dvieju skaiciu palyginimas



function task1() {
    let n1 = window.prompt(" Irasykite pirmąjį skaičių", "0")
    let n2 = window.prompt(" Irasykite antrąjį skaičių", "0")

    if (parseInt(n1) > parseInt(n2)) {
        console.log("Palyginus skaičių " + n1 + " su skaičiumi " + n2 + " didesnis  yra skaičius " + n1);
    } else if (parseInt(n1) < parseInt(n2)) {
        console.log("Palyginus skaičių " + n1 + " su skaičiumi " + n2 + " didesnis yra skaičius  " + n2);
    } else {
        console.log("skaičiai " + n1 + " ir " + n2 + " yra lygūs");
    }
}

//task2 Reikia rasti truiju skaiciu galutini zenkla



function task2(a, b, c) {
    if (a > 0 && b > 0 && c > 0) { //&& - ir(and) || - arba(or)
        console.log("+");
    } else if (a < 0 && b < 0 && c < 0) {
        console.log("-");
    } else if (a > 0 && b < 0 && c < 0) {
        console.log("+");
    } else if (a < 0 && b > 0 && c < 0) {
        console.log("+");
    } else if (a < 0 && b < 0 && c > 0) {
        console.log("+");
    } else if (a > 0 && b < 0 && c > 0) {
        console.log("-");
    } else {
        console.log("nulių negali būti");
    }

}


//task3 Sukurti programa kuri rastu lyginius ir nelyginius skaicius.

function task3() {
    for (let i = 0; i < 15; i++) {
        if (i === 0) {
            console.log(i + " yra lyginis");
        } else if (i % 2 === 0) {
            console.log(i + " yra lyginis");
        } else {
            console.log(i + " yra nelyginis");
        }
    }
}

//task4 Sukurti programa kuri patikrintų skaičius nuo 0 iki 100 ir prie skaičių , kurie dalijasi is triju paraso trystrys, is penkiu - penkipenki o ir is penkiu ir is triju tryspenki.


function task4() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + "tryspenki");
        } else if (i % 3 === 0) {
            console.log(i + "trystrys");
        } else if (i % 5 === 0) {
            console.log(i + "penkipenki");
        } else {
            console.log(i);
        }

    }

}
//task5
//* 
//**
//***
//****
//*****


function task5() {
    let star = "";
    for (let i = 1; i <= 6; i++) {
        for (let x = 0; x < i; x++) {
            star = star + "*";
        }
        console.log(star);
        star = "";
    }
}

//Nested Loops

const children = [
    "Jonas",
    "Petras",
    "Antanas",
    "Maryte",
    "Onute",
    "Kazys"
];

const adults = [
    "Kazys",
    "Jonas",
    "Maryte",
    "Juozas",
    "Petras"

];

const sameName = [];

for (let i = 0; i < children.length; i++) {
    for (let j = 0; j < adults.length; j++) {
        if (children[i] === adults[j]) {
            sameName.push(children[i]);
        }
    }
}

console.log(sameName);

//task6 reikia rasti dazniausiai pasitaikanti elementa masyve atsakymas gali buti pvz " 3 ( 5 kartai)"


const array1 = [3, "a", "a", "a", 3, 2, 5, "a", "b", "b"];

function mostFrequent(array) {
    let frequency = 1;
    let m = 0;
    let item;

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                m++;
            }
            if (frequency < m) {
                frequency = m;
                item = array[i];
            }
        }
        m = 0;
    }
    console.log(item + " (" + frequency + " kartai)");
}

// task6 mini forma suvesti masyvo elementus ir atspausdinti masyva


let x = 0;
const list = [];

function addToArray() {
    list[x] = document.getElementById("text1").value;
    alert("Element: " + list[x] + " Added to array");
    x++;
    document.getElementById("text1").value = "";
}

function showArray() {
    let ul = "<ul>"
    for (let i = 0; i < list.length; i++) {
        ul += "<li>" + list[i] + "</li>";
    }

    ul += "</ul>"
    document.getElementById("result").innerHTML = ul;
}