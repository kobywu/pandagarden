window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var x = document.getElementById("navbar");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function hover(el){
	el.classList.add("hovereffect");
}
function nohover(el){
	el.classList.remove("hovereffect");
}
function tabhover(el){
	el.classList.add("tabhover");
}
function none(el){
	el.classList.remove("tabhover");
}