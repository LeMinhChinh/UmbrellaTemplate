$(document).ready(function(){
    // Scroll header nav
    $( window ).scroll(function() {
        var height = $(window).scrollTop();
        if(height >= 1000){
            $('.header-nav').addClass('sticky-menu');
        }else{;
            $('.header-nav').removeClass('sticky-menu')
        }
    });

    // Open header nav
    $('body').on('click', '.header-nav.sticky-menu #mega-menu-title', function(){
        if($('#mega-menu').hasClass('active')){
            $('#mega-menu').removeClass('active');
        }else{
            $('#mega-menu').addClass('active');
        }
    });
    
    // Open off-canvas
    $('body').on('click','[data-open-off-canvas="data-open-off-canvas"]', function(e){
        e.preventDefault();
        $('.modal-overlay').addClass('modal-overlay-open');
        $('#off-canvas').addClass('off-canvas-open');
        $('body').addClass('not-scroll');
        $('.header-content').css('z-index', 0);
        $('.section-product-content').css('z-index', 0);
        if($(this).attr('data-open') === 'open-menu'){
            $('#off-canvas').addClass('off-canvas-left');
            $('#main-menu-mobile').addClass('menu-open');
        }else{
            $('#off-canvas').addClass('off-canvas-right');
            $('#main-cart-mobile').addClass('cart-open');
        }
    });

    $('body').on('click','.modal-close, .off-canvas-open', function(e){
        $('.modal-overlay').removeClass('modal-overlay-open');
        $('#off-canvas').removeClass('off-canvas-open off-canvas-right off-canvas-left');
        $('body').removeClass('not-scroll');
        $('#main-menu-mobile').removeClass('menu-open');
        $('#main-cart-mobile').removeClass('cart-open');
    });
})