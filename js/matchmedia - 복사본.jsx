$(function(){
    $(window).resize(function(){
        let on_off = false;
        

        if( matchMedia( 'screen and (max-width:768px)').matches ){          
            

            $('.nav_btn').on('click',function(){
                on_off =!on_off;

                if(on_off){

                    $(this).parent().parent().siblings('aside').animate({ 'z-index':'30',
                        'left':'0',
                        'top':'0',
                        'opacity':'1',
                    'display':'block'}, 1000, 'easeOutExpo').show();
                   // $(this).parent().parent().siblings('aside').addClass('on');

                }else{
                    $(this).parent().parent().siblings('aside').animate({ 'z-index':'10',
                        'left':'-100%',
                        'top':'0',
                        'opacity':'0',
                    'display':'none'}, 1000, 'easeOutExpo').hide();
                  //  $(this).parent().parent().siblings('aside').removeClass('on');

                }
                
            });

        }else{

           
        }
    });
});