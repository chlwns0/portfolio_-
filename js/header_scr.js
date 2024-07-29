$(function(){

    var didScroll;
// 스크롤시에 사용자가 스크롤했다는 것을 알림 
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
 
    var lastScrollTop = 0;
            var delta = 5;  // 동작의 구현이 시작되는 위치 
            var navbarHeight = $('header').outerHeight();  // 영향을 받을 요소를 선택


            // if (Math.abs(lastScrollTop - scrPos) <= delta)
            //         return;
               
            if (scrPos >= $('#sub3').position().top && scrPos <= $('#sub5').position().top){
            // Scroll Down
                $('header').addClass('on');
            } else {
                $('header').removeClass('on');
                // Scroll Up
                // If did not scroll past the document (possible on mac)...
                // if(scrPos + $(window).height() < $(document).height()) { 
                // $('header').removeClass('on').addClass('on');
                // }
            }

}
});