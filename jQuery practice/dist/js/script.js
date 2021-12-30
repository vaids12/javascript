$(document).ready(function () {
    console.log("test");
})

// hide navbar

$(document).ready(function () {
    $(".button").click(function () {
        $(".navbar").toggleClass("hidden");
        $(".menuItems").toggle();
        $("#arrow").toggleClass("down")
    })
})

//scroll event



window.addEventListener("scroll", function () {
    //reikia zinoti scroll pozicija
    // console.log(this.scrollY);
    let scrollPos = this.scrollY;

    //elemento pozicija
    let text = document.querySelector(".container");
    let textPos = text.getBoundingClientRect().top;

    if (scrollPos >= 100) {
        text.style.opacity = 1;
    }


});

//Scroll to section

$(document).ready(function () {
    $("#toSection2").click(function () {
        $("html, body").animate({
            scrollTop: $("#section2").offset().top
        }, 1000);

    });
});

//Form control

$(document).ready(function () {
    const data = [];
    //duomenu ivedimas
    $("#submit").click(function (e) {
        e.preventDefault();

        let firstName = $("input[name=firstName]").val();
        let email = $("input[name=email]").val();
        if (!firstName || !email) {
            return alert("Suveskite duomenis!")
        }
        //console.log( firstName +" , "+ email );
        let user = firstName + ", " + email;
        //console.log(user);
        data.push(user); // iraso kintamaji i masyva    
        $("input[name=firstName]").val("");
        $("input[name=email]").val("");
        //    console.log(data);
        $("#list").empty();
        for (let i = 0; i < data.length; i++) {
            $("#list").append("<li>" + data[i] + "</li>");
        }

        // $("#list").append("<li>" + data[data.length - 1] + "</li>");
    });
    // duomenu slepimas/rodymas
    $("#clearList").click(function () {
        $("#list").empty();
    });
    $("#showArray").click(function () {
        if (data.length == 0) {
            alert("Duomenu nėra!")
        }
        $("#list").empty();
        for (let i = 0; i < data.length; i++) {
            $("#list").append("<li>" + data[i] + "</li>");
        }
    })

    //duomenu istrynimas

    $("#clearArray").click(function () {
        alert("Duomenys bus ištrinti!")
        data.splice(0, data.length);
        $("#list").empty();
    })

});

//dropdown

$(document).ready(function () {
    $("#menuMain").hover(function () {
        $("#main").toggleClass("show");

    });
    $("#aboutMenu").hover(function () {
        $("#about").toggleClass("show");

    });
    $("#contactsMenu").hover(function () {
        $("#contacts").toggleClass("show");

    });
    $("#formMenu").hover(function () {
        $("#dataForm").toggleClass("show");

    });
});


$(document).ready(function () {
    const names = [
        "Petras",
        "Jonas",
        "Antanas"
    ];

    const lastNames = [
        "Petrauskas",
        "Jonauskas",
        "Antanauskas"
    ];

    const age = [
        21,
        32,
        56

    ];

    // let tr =("<tr><td>"+ names(names.length-1)+"</td><td>" +lastNames(lastNames.length-1))+"</td> <td>"+age(age.length-1)+"</td></tr>"


    let header = "<tr><th>Name</th><th>lastName</th><th>Age</th></tr>"

    $("#showTable").click(function () {
        let table = $("#table");
        if (table.is(":empty")) {
            table.append("<table>", header);

            for (i = 0; i < names.length; i++) {
                table.append("<tr><td>" + names[i] + "</td><td>" + lastNames[i] + "</td> <td>" + age[i] + "</td></tr>");
            }
            table.append("</table>")

        }

    })





});