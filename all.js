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


function topbar() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } 
	else if(x.className === "rc_nav sticky") {
        x.className += " responsive";
    }
	else {
        x.className = "rc_nav";
    }
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("centered_nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

