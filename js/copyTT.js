function mysv(){
    var txt = document.getElementById('mytxt')
    txt.select();

    if( navigator.clipboard.writeText(txt.value)){
        alert("Copy to clip board")
    }
}
function myFunc(){
    var copyTxt =  document.getElementById('myInput');

    copyTxt.select();

   if( navigator.clipboard.writeText(copyTxt.value)){
       alert("Copy to clip board")
   }
}
function black(){
    var black = document.getElementById('mytxt', );
    var nblack = document.getElementById('box1');
    var body = document.getElementById('body');
    var moon = document.getElementById('sun');
    var aco =  document.getElementById('myheader');
    body.style.backgroundColor = "rgb(36, 36, 36)"
    black.style.backgroundColor = "rgb(36, 36, 36)"
    var my = document.getElementById('myyy');
    aco.style.display = "none"
    my.style.display= "block"
    my.style.marginLeft= '220px'
    my.style.marginTop = '-50px'
    my.style.width = "25px"
    black.style.color = 'white'
    nblack.style.backgroundColor = "rgb(36, 36, 36)"
}
function white(){
    var black = document.getElementById('mytxt', );
    var nblack = document.getElementById('box1');
    var body = document.getElementById('body');
    // var moon = document.getElementById('sun');
    var aco =  document.getElementById('myheader');
    body.style.backgroundColor = "white"
    black.style.backgroundColor = "white"
    var my = document.getElementById('myyy');
    aco.style.display = "block"
    my.style.display= "none"
    aco.style.marginLeft= '220px'
    aco.style.marginTop = '-50px'
    aco.style.width = "25px"
    black.style.color = 'black'
    nblack.style.backgroundColor = "white"
}
function opens(){
    document.getElementById('list').style.display = 'block'
    // document.getElementById('list').style.position = 'fixed'
}
function closes(){
    document.getElementById('list').style.display = 'none'
    // document.getElementById('list').style.position = 'fixed'
}