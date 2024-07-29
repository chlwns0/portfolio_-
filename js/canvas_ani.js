   let timeline;
   let isFn = false;

    $(window).scroll(function(){
                
        if(isFn){return; }
        
        var scr_top = $(this).scrollTop();
        if(  scr_top>=$("#sub5").position().top-400  &&  scr_top<= $("#sub5").position().top+50    ){

            //캔버스준비
        let canv1 = $("#canvas1")[0].getContext("2d");

        let deg1 = 0;
        timeline = setInterval( canv1ani, 60 );

        function canv1ani(){
            //현재값 += 속도값*(도착값-현재값);
            isFn = true;
            deg1 += 0.02*(2-deg1);

            canv1.clearRect(0,0, 280,280); //캔버스지움

            canv1.lineWidth = "30";
            canv1.lineCap = "round";
            canv1.strokeStyle ="#5b5293";
            canv1.beginPath();
            canv1.arc( 140, 140, 120, Math.PI*deg1, -1.5, true );
            canv1.stroke();
        }
    }
  

        //캔버스준비
        let canv2 = $("#canvas2")[0].getContext("2d");

        let deg2 = 0;
        timeline = setInterval( canv2ani, 60 );

        function canv2ani(){
            //현재값 += 속도값*(도착값-현재값);
            isFn = true;
            deg2 += 0.02*(2-deg2);

            canv2.clearRect(0,0, 280,280); //캔버스지움

            canv2.lineWidth = "30";
            canv2.lineCap = "round";
            canv2.strokeStyle ="#5b5293";
            canv2.beginPath();
            canv2.arc( 140, 140, 120, Math.PI*deg2, -1.5, true );
            canv2.stroke();
        }
        

        //캔버스준비
        let canv3 = $("#canvas3")[0].getContext("2d");

        let deg3 = 0;
        timeline = setInterval( canv3ani, 60 );

        function canv3ani(){
            //현재값 += 속도값*(도착값-현재값);
            isFn = true;
            deg3 += 0.02*(2-deg3);

            canv3.clearRect(0,0, 280,280); //캔버스지움

            canv3.lineWidth = "30";
            canv3.lineCap = "round";
            canv3.strokeStyle ="#5b5293";
            canv3.beginPath();
            canv3.arc( 140, 140, 120, Math.PI*deg3, -1.5, true );
            canv3.stroke();
        }
    });