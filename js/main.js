$(function () {

    $(function () {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();
            sct > 0
                ? $('.header').addClass('on')
                : $('.header').removeClass('on')
        });
    });

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        effect: "fade",
        pagination: {
            el: ".main_visual .dots",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".main_visual .right",
            prevEl: ".main_visual .left",
        },
    });

    const noticeSlide = new Swiper('.notice_slide', {
        loop: true,
        direction: "vertical",
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
    });

    const bestSlide = new Swiper('.best_slide', {
        loop: false,
        slidesPerView: 3,
        direction: "vertical",
        spaceBetween: 10,
        grid: {
            rows: 3,

        },
        spaceBetween: 10,
        navigation: {
            nextEl: ".main_menulist .right",
            prevEl: ".main_menulist .left",
        },
        breakpoints: {
            768: {
                direction: 'horizontal',
                slidesPerView: 5,
                loop: true,
            },
        },
    });
    const weeklySlide = new Swiper('.weekly_slide', {
        loop: false,
        slidesPerView: 5,
        direction: "vertical",
        spaceBetween: 10,
        navigation: {
            nextEl: ".main_menulist .right",
            prevEl: ".main_menulist .left",
        },
        breakpoints: {
            768: {
                direction: 'horizontal',
                slidesPerView: 5,
                loop: true,
            },
        },
    });

    $('.main_menulist .list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_menulist .menu>*').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_menulist .list li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    const storeSlide = new Swiper('.store_slide', {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 1,
        grabCursor: true,
        centeredSlides: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".main_store .right",
            prevEl: ".main_store .left",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
    });

    $('.main_today .timer').countdown('2023/07/15', function (event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });

    const moSlide = new Swiper('.mo_slide', {
        slidesPerView: "auto",
        spaceBetween: 30,
        // centeredSlides: true,
    })


    $('.footer .bottom .btn').on('click', function (e) {
        e.preventDefault();
        $('.footer .bottom .address').toggleClass('on');
    });

    $('.header .mobile_btn').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
    })

    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle(500);
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });

    // $(window).on('resize', function () {
    //     $('.gnb .sub').removeAttr('style')
    // })

})

