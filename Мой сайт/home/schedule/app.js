$(function(){
    //заносим в переменную класс header
    let header = $("#header");
    //заносим в переменную класс intro
    let monday = $("#monday");
    //создаем переменную
    let mondayH
    //создаем переменную с позицией скролла
    let scrollPos = $(window).scrollTop();
    //постоянное обновление позиции при скролле, загрузке, изменении размера страницы
    //созздание переменных класса nav__link для изменения заднего фона при перемещении по сайту
    let monday__nav = $(".nav__link.monday__nav");
    let tuesday__nav = $(".nav__link.tuesday__nav");
    let wednesday__nav = $(".nav__link.wednesday__nav");
    let thursday__nav = $(".nav__link.thursday__nav");
    let friday__nav = $(".nav__link.friday__nav");
    //создание переменных с отступом блоков от считая от верха
    let elementOffset_tuesday = $("#tuesday").offset().top;
    let elementOffset_wednesday = $("#wednesday").offset().top;
    let elementOffset_thursday = $("#thursday").offset().top;
    let elementOffset_friday = $("#friday").offset().top;

    $(window).on("scroll load resize", function() {
        //обновляем переменную высоты блока intro
        mondayH = monday.innerHeight();
        //обновление текущей позиции скролла
        scrollPos = $(this).scrollTop();
        //если позиция скрола больше intro, добавляем класс; если меньше - удаляем
        if(scrollPos > mondayH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        
        //добавление класса элементу nav__link при услови, что человек находится на том или ином блоке сайта (для изменения фона ссылок в шапке)        
        if(scrollPos < elementOffset_tuesday) {
            monday__nav.addClass("fixed");
            tuesday__nav.removeClass("fixed");
            wednesday__nav.removeClass("fixed");
            thursday__nav.removeClass("fixed");
            friday__nav.removeClass("fixed");
        } else if(scrollPos < elementOffset_wednesday) {
            monday__nav.removeClass("fixed");
            tuesday__nav.addClass("fixed");
            wednesday__nav.removeClass("fixed");
            thursday__nav.removeClass("fixed");
            friday__nav.removeClass("fixed");
        } else if(scrollPos < elementOffset_thursday) {
            monday__nav.removeClass("fixed");
            tuesday__nav.removeClass("fixed");
            wednesday__nav.addClass("fixed");
            thursday__nav.removeClass("fixed");
            friday__nav.removeClass("fixed");
        } else if(scrollPos < elementOffset_friday) {
            monday__nav.removeClass("fixed");
            tuesday__nav.removeClass("fixed");
            wednesday__nav.removeClass("fixed");
            thursday__nav.addClass("fixed");
            friday__nav.removeClass("fixed");
        } else if(scrollPos >= elementOffset_friday) {
            monday__nav.removeClass("fixed");
            tuesday__nav.removeClass("fixed");
            wednesday__nav.removeClass("fixed");
            thursday__nav.removeClass("fixed");
            friday__nav.addClass("fixed");
        }


    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset + 4
        }, 1000);

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


    nav__toogle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
    

});