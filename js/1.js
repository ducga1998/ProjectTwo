$(document).ready(function() {
    $(".scroll a").on("click", function(e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: $(".scroll").offset().top
        }, 400);
        console.log($(".scroll").offset().top);
    });

    function FullScreen() {
        var heightA = $(window).height();
        console.log(heightA);

        $(".SlideHeadBackground ").css({
            "height": heightA + "px"
        });
        $(".introduceTitle").css({
            "height": heightA + "px"
        });


        $(".content-slide .item").css({
            "height": heightA + "px"
        });


    }
    FullScreen();
    $(window).resize(function() {
        FullScreen();
    });
    $('.SlideRun').owlCarousel({

        loop: true,
        margin: 0,
        nav: false,

        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'fadeOut'

    });
    var owl = $('.SlideRun');
    owl.owlCarousel();
    // Go to the next item
    $('.buttonLeft').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.buttonRight').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    /*var y = x[0].css("margin-bottom");*/


    /* for ()*/

    /*function

$(".Room").on("click", function () {
    $(this).toggleClass

});*/
    /*var Rooms = document.getElementsByClassName("Room");
for (var room of Rooms) {

    console.log(room.style.marginBottom);

}*/

    /*var owls = $('.CarouselClient');
owls.owlCarousel();
// Go to the next item
$('.twoArowCauroselServies .buttonBackwards').click(function () {
    owls.trigger('next.owl.carousel');
})
// Go to the previous item
$('.twoArowCauroselServies .buttonNext').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owls.trigger('prev.owl.carousel', [300]);
})
*/
    $('.CarouselClient').owlCarousel({
        loop: true,

        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        dots: false
    });
    $('.RunCarouselFooter').owlCarousel({
        margin: 40,
        loop: true,
        autoWidth: true,
        items: 4
    })

    $(".listRoom .Room").click(function() {
        $(this).closest('.listRoom').find('.Room').removeClass('active');
        $(this).addClass('active');
		var cssVar = $(this).find('.AvtRoom ').css('backgroundImage');

		$(".detailRoom").css({"background-image":cssVar,"transition":"0.3s"});
		 var quotes = new Array("Lorem Ipsum is simply dummy text of the printing and typesetting industry", " Lorem Ipsum is simply dummy text of ", "Lorem Ipsum is simply dummy text of the printing and typesetting industry", "Lorem Ipsum is simply dummy text of the printing and typesetting industry");
    randno = quotes[Math.floor( Math.random()*quotes.length )];
    $('.titleNavRoom').text(randno);
		  $('.titleNavRoom').css({"transition":"0.3s"});
		 $(this).closest('.listRoom').find(".titleRooms").removeClass('textBlue');
        $(this).closest('.listRoom').find(".active").find(".titleRooms").addClass('textBlue');


    });

});
jQuery(function($) {
    $("#VideoIntroduceHelios").YTPlayer();
    $('.flexBoxWrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        dots: false
    })
});
