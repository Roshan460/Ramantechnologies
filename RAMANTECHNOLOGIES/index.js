var btn=document.getElementById("btn");
var light=document.getElementById("light");

  window.onload =function togglebtn(){
    btn.classList.toggle("active");
light.classList.toggle("on");
}

function togglebtn(){
    btn.classList.toggle("active");
light.classList.toggle("on");
// document.getElementById("light").style.transition = "0s";
}