$(function(){

    $('header>nav>ul>li').on('mouseenter focus',function(){
        $('ol').stop().slideDown();
        $('header #submenu_bg').stop().slideDown();
        
    });
    $('header>nav>ul>li>ol').on('mouseleave blur',function(){
        $('ol').stop().slideUp();
        $('header #submenu_bg').stop().slideUp();
       
    });
});