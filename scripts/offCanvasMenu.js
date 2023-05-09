define(['jquery'], function($){
    var mobileWidth = 768, desktopWidth = 1500;
    var offCanvasContainer = $('.row-offcanvas');
    var menuButton = $('[data-toggle="offcanvas"]').not('[data-target]');
    var contentWrap = $('.content-wrap');
    var hamburger = $('.hamburger');

    function toggleNavigation(){
        offCanvasContainer.toggleClass('active');
        hamburger.toggleClass('is-active');

        if($(window).width() < mobileWidth){
            // Icon austauschen ⁞ => x
            $('span.flaticon').toggleClass('flaticon-dots flaticon-cross');

            if(offCanvasContainer.hasClass('active')){
                $('body').addClass('spaceless');
            } else {
                $('body').removeClass('spaceless');
            }

            // Der Hauptnavi die Möglichkeit geben, nach oben geschoben zu werden
            contentWrap.children('.navbar-default').toggleClass('not-fixed');
            $('.main-navigation .navbar-header').toggleClass('not-fixed');
        }
    }

    // Button zum Aktivieren des Off Canvas Menü
    menuButton.click(function(e){
        e.preventDefault();
        toggleNavigation();

        // Eder Profitechnik Gruppe (Text aus- und einblenden)
        if($(window).width() > desktopWidth){
            $('.group-title').toggleClass('visible invisible');
            $('.group-title-left').toggleClass('invisible visible');
        }
    });

    // bei Klick auf das Overlay wird das Menü geschlossen
    $('.overlay').on('click', function(){
        toggleNavigation();
    });



    // Normales Offcanvas

    var toggleBtns = $('[data-toggle="offcanvas"]');

    toggleBtns.click(function(e){
        var target = $(this).data('target');
        $(target).toggleClass('in');
    })
})