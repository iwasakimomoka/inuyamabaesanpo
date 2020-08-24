window.onload = function () {
    scroll_effect();

    $(window).scroll(function () {
        scroll_effect();
    });

    function scroll_effect() {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 80) {
                $(this).addClass('effect-scroll');
            }
        });
    }
};



$(function () {
    $(window).scroll(function () {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 80) {
                $(this).addClass('effect-scroll');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.effect-fade1').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 80) {
                $(this).addClass('effect-scroll');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.effect-fade2').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 80) {
                $(this).addClass('effect-scroll');
            }
        });
    });
});
