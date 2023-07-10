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

})