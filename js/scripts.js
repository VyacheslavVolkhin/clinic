$(document).ready(function(){


    //item-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-video').attr('data-video');
        $(this).parents('.item-video').addClass('active');
        $(this).parents('.item-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })
    
    
    //price toggle
    $('.item-price-outer-wrap.open .price-items-wrap').show(0);
    $('.item-price-outer-wrap .price-title-wrap').on('click', function() {
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open').find('.price-items-wrap').slideUp(200);
        } else {
            $(this).parent().addClass('open').find('.price-items-wrap').slideDown(200);
        }
        return false;
    })

    //tiles-slider-box
    if (!!$('.tiles-slider-box .slider-wrap.columns-3').offset()) {
        $('.tiles-slider-box .slider-wrap.columns-3 .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    //tiles-slider-box
    if (!!$('.tiles-slider-box .slider-wrap.columns-4').offset()) {
        $('.tiles-slider-box .slider-wrap.columns-4 .slider').slick({
            dots: true,
            slidesToShow: 4,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }


    //reviews-box
    if (!!$('.reviews-box').offset()) {
        $('.reviews-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                    }
                },
            ]
        });
    }


    //news-box
    if (!!$('.news-box').offset()) {
        $('.news-box .slider').slick({
            dots: true,
            slidesToShow: 2,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
	
});


