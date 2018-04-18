$(document).ready(function () {

    "use strict";

    /************** Nav Scripts **************/

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    });

    $('a').click(function () {
        if ($(this).attr('href') === '#') {
            return false;
        }
    });

    // Margin on the menu to make room for sidebar menu if it exists

    if ($('.sidebar-menu-toggle').length && !$('.sidebar-menu-toggle i').hasClass('variant-deleted-mrv')) {
        $('nav').find('.menu').css('margin-right', 32);
    }

    // Mobile menu toggle

    $('.mobile-menu-toggle').click(function () {
        $('nav').toggleClass('open-menu');
    });

    // Sidebar menu toggle

    $('.sidebar-menu-toggle').click(function () {
        if ($('.instagram-sidebar').hasClass('show-sidebar')) {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.sidebar-menu').toggleClass('show-sidebar');
        } else {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    $('.instagram-toggle').click(function () {
        if ($('.sidebar-menu').hasClass('show-sidebar')) {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.instagram-sidebar').toggleClass('show-sidebar');
        } else {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    $('.main-container').click(function () {
        if ($('.sidebar-menu').hasClass('show-sidebar')) {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }

        if ($('.instagram-sidebar').hasClass('show-sidebar')) {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    /************** Divider Scripts **************/

    $('.background-image-holder').each(function () {

        // Append background-image <img>'s as li item CSS background for better responsive performance
        var imgSrc = $(this).children('.background-image').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('.background-image').hide();
        $(this).css('background-position', '50% 0%');
        // Check if the slider has a color scheme attached, if so, apply it to the slider nav
    });

    /************** Countdown Timer **************/

    $('.countdown').each(function () {
        $(this).countdown({
            until: new Date($(this).attr('data-date'))
        });
    });
});

$(window).load(function () {

    "use strict";

    var navHeight = $('nav').outerHeight();
    $('.inner-link').smoothScroll({
        offset: -navHeight,
        speed: 800
    });

    /************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $('.parallax-background').each(function () {
        $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
        $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
        $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');
    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }
});

jQuery(function ($) {
    function seededRandom(seed) {
        this.m = 0x80000000;
        this.a = 1103515245;
        this.c = 12345;

        this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
    }
    seededRandom.prototype.nextInt = function () {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }

    var now = new Date().getTime();
    var seed = document.cookie.replace(/(?:(?:^|.*;\s*)randomSeed\s*\=\s*([^;]*).*$)|^.*$/, "$1") || now;
    if (now - seed > 10*60*1000)
        seed = now;
    document.cookie = "randomSeed=" + seed;

    var rand = new seededRandom(seed);
    $(".randomorder").each(function () {
        var delta = $(this).data("delta") || 0;
        $(this).css({ "order": String((rand.nextInt() % 1000) + 1000 - delta), "visibility": "visible" });
    });

    $("a").each(function () {
        var $this = $(this);
        var href = $this.prop("href");
        if (href.indexOf("://") !== -1 && href.indexOf("://" + location.host) === -1) {
            $this.prop("target", "_blank");
            $this.click(function () {
                ga("send", "event", "Click to external site", $this.prop("href"));
            });
        }
    });

    (function() {
        var wrapper = document.querySelector(".testimonials");
        if (!wrapper) return;
        var testimonials = wrapper.querySelectorAll(".testimonial");
        var index = 0;
        var nextTestimonal = function() {
        for (var n = 0; n < testimonials.length; n++)
            testimonials[n].style.opacity = (index == n) ? 1 : 0;
        index = (index + 1) % testimonials.length;  
        };
        nextTestimonal();
        setInterval(nextTestimonal, 3000);
    })();
});
