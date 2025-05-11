//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});







$(".procedure-show").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                dots: true,
                fade: true,
            }
        }
    ]
});


$('.gallery-show__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.gallery-show__nav',
    infinite: true,
    autoplay: false,
    focusOnSelect: true,
    pauseOnHover:false,
});
$('.gallery-show__nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.gallery-show__for',
    dots: false,
    focusOnSelect: true,
    infinite: true,
});

$('.work-banner').slick({
    dots: true,
    focusOnSelect: true,
    pauseOnHover:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    cssEase: 'linear'
});

$(function(){
    $('.js-bar').slimScroll();
});

$('.popup-show__close').on('click', function(){
    $(".popup").removeClass("active");
    $("html").removeClass("js-locked");
});

$('.js-popup-ct').on('click', function(e){
    e.preventDefault();
    $("#popup-ct").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-noti').on('click', function(e){
    e.preventDefault();
    $("#popup-noti").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-noti02').on('click', function(e){
    e.preventDefault();
    $("#popup-noti--gift").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-gift').on('click', function(e){
    e.preventDefault();
    $("#popup-gift").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-forget').on('click', function(e){
    e.preventDefault();
    $("#popup-forget").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-login').on('click', function(e){
    e.preventDefault();
    $("#popup-login").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-task').on('click', function(e){
    e.preventDefault();
    $("#popup-task").addClass("active");
    $("html").addClass("js-locked");
});
$('.js-popup-history').on('click', function(e){
    e.preventDefault();
    $("#popup-history").addClass("active");
    $("html").addClass("js-locked");
});

$(function () {
    var headerHeight = $('#header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top ;
            $('body,html').stop().animate({scrollTop: position}, 1000);
        }, 100);
    }
    
    jQuery('.js-scroll').click(function(e) {
        $(".js-mobile").removeClass("js-mobile--close");
        $("html").removeClass("js-locked");
        $(".header-nav").fadeOut();
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 1000);
        return false;
        e.preventDefault();
    });
    
});

// $(function () {
//     objectFitImages('img');
// });


//matchHeight
// jQuery(function ($) {
//     $('.news .item').matchHeight();
// });



//fade
// $(window).on('scroll load assessFeatureHeaders', function(){
//     var scrollTop = $(window).scrollTop();
//     var appearenceBuffer = 60;
//     var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
//     $('body').toggleClass('scrolled-down', scrollTop > 0);
//     $('.js-scrollin:not(.active)').filter(function(){
//         var offset = $(this).offset().top;
//         var height = $(this).outerHeight();
//         return offset + height >= scrollTop && offset <= windowBottom;
//     }).addClass('active');
// });


//backtop
jQuery(document).ready(function ($) {
    $('.js-backtop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});