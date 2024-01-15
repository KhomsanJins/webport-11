new WOW({
    scrollContainer: '#page'
}).init();

jQuery(document).ready(function ($) {

    // toggle menu
    $('#open-menu').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').addClass('open');
    });
    $('#close-icon').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').removeClass('open');
    });


    // toggle edit
    $('.toggle-edit').click(function () {
        $('.edit-menu').toggleClass('active');
    })

    // toggle edit
    $('.toggle-reply').click(function () {
        $('.post-reply').toggleClass('active');
    })

    // Main Slide
    $('#items-slide').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 5000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        pauseOnHover: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // isotope
    let gridIso = $('.grid-iso').isotope({
        itemSelector: '.grid-iso-item'
    });

    // Search
    var s = $('input'),
        f = $('form'),
        a = $('.after'),
        m = $('h4');

    s.focus(function () {
        if (f.hasClass('open')) return;
        f.addClass('in');
        setTimeout(function () {
            f.addClass('open');
            f.removeClass('in');
        }, 1300);
    });

    a.on('click', function (e) {
        e.preventDefault();
        if (!f.hasClass('open')) return;
        s.val('');
        f.addClass('close');
        f.removeClass('open');
        setTimeout(function () {
            f.removeClass('close');
        }, 1300);
    })

    f.submit(function (e) {
        e.preventDefault();
        m.html('Thanks, high five!').addClass('show');
        f.addClass('explode');
        setTimeout(function () {
            s.val('');
            f.removeClass('explode');
            m.removeClass('show');
        }, 3000);
    })

});