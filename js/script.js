function mylist() {
    document.getElementById('s-lang').style.display = 'none'
}
function show(){
    document.getElementById('s-lang').style.display = 'block'
}
function myFunc(){
    var copyTxt =  document.getElementById('myInput');

    copyTxt.select();

   if( navigator.clipboard.writeText(copyTxt.value)){
       alert("Copy to clip board")
   }
}
  var i = 0;
  var txt = 'Hello !! Welcome to my web site. this site helps to creat your web site .Thank you use our web site';
  var speed = 50;
function type2(){

    if(i < txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type2,speed)
    }
}
window.onscroll = function(){myfunction()};
var header = document.getElementById('myHeader');
var sticky = header.offsetTop;

function myfunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
}