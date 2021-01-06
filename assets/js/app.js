$(function (){

    let header = $("#header");
    let track = $("#company");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $(".nav");
    let navToggle = $("#navToggle");

    ckeckScroll (scrollPos, introH);

    $(window).on("scroll", function () {
        scrollPos = $(this).scrollTop();

        ckeckScroll (scrollPos, introH);
    });

    function ckeckScroll (scrollPos, introH) {
        if (scrollPos > 50) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 90
        });
    });


    $("#navToggle").on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();

        if ( scrolled > 100 && scrolled > scrollPrev ) {
            $(".header").fadeOut("fast");
        } else {
            $('.header').fadeIn("fast");
            $('.header').addClass('fixed');

        }
        scrollPrev = scrolled;
    });

});