$(function(){

    //마우스 휠 이벤트
    // $(window).on('mousewheel.disableScroll', function(e){
    //     e.preventDefault();
    //     //return false
    //  });
     //마우스휠 이벤트
     $(window).mousewheel(function(e,delta){
        if($('html,body').is(':animated')){ return;}
        let page_height = $(this).height();

        if(delta<0){
            $('html,body').stop().animate({ scrollTop: '+='+page_height }, 1000, 'easeOutExpo');
        }else{ //delta>0
            $('html,body').stop().animate({ scrollTop: '-='+page_height }, 1000, 'easeOutExpo');
        }

     });


    $('.scroll').click(function(e){
        e.preventDefault();
        if($('html,body').is(':animated')){ return;}
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000, "easeOutExpo");

        $(this).addClass('active');

        $('.scroll').not(this).removeClass('active');

    });

});