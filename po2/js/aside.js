/*var asideTop=parseInt($('.top_btn').css('bottom'));
$(window).on('scroll',function(){
  var scv=$(window).scrollTop();
  $('.top_btn').stop().animate({bottom:scv+asideTop+"px"},500);
});*/
$('.top_btn').click(function(){
  $('html, body').stop().animate({scrollTop:0},1000,'swing');
});

$(document).ready(function(){
  $('#popup').draggable({
    cursor:'move'
  });
});

/* cookie */
if($.cookie('pop') != 'nothing') $('#popup').hide();//pop 쿠키값에 no가 저장되어있지 않으면 popup을 보여준다.
$('#close1').click(function(){
  $('#popup').fadeOut('fast');
});//닫기 버튼을 누르면 popup을 사라지게 한다.
$('#close24').click(function(){
  $.cookie('pop','nothing',{expires:1});
  $('#popup').fadeOut('fast');
});

/*mobile navigation*/
$('.menu_btn').click(function(){
  $('#mob_nav').animate({right:0},500);
})
$(document).ready(function(){
  $('.mob_lnb>ul>li>ul').hide();
  $('.mob_lnb>ul>li').click(function(){
    $('.mob_lnb>ul>li>ul').hide();
  });
  $('.mob_lnb>ul>li').click(function(){
    $(this).find('ul').show(300);
  });
  $('.close_btn').click(function(){
    $('#mob_nav').animate({right:'-240px'},500);
  })
});




/**/
