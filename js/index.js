var roketLeft =0 ;
var roketBottom =0 ;
var roketCont = document.querySelector('.roket-cont')
var bullet = document.querySelector('#bullet')
var audio = document.querySelector('#audio')

document.addEventListener('keydown', function(e){
    if( e.code == 'ArrowRight' )
    {
        roketLeft+=100;
        roketCont.style.left = roketLeft + 'px'
    }
    else if( e.code == 'ArrowLeft' )
    {
        roketLeft-=100;
        roketCont.style.left = roketLeft + 'px'
    }
    else if( e.code == 'ArrowUp' )
    {
        roketBottom+=100;
        roketCont.style.bottom = roketBottom + 'px'
    }
    else if( e.code == 'ArrowDown' )
    {
        roketBottom-=100;
        roketCont.style.bottom = roketBottom + 'px'
    }
    else if( e.code == 'Space' )
    {
        bullet.style.opacity = 1 ;
        bullet.style.bottom = 400 + 'px' ;
        audio.play()

    }
})