jQuery(document).ready(function () {

    console.log("ready!");

    jQuery(".slider_items").slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".header_menu_item__link, .footer_menu_item__link").on("click", function (event) {
        event.preventDefault();
        if ($("body").hasClass("show_menu")) {
            $("body").removeClass("show_menu")
        } else {
            $("body").addClass("show_menu")
        }
        var id = $(this).attr('href')
            , top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $(".mobile_button").on("click", function (event) {
        if ($("body").hasClass("show_menu")) {
            $("body").removeClass("show_menu")
        } else {
            $("body").addClass("show_menu")
        }
    });
});