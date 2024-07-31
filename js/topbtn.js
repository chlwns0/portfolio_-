$(function(){

    $(window).scroll(function(){

        let scr_top = $(this).scrollTop();

        if(scr_top>$('#sub1_wrap').position().top){
            $('#quick').addClass('on');
        }else{
            $('#quick').removeClass('on');
        }
    });


});