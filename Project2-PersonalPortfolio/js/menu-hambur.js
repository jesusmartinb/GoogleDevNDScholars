/*
 * Open the drawer when the menu ison is clicked.

 The open class is added with javascript when
 you click on the hamburger menu,
 scrolling the navigation on the canvas, when you
 click on the canvas the open class disappears and
 the navigation is retracted again
 */

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav-principal');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});
