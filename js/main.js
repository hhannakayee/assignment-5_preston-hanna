var btn = document.getElementById( 'button' );

btn.addEventListener( 'click', function() {
  document.body.style.backgroundColor = "#FA824C";
});

// Changes background color to coral after listening for button click

// document.getElementsByTagName('h2').addEventListener('mouseenter', function() {
//   document.getElementById('date').innerHTML = Date();
// });

var heading = document.getElementById('h2');
var time = new Date();

heading.addEventListener( 'mouseover', function() {
  document.getElementById( 'date' ).innerHTML = n + ' ' + time;
});
