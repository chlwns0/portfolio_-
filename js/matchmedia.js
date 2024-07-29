$(function(){

   

    $(window).resize(function(){

        let on_off = false;
        

        if( matchMedia( 'screen and (max-width:768px)').matches ){          
            $('.nav_btn').addClass('on');
            $('aside').addClass('on');
            $('.nav_btn').on('click',function(){
                on_off =!on_off;

                if(on_off){

                    if($(this).parent().parent().siblings('aside').is(':animated')){return;}

                    $(this).parent().parent().siblings('aside').animate({ 
                        'left':'0',
                        'top':'0',
                        'opacity':'1'
                    }, 1000, 'easeOutExpo').show();
                   // $(this).parent().parent().siblings('aside').addClass('on');

                }else{ //화면의width값이 769px이상일때 디자인

                   // location.reload();

                    if($(this).parent().parent().siblings('aside').is(':animated')){return;}

                    $('.nav_btn').removeClass('on');
                    $(this).parent().parent().siblings('aside').animate({ 
                        'z-index':'10',                        
                        'top':'0',
                        'left':'-100%',
                        'opacity':'0'
                    }, 1000, 'easeOutExpo').hide();
                  //  $(this).parent().parent().siblings('aside').removeClass('on');

                }
                
            });

        }else{

           
        }
    });
});