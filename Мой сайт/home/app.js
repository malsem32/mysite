$(function(){
    //заносим в переменную класс header
    let header = $("#header");
    //заносим в переменную класс intro
    let intro = $("#intro");
    //создаем переменную
    let introH
    //создаем переменную с позицией скролла
    let scrollPos = $(window).scrollTop();
    //постоянное обновление позиции при скролле, загрузке, изменении размера страницы
    //созздание переменных класса nav__link для изменения заднего фона при перемещении по сайту
    let start__nav = $(".nav__link.start__nav");
    let services__nav = $(".nav__link.services__nav");
    let team__nav = $(".nav__link.team__nav");
    let skills__nav = $(".nav__link.skills__nav");
    let portfolio__nav = $(".nav__link.portfolio__nav");
    //создание переменных с отступом блоков от считая от верха
    let elementOffset_services = $("#services").offset().top;
    let elementOffset_team = $("#team").offset().top;
    let elementOffset_skills = $("#skills").offset().top;
    let elementOffset_portfolio = $("#portfolio").offset().top;

    $(window).on("scroll load resize", function() {
        //обновляем переменную высоты блока intro
        introH = intro.innerHeight();
        //обновление текущей позиции скролла
        scrollPos = $(this).scrollTop();
        //если позиция скрола больше intro, добавляем класс; если меньше - удаляем
        if(scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        
        //добавление класса элементу nav__link при услови, что человек находится на том или ином блоке сайта (для изменения фона ссылок в шапке)        
        if(scrollPos < elementOffset_services) {
            start__nav.addClass("fixed");
            services__nav.removeClass("fixed");
            team__nav.removeClass("fixed");
            skills__nav.removeClass("fixed");
            portfolio__nav.removeClass("fixed");
        } else if(scrollPos < elementOffset_team) {
            start__nav.removeClass("fixed");
            services__nav.addClass("fixed");
            team__nav.removeClass("fixed");
            skills__nav.removeClass("fixed");
            portfolio__nav.removeClass("fixed");
        } else if(scrollPos < elementOffset_skills) {
            start__nav.removeClass("fixed");
            services__nav.removeClass("fixed");
            team__nav.addClass("fixed");
            skills__nav.removeClass("fixed");
            portfolio__nav.removeClass("fixed");
        } else if(scrollPos < elementOffset_portfolio) {
            start__nav.removeClass("fixed");
            services__nav.removeClass("fixed");
            team__nav.removeClass("fixed");
            skills__nav.addClass("fixed");
            portfolio__nav.removeClass("fixed");
        } else if(scrollPos >= elementOffset_portfolio) {
            start__nav.removeClass("fixed");
            services__nav.removeClass("fixed");
            team__nav.removeClass("fixed");
            skills__nav.removeClass("fixed");
            portfolio__nav.addClass("fixed");
        }


    });


    let nav = $('#nav');
    let nav__toogle = $('#nav__toogle');

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show")

        $("html, body").animate({
            scrollTop: elementOffset + 4
        }, 1000);

    });


    // nav__toogle

    

    nav__toogle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });



    
    

});



// Анимация Заголовков
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
    gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
        duration: 1.25,
        y: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeave: function () {
    gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
    gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
        duration: 1.25,
        y: 0,
        autoAlpha: 1,
        ease: "back",
        overwrite: "auto"
        }
    );
    },
    onLeaveBack: function () {
    gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
});
});