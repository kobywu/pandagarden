window.onscroll = function() {myFunction()};

var navbar = document.getElementById("centered_nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function topbar() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
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
