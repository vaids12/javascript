console.log("test");

//$("h1") renkames elementa
//$("#id")renkames id
//$(". class")renkames klase
//$(this) pasirinktas elementas 

$(document).ready(function () {
    // darome jQuery koda
});

$(function () {
    // jQuery kodas
});

// papildomi selektoriai

// $("*") paima visus elementus;

//$("h1.title") paima visus h1 elementus kurie turi klase title;

//$("h1:first")- paima pirma h1 elementa;

//$("ul li:first-child")- paima visu ul elementu pirma li;

//$("ul li:first")- paima pirmo ul  elemento pirma li;

//$("[src]") paima visus elemnetus kurie turi atributa src;

//$("tr:even") paima lygines lenteles eilutes;

//$("tr:odd") paima nelygines lenteles eilutes;

//EVENTS

//click() - kai paspaudziam peles klavis;

//dblclick()- dukart peles paspaudimas;
//muoseenter() kai pele zymeklis atsiduria virs elemento;
//mouseleave()- peles zymeklis iseina is elemento;
//mousedown()- paspaudus bet kuri peles klavisa ir laikant;
//mouseup() - kai bet kuris peles klavisas atspaudziamas;
//hover()- mouseenter() ir mauseleave() kombinacija;
//focus()- kai paspaudziame ant formos input laukelio;
//blur()-atvirkstinis focus();

//on()- metodas leidzia prideti daug eventu;

//Metodai

//toggle() - on-off , pasikeiciantis ;
//hide() -paslepia elementa;
//

$(document).ready(function () {
    $("#title").click(function () {
        // $("#text").toggle(3000);
        // $("#text").fadeIn();
        //$("#text").fadeOut(5000);
        // $("#text").fadeToggle(3000);
        //$("#text").slideToggle();


    });

    $("#button").click(function () {
        $(".box").animate({
            left: "200px",
            top: "300px",
            borderRadius: "10px",
            backgroundColor: "black", // jQuery neturi spalvu keitimo animacijose

        });
        // let box = $(".box");
        // box.animate({left: "+=90px"});
        // box.animate({ top: "300px"}, 1000);
        // box.animate({borderRadius: "10px"}, function(){
        //     alert("Animation is finished");

        // });
    });
});

// Metodai jungiami tasku.



////////-------------------HTML DOM -------------------///

// text(); paimti ar ideti teksta
//html()- paimti arba ideti elemento turini ( kartu su html kodu)

$(document).ready(function () {
    $("#b1").click(function () {
        alert("tekstas yra " + $("#title").text());

    })
    $("#b2").click(function () {
        alert("HTML yra" + $("#text").html());
    })
})

//val() - paima arba ideda formos elementu value;

$(document).ready(function () {
    $("#b3").click(function () {
        let inputVal = $("#input1").val()
        alert(inputVal);
        $("#title").text(inputVal);
        let x = Math.random();
        $("#input1").val(x);
    })

})

// norint ideti reiksmes i metoda irasome reiksmes

//text("tekstas")-  text(tekstas) , jei taip turi buti kintamasis

//append() - prideda turini i elemento pabaiga;
//prepend() - prideda i elemento prieki;

//after() - prideda turini po pasirinkto elemento;
//before()- prideda turini pries pasirinkta elementa;




function add() {
    $(document).ready(function () {
        $("#b1").append("!");
        $("#b2").before("<p>tekstas</p>");
    });
}

$("#button").click(function () {
    add();
});

//empty() panaikina child elementus;
//remove() panaikina elementa ir child elementus

//$("h1").remove("smallHeading");

//-----CSS manipuliavimas----------///

//css() -paimti arba ideti stiliaus atributus;
//addClass() - prideda viena ar daugiau klasiu prie pasirinkto elemento;
//removeClass() - panaikina viena ar daugiau klasiu prie elemento;
//toggleClass() - sudetinis add ir remove;

console.log($(".box").css("background-color"));

let color = $(".box").css("background-color");

$("#b1").css({
    "background-color": color,
    "width": "50px"
});

$(document).ready(function () {
    $("#boxCssAdd").click(function () {
        $(".box").addClass("green static");
        $(".box1").addClass("green static");
    });
    $("#boxCssRemove").click(function () {
        $(".box").removeClass("green static");
        $(".box1").removeClass("green ");
    });
    $("#boxCssToggle").click(function () {
        $(".box").toggleClass("green static");
        $(".box1").toggleClass("green static");
    });
})