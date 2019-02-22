
function call(){

    if(window.scrollY  >= 175){
        $('#nav').css('backgroundColor' , '#fff');
        $('#TeachMe').css('color' , '#1cba98');
        $('#rightnav').css('color' , '#1cba98');
        $('#divforlink').css('color' , ' rgba(56,49,68,.5)');
        $('#career').css('color' , ' rgba(56,49,68,.5)');
        $('#lesson').css('color' , ' rgba(56,49,68,.5)');

        $('#informationhead').css('display','none');
        $('#searchhead').css({
            'position': 'fixed',
            'padding' : '0px',
            'z-index' : '1000',
            'top': '42px'
        });
        $('#search').css({
            'width' : '100%',
             'borderRadius' : '0px',
             'height' : '40px',
             'transition': 'all .25s linear'
        });

        if($('#drop').css('width') === $('body').css('width') && $('#drop').css('display') != 'none'){
            $('#drop').css({
                'transform' : 'translateY(45px)'
            });
            $('#informationhead').css('display','none');
            $('#nav').css('backgroundColor' , '#1cba98');
        }
        else{
            $('#drop').css({
                'transform' : 'translateY(-80px)'
            });
            $('#informationhead').css('display','block');
        }
        
    }
    else if(window.scrollY  < 175){
        $('#nav').css('backgroundColor' , '#1cba98');
        $('#TeachMe').css('color' , '#fff');
        $('#rightnav').css('color' , '#fff');
        $('#divforlink').css('color' , '#fff');
        $('#career').css('color' , '#fff');
        $('#lesson').css('color' , '#fff');

        $('#informationhead').css('display','block');
        $('#searchhead').css({
            'position': 'relative',
            'padding' : '40px 0px',
            'z-index' : '0',
            'top': '0px'
        });
        $('#search').css({
            'width' : '350px',
            'borderRadius' : '1.5rem',
            'height' : '50px',
            'transition': 'all 0s linear'
            
        });
        if($('#drop').css('width') === $('body').css('width') && $('#drop').css('display') != 'none'){
            $('#drop').css({
                'transform' : 'translateY(45px)'
            });
            $('#informationhead').css('display','none');
            console.log($('#drop').css('width') + "ggg" + $('body').css('width'));
        }
        else{
            $('#drop').css({
                'transform' : 'translateY(-80px)'
            });
            $('#informationhead').css('display','block');
            console.log($('#drop').css('width') + "ggg" + $('body').css('width'));
        }
        
    }
}

window.onscroll = function(){
    var head = document.getElementById('header');
    
   
    if(window.scrollY === 0 && head!==null){
        head.style.background ="none";
        head.classList.remove('h1');
        head.classList.add('h2');
    }
    else if(head!==null){
        head.style.backgroundColor ="#fff";
        head.classList.remove('h2');
        head.classList.add('h1');
    }
    
   call();
   
   
    
}

window.onresize = function(){
    call();
}
