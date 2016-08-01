$(function() {

    var owl = $(".carousel");
    owl.owlCarousel({
        items : 1,
        autoHeight : true,
        singleItem:true
    });
   
    $(".next_button").click(function(){
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function(){
        owl.trigger("owl.prev");
    });

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $(".top_menu_button").on("click",function(){
        $(this).toggleClass('active_menu');
        $(this).find("i").toggleClass('fa-bars fa-times');
        $("#nav").toggleClass("active_menu");
    });
    $(".middle_menu_button").on("click",function(){
        $(this).toggleClass('active_menu');
        $(this).find("i").toggleClass('fa-bars fa-times');
        $("#middle__nav").toggleClass("active_menu");
    });
});
