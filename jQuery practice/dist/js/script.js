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

$(document).ready(function(){
   const data = [];
   $("#submit").click(function(e){
       e.preventDefault();
       let firstName = $("input[name=firstName]").val();
       let email= $("input[name=email]").val();
       console.log( firstName +" , "+ email );
   })

});
