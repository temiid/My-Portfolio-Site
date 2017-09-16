$(document).load($(window).on("resize", checkPosition));

function checkPosition()
{
    if($(window).width() < 1024)
    {
        $("#now0").fadeIn();
        $("#now1").hide();
        $("#now2").hide();
        
        $("#now3").hide();
        
        $("#now4").hide();
        
        $("#now5").hide();
        
        $("#now6").hide();
        
        $("#show-case1").hide();

       

    } else {
        $("#now1").fadeIn('slow');
        $("#now0").hide();
    }
}


$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.slid-nav1 div').toggleClass('starting');
    });

})

$(document).ready(function(){
    $('.burger').on('click', function(){
        
        $('.slide-menu ul li').toggleClass('link-fade');
    });
})

$(document).on("click", function(e){
    if(!$(e.target).closest('.item3b').length){
        $('.slid-nav1 div').removeClass('starting');
    }
});


$("#now0").hide();

// $("#now1").hide();

$("#now2").hide();

$("#now3").hide();

$("#now4").hide();

$("#now5").hide();

$("#now6").hide();

$("#show-case1").hide();

$("#view").hide();

// $("#show-case2").hide();

$(window).on('mousewheel DOMMouseScroll', function(event){
    if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
        $("#now2").fadeIn("slow");
        $("#show-case1").show(1500);
        
        // $("#now") .css({ "top": "0px" }) 
    }
    else {
        $("#now2").fadeOut("slow");
        $("#show-case1").fadeOut(600);
    }

    return false
});

// $(window).on('keydown', function(event){
//     if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
//         $("#now").fadeIn("slow");
//         $("#show-case1").show(1500);
//         // $("#now") .css({ "top": "0px" }) 
//     }
//     else {
//         $("#now").fadeOut("slow");
//         $("#show-case1").fadeOut(600);
//     }

//     return false
// });


$(document).ready(function(){
    $('#link-portfolio').on('click', function(){
        $("#now2").fadeIn("slow");
        $("#show-case1").show(1000);
    });

})

$(document).ready(function(){
    $('.scroll-div').on('click', function(){
        $("#now2").fadeIn("slow");
        $("#show-case1").show(1000);
    });

})

$(document).ready(function(){
    $('#works').on('click', function(){
        $("#now2").fadeIn("slow");
        $("#show-case1").show(1000);
    });

})


// $(document).ready(function(){
//     $( "#now" ).keyup(function(event){
//         $("#now").fadeIn("slow");
//     })
    // $('#link-portfolio').on('click', function(){
    //     $("#now").fadeIn("slow");
    //     $("#show-case1").show(1000);
    // });

// })

//CONTROL BACK TO HOME

$(document).ready(function(){
    $('.Home-back').on('click', function(){
        $("#now2,#now3,#now4,#now5,#now6").fadeOut('slow')
    });

})


// PAGE 2 TO PAGE 3


$(document).ready(function(){
    $('#back2').on('click', function(){
        $("#now2").fadeOut('slow');
    });

})


$(document).ready(function(){
    $('#next2').on('click', function(){
        $("#now3").fadeIn( 600);
    });

})


// PAGE 3 TO PAGE 4


$(document).ready(function(){
    $('#back3').on('click', function(){
        $("#now3").fadeOut('slow');
    });

})


$(document).ready(function(){
    $('#next3').on('click', function(){
        $("#now4").fadeIn( 600);
    });

})


// PAGE 4 TO PAGE 5


$(document).ready(function(){
    $('#back4').on('click', function(){
        $("#now4").fadeOut('slow');
    });

})


$(document).ready(function(){
    $('#next4').on('click', function(){
        $("#now5").fadeIn( 600);
    });

})


// PAGE 5 TO PAGE 6


$(document).ready(function(){
    $('#back5').on('click', function(){
        $("#now5").fadeOut('slow');
    });

})


$(document).ready(function(){
    $('#next5').on('click', function(){
        $("#now6").fadeIn( 600);
    });

})


// PAGE 6 TO PAGE 7


$(document).ready(function(){
    $('#back6').on('click', function(){
        $("#now6").fadeOut('slow');
    });

})


$(document).ready(function(){
    $('#next6').on('click', function(){
        $('#now2,#now3,#now4,#now5,#now6').fadeOut( 600);
    });

})


//VIEW MORE

$(document).ready(function(){
    $('#view-more1').on('click', function(){
        $("#view").fadeIn( 600);
    });

})


$(document).ready(function(){
    $('#view-more2').on('click', function(){
        $("#view").fadeIn( 600);
        $(".more-views").css( "background", "#5B717C");
        $(".visit-link").text("Evicon Mart");
        $(".visit-link").css("color", "#FDA35B");
        $('.screen1').css( "background-image", "url('images/evicon1.png')");
        $('.screen2').css( "background-image", "url('images/evicon2.png')");
        $('.screen3').css( "background-image", "url('images/evicon3.png')");
        $('.screen4').css( "background-image", "url('images/evicon4.png')");
        $('.screen5').css( "background-image", "url('images/evicon5.png')")
    });

})


$(document).ready(function(){
    $('#view-more3').on('click', function(){
        $("#view").fadeIn( 600);
        $(".more-views").css( "background", "#B588AE");
        $(".visit-link").text("Tailorgang");
        $(".visit-link").css("color", "#EC216E");
        $('.screen1').css( "background-image", "url('images/Tailorgang3.png')");
        $('.screen2').css( "background-image", "url('images/Tailorgang21.png')");
        $('.screen3').css( "background-image", "url('images/Tailorgang2.png')");
        $('.screen4').css( "background-image", "url('images/Tailorgang5.png')");
        $('.screen5').css( "background-image", "url('images/Tailorgang4.png')")
    });

})


$(document).ready(function(){
    $('#view-more4').on('click', function(){
        $("#view").fadeIn( 600);
        $(".more-views").css( "background", "#64707A");
        $(".visit-link").text("Evicon");
        $(".visit-link").css("color", "#CDA662");
        $('.screen1').css( "background-image", "url('images/jerr1.png')");
        $('.screen2').css( "background-image", "url('images/jerr2.png')");
        $('.screen3').css( "background-image", "url('images/jerr3.png')");
        $('.screen4').css( "background-image", "url('images/jerr4.png')");
        $('.screen5').css( "background-image", "url('images/jerr5.png')")
    });

})


$(document).ready(function(){
    $('#view-more5').on('click', function(){
        $("#view").fadeIn( 600);
        $(".visit-link").text("Girar Solution Hub");
        $(".visit-link").css("color", "#F45B21");
        $('.screen1').css( "background-image", "url('images/refil1.png')");
        $('.screen2').css( "background-image", "url('images/refil2.png')");
        $('.screen3').css( "background-image", "url('images/refil3.png')");
        $('.screen4').css( "background-image", "url('images/refil4.png')");
        $('.screen5').css( "background-image", "url('images/refil5.png')")
    });

})


$(document).ready(function(){
    $('.Home-back2').on('click', function(){
        $('#view').fadeOut( 600);
    });

})



 



