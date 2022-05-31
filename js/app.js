$('.star').rateYo({
  rating: 4.0,
  starWidth: "12px",
  spacing   : "1px",
  ratedFill: "#333333"
});

$('.content-info__select, .content-info__input').styler({

});


$('.content-slider__thumb').slick({
    asNavFor: '.content-slider__big',
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    easing: 'ease',
    slidesToScroll: 1,
    draggable: false, 
    responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 5,
        easing: 'ease',
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 5,
        easing: 'ease',
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
$('.content-slider__big').slick({
    asNavFor: '.content-slider__thumb',
    draggable: false,
    arrows: false,
    fade: true
});



  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

    const header = $('.header'); // находим header и записываем в константу

    let prevScroll = $(window).scrollTop(); // узнаем на сколько была прокручена страница ранее
    let currentScroll;

    $(window).scroll(() => {

      currentScroll = $(window).scrollTop();

      const headerHidden = () => header.hasClass('header_hidden');

      if (currentScroll > prevScroll && !headerHidden()) {
        header.addClass('header_hidden');
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.removeClass('header_hidden');
      }

      prevScroll = currentScroll;

    });

  };

  onScrollHeader(); // вызываем основную функцию onScrollHeader

$('.header-nav__btn').on('click', function () {
  $('.header-nav__list').toggleClass('active');
});