jQuery(document).ready($ => {
	
	//MENU FIJO
	
	
	
	var altura = $('.header-desktop .hero-header-nav').offset().top;
    var barraAltura = $('.header-desktop .hero-header-nav').innerHeight();
    var queryMin = window.matchMedia('(min-width: 977px)');
    var queryMax = window.matchMedia('(max-width: 976px)');
    $('.header-desktop .contenido-header-inferior img').css('opacity', 0);

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.header-desktop .hero-header-nav').addClass('fixed');
            $('.contenido-header-inferior').addClass('transicion0');
            $('.header-desktop .contenido-header-inferior img').css('opacity', 1);
            if (queryMin.matches) {
                $('body').css({ 'margin-top': barraAltura + 'px' });

            }
        } else {
            $('.header-desktop .hero-header-nav').removeClass('fixed');
            $('.contenido-header-inferior').removeClass('transicion0');
            $('.header-desktop .contenido-header-inferior img').css('opacity', 0);
            if (queryMin.matches) {
                $('body').css({ 'margin-top': '0px' });

            }
        }
    });
	
	//SMOOTH SCROLL
	
	var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        offset: 100
    });
	
	
	//SWIPER	
	swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

  


});