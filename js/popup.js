$(function(){
//창이 열리는 애니메이션 생성---------------

$('#location_icon').click(function(e){
    e.preventDefault();
    $('#store_bg').show();
    $('#store_bg').animate({'opacity':'1'},1000,'easeOutExpo');
});


//창이 닫히는 애니메이션----------------

$('#popup>span').click(function(e){
    e.preventDefault();
    $('#store_bg').animate({'opacity':'0'}, 1000, 'easeOutExpo');
    $('#store_bg').hide();
});
});