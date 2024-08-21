const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Custom button event listeners
document.querySelector('.custom-button-prev').addEventListener('click', () => {
    swiper.slidePrev();
});

document.querySelector('.custom-button-next').addEventListener('click', () => {
    swiper.slideNext();
});


//Проставление лайка-дизлайка
$('.like-diselike__link').click(function (e) {
    e.preventDefault();
    let currentAction = $(this);
    currentActionText = currentAction.text();
    currentAction.addClass('active');
    console.log(currentActionText);
    currentAction.find('.like-diselike__value').text(Number(currentActionText) + 1);
    currentAction.closest('.like-diselike').addClass('noclick');
});