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



 



