"use strict";
var nav = $("nav");
var navHeight = nav.outerHeight();

$(".navbar-toggler").on("click", function() {
    if (! $('#Nav1').hasClass('navbar-reduce')) {
        $("#Nav1").addClass('navbar-reduce');
    }
});

// Preloader
$(window).on("load", function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        })
    }
})

// Back to Top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

// Scroll Top
$('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})

// Scrolling Nav
$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - navHeight + 5)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

// Close menu when scroll is clicked

$(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse('hide');
});

// Active scrollspy

$('body').scrollspy({
    target: '#Nav1',
    offset: navHeight
});

// Navbar Reduce
$(window).trigger('scroll');
$(window).on('scroll', function() {
    let pixels = 50;
    let top = 1200;
    if($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
        $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
});