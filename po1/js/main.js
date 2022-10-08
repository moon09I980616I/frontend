AOS.init();


$(".gnb .d1").mouseover(function(){
    $(this).find(".sub").stop().slideDown(300);
}).mouseout(function(){
    $(this).find(".sub").stop().slideUp(300);
})

$('.slider ul').bxSlider({
  auto: true,
    pause: 3300,
    speed: 1000,
    autoControls:false,
    pager:false,
});

