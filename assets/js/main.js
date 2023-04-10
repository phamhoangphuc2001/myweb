$(document).ready(function(){
    $('.image_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        Infinity: true,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
    });
});

$(document).ready(function(){
    $('.img-tour-sightseeing').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        Infinity: true,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 739,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
            ]
    });
});

