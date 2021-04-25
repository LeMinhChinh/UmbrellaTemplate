$( window ).scroll(function() {
    var height = $(window).scrollTop()
    if(height >= 1000){
        $('.header-nav').addClass('sticky-menu')
    }else{
        $('.header-nav').removeClass('sticky-menu')
    }
});
$('body').on('click', '.header-nav.sticky-menu #mega-menu-title', function(){
    if($('#mega-menu').hasClass('active')){
        $('#mega-menu').removeClass('active')
    }else{
        $('#mega-menu').addClass('active')
    }
})