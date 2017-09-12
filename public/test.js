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


// $(window).scroll(function(){

//     if ($(window).scrollTop() > 0) {
//         $("#now").fadeIn("slow");
//         $("#now") .css({ "top": "0px" }) 
        
//     }
//     else {
//         $("#now").fadeOut("slow");
//     }

    // $('#now').addClass('wrapper2');
    // $('.item2 p.content1').addClass('tobi')

//     var scrollHeight = $(this).scrollTop();

//     console.log(scrollHeight);

    
// })


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


// $(document).ready(function(){
//     $( "#now" ).keyup(function(event){
//         $("#now").fadeIn("slow");
//     })
    // $('#link-portfolio').on('click', function(){
    //     $("#now").fadeIn("slow");
    //     $("#show-case1").show(1000);
    // });

// })


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
        $("#now7").fadeIn( 600);
    });

})




