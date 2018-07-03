var btn = document.getElementById( 'button' );

btn.addEventListener( 'click', function() {
  document.body.style.backgroundColor = "#FA824C";
});

// Changes background color to coral after listening for button click

document.getElementById( 'datebutton' ).addEventListener('dblclick', function() {
  document.getElementById('date').innerHTML = Date();
});

// Displays time and date after listening for double button click

window.addEventListener( 'resize', function(){
    document.getElementById( 'window' ).innerHTML = 'Wow, this window is changing!';
});

// Displays time and date after listening for double button click
