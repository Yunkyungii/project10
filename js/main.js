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
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
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
        loop: true,
        slidesPerView: 5,
        navigation: {
            nextEl: ".main_menulist .right",
            prevEl: ".main_menulist .left",
        },
    });
    const weeklySlide = new Swiper('.weekly_slide', {
        loop: true,
        slidesPerView: 5,
        navigation: {
            nextEl: ".main_menulist .right",
            prevEl: ".main_menulist .left",
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
        // spaceBetween: 0,
        slidesPerView: 3,
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
    });


})