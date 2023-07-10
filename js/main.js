$(function () {

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
        slidesPerView: 5,
    });
    const weeklySlide = new Swiper('.weekly_slide', {
        slidesPerView: 5,
    });

    $('.main_menulist .list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_menulist .menu>*').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_menulist .list li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })


})