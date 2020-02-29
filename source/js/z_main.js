jQuery(document).ready(function($) {
    //- mobile nav
    // $("#menu").mmenu({
    //     "extensions": [
    //         "fx-menu-zoom",
    //         "pagedim-black"
    //     ]
    // });
    // $(".mh-head.mm-sticky").mhead({
    //     scroll: {
    //         hide: 200
    //     }
    // });
    // $(".mh-head:not(.mm-sticky)").mhead({
    //     scroll: false
    // });
    $("#menu").mmenu({
        extensions: ["position-bottom", "fullscreen", "theme-black", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset"],
        navbar: {
            title: "海克力斯HiClicks"
        },
        navbars: [{
            height: 2,
            content: '<img src="images/user_defulat.png" />'
        }, {
            content: ["prev", "title"]
        }]
    }, {});
    $(".mh-head.mm-sticky").mhead({
        scroll: {
            hide: 200
        }
    });
    $(".mh-head:not(.mm-sticky)").mhead({
        scroll: false
    });

    $("#filter_nav").mmenu({
        extensions: [
            "position-left",
            "pagedim-black"
        ],
        navbar: {
            title: "所有商品篩選"
        }
    });
    $("#filter_sale_nav").mmenu({
        extensions: [
            "position-left",
            "pagedim-black"
        ],
        navbar: {
            title: "賣場篩選"
        }
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
    var moHeight = $(window).scrollTop() + $(window).height();
    var foHeight = $(document).height() - $("footer").height();
    if ($('#gotop').length > 0) {
        if (moHeight < foHeight) {
            $('#gotop').removeClass('foo_top');
        } else {
            $('#gotop').addClass('foo_top');
        }
    }
    if ($('#transMath').length > 0) {
        if (moHeight < foHeight) {
            $('#transMath').removeClass('foo_top');
        } else {
            $('#transMath').addClass('foo_top');
        }
    }
});
$(function() {
    //-go top
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    //-tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});