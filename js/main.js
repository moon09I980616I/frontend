// 스크롤라
$('.animate').scrolla();

var pager=$(".pager ul li");
var cont=$("#wrap>section");

$(window).scroll(function(){
    var sct=$(window).scrollTop();
    cont.each(function(){
        var tg=$(this);
        var i=tg.index();
        if(tg.offset().top<=sct){
            pager.removeClass("on");
            pager.eq(i).addClass("on");
           };
    });
});

pager.click(function(){
    var active=$(this).index();
    var top=$("html , body").scrollTop();
    var tt=cont.eq(active).offset().top;
    if(top==0) top=$("body").scrollTop();
    $("html , body").stop().animate({
        scrollTop:tt
    },400);
    return false;
});

AOS.init();

// 컬러박스
$('#rd2Cont .inner .btnPt a').colorbox({rel:'pt'});
$('#owork .inner ul li a').colorbox({rel:'etc'});
