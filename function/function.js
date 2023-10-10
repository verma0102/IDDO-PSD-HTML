$(function () {
    $(".top").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        })
    });

    $("nav a").click(function (e) {
        e.preventDefault();
        const x = $(this).attr("href");
        const y = $(x).offset().top;
        $("html,body").animate({
            scrollTop: y - 80
        })
    });


    $(".accordion li a").click(function (e) {
        e.preventDefault();
        var t = $(this);
        if ($(this).hasClass("active")) {
            t.next().slideUp(500, function () { t.removeClass("active"); });
        }
        else {
            $(".accordion p").slideUp(500);
            setTimeout(function () { $(".accordion a").removeClass("active"); }, 500)
            t.next().slideDown(500, function () { t.addClass("active") });
        }

    });

    $("#portfolio .btn").click(function () {
        $("#portfolio .btn").removeClass("active");
        $(this).addClass("active");
    });


    $(".slider").bxSlider({
        auto: true,
        controls: false,
        pause: 5000,
        autoHover: true
    });


    $(".btn-mob").click(function () {
        $(".collapse").slideToggle();
        $(this).toggleClass("active");
    })

});    