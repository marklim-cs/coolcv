gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

/* указать оболочку которую мы будем использовать для плавного скрола, 
опредеояем к каким элементам нам привязать скрол*/

if (ScrollTrigger.isTouch !==1) { /*если мы не на устройстве, которое управляет с помощью touch screen, сенсор, то наши функции выполняются*/
ScrollSmoother.create({
wrapper: ".wrapper",        /*оболочка*/
content: '.content',      /*то что будет плавать внутри врапера*/
smooth: 1.5,
effects: true,
})

/* от - до*/
/*чтоб исчезал head при сколе*/
gsap.fromTo('.hero-section', {opacity: 1 }, {
    opacity: 0, 
    scrollTrigger: {
        trigger: ".hero-section", 
        start: 'center', 
        end: '820',
        scrub: true /*возвращаем элемент, предыдущее значение*/
    }
})

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

/*создаем цикл, чтоб картинки выезжали по очереди, а не все вместе, 
то есть каждая картинка проходит цикл от x: -500 до 0*/
itemsL.forEach(item => {
    gsap.fromTo(item, {x: -100,opacity: 0}, 
    {opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item, 
            start: '-850',     /*появляется item слишком поздно, когда мы уже почти прокрутили, потому добавляем start и end*/
            end: '-100',      /*средняя линия и на ней мы показываем на какой позиции начать анимацию и на какой закончить*/
            scrub: true,
        }

})
})

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
    gsap.fromTo(item, {x: 100, opacity: 0},  /*если оставим -100 то элементы будут появляться тоже слева, потому меняем на + */
    {opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item, 
            start: '-850',    
            end: '-100',       
            scrub: true,
        }

})
})


}