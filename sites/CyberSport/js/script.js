var Kontent5 = new Vue ({
  el: '#Kontent5',
  data: {
    ModalBack: false,
    Close: true
  }
});

var Gallery2 = new Vue ({
  el: '#Gallery2',
  data: {
    ModalBack: false
  }
});

var header = new Vue ({
  el: '.header-block',
  data: {
    MenuPhone: false,
    Close: false,
    Open: true,
  }
});

/*jQuery(document).ready(function(){
$(function (){
    $(".Kontent5blocksdark").click(function(){
    $("#ModalBack:hidden").show()
    $("#ModalOkno").html('<div id="Kontent5Blocksimg"></div>');
 });
    $("#Close").click(function(){
    $("#ModalBack").hide();
 });
    $(".Kontent5blocksdark2").click(function(){
    $("#ModalBack:hidden").show()
    $("#ModalOkno").html('<div id="Kontent5Blocksimg2"></div>');
 });
    $("#ModalBack").click(function(){
    $("#ModalBack").hide();
 });
    $(".Kontent5blocksdark3").click(function(){
    $("#ModalBack:hidden").show()
    $("#ModalOkno").html('<div id="Kontent5Blocksimg3"></div>');
 });
    $("#ModalBack").click(function(){
    $("#ModalBack").hide();
 });
    $(".Kontent5blocksdark4").click(function(){
    $("#ModalBack:hidden").show()
    $("#ModalOkno").html('<div id="Kontent5Blocksimg4"></div>');
 });
    $("#ModalBack").click(function(){
    $("#ModalBack").hide();
 });
    $(".Kontent5blocksdark5").click(function(){
    $("#ModalBack:hidden").show()
    $("#ModalOkno").html('<div id="Kontent5Blocksimg5"></div>');
 });
    $("#ModalBack").click(function(){
    $("#ModalBack").hide();
 });
    $(".Kontent5blocksdark6").click(function(){
    $("#ModalBack:hidden").show()
    $("#ModalOkno").html('<div id="Kontent5Blocksimg6"></div>');
 });
    $("#ModalBack").click(function(){
    $("#ModalBack").hide();
 });
    $("#Open").click(function(){
    $("#MenuPhone:hidden").slideDown().show(500)
 });
    $("#Close").click(function(){
    $("#MenuPhone").slideUp().hide(500);
 });
});
});*/



/* Прокрутка по нажатию*/
$(document).ready(function(){
    $('#KontentSilka').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });

$(document).ready(function(){
    $("#Menu").on("click","#MenuSilka", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});