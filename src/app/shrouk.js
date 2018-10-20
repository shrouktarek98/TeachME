function na( name){
    console.log(name);
}
na("shrouk");
window.onscroll = function(){
    var head = document.getElementById('header');
    
    if(window.scrollY === 0){
        head.style.background ="none";
        head.classList.remove('h1');
        head.classList.add('h2');
    }
    else{
        head.style.backgroundColor ="#fff";
        head.classList.remove('h2');
        head.classList.add('h1');
    }
}
