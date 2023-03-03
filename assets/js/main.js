$(document).ready(function(){
    $('.products .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:5
            },
            1000:{
                items:6
            }
        }
    });

    $('.best-seller .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    $('.mobile-mount .owl-carousel, .lifestyle .owl-carousel, .power .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
    
    
    $(".hemburger-menu-icon").click(function(){
        $(this).toggleClass("active");
    });
    
    $(".hemburger-menu-icon").click(function(){
       $(".custom-nav-wrapper").toggleClass("open");
    });
    
    $(".hemburger-menu-icon").click(function(){
        $(".background").toggleClass("back");
    });
});


