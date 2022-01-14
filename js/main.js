$(document).ready(function() {

    /*
     * 1. Navbar Fixed Top Script
     * 2. Navbar Toggler Icon Change Script
     * 3. Back Top Top Buttom Script
     */


    /*___________1. Navbar Fixed Top Script __________________________*/
    // add padding top to show content behind navbar
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
                            
    // detect scroll top or down
    if ($('#navigation').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if (scroll_top < last_scroll_top) {
                $('#navigation').removeClass('scrolled-down').addClass('scrolled-up');
            } else {
                $('#navigation').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }

    /*___________2. Navbar Toggler Icon Change Script __________________________*/
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('close_burg');
    });

    /*___________3. Back To Top Button Script __________________________*/
    $("#btnBackTop").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $("#btnBackTop").fadeIn();
        } else {
            $("#btnBackTop").fadeOut();
        }
    });

    // Home page winner section slider script
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1,
        autoplay: false,
        smartspeed: 500, 
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"
        ]
    });


    // Competition Page Filter Box Script ====== \\
    $(".expand_btn").click(function(){
        $(".res_filter_box").toggle();
    }) 
    $('.expand_btn').click(function() { 
        $(this).find('i').toggleClass('ti-angle-down ti-angle-up'); 
    }); 

    // sign up page
    $(".signUpBtn").click(function(){
        $(this).hide();
        $(".socialForm").hide();
        $(".emailFormExpand").show();
    });




});