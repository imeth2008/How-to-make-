window.onscroll = function(){myfunction()};
var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function myfunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky")
        document.getElementById('s-nav').style.height = "620px"
        document.getElementById('s-nav').style.marginTop = "-10px"

    }else{
        header.classList.remove("sticky")
        
        document.getElementById('s-nav').style.height = "545px"
        document.getElementById('s-nav').style.marginTop = "0px"
    }
}
