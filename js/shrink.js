/* https://www.jqueryscript.net/menu/Shrink-Nav-On-Scroll-jQuery-CSS3.html */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-container").style.fontSize = "30px";
  } else {
    document.getElementById("nav-container").style.fontSize = "90px";
  }
}