jQuery(document).ready(function(){
$(function (){
    $("#Open").click(function(){
    $("#Open").css("opacity","0");
    $(".MenuPhone:hidden").slideDown().show(500);
 });
    $(".Close").click(function(){
    $("#Open").css("opacity","1");
    $(".MenuPhone").slideUp().hide(500);
 });
});
});


/*______________________________________ButtonTop___________________________________________*/

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#KnopkaTop').fadeIn();
 
} else {
 
$('#KnopkaTop').fadeOut();
 
}
 
});
 
$('#KnopkaTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

/*______________________________________С подключением Jqery в HTML_____________________________*/

/*<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>*/