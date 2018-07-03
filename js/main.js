var heading = document.getElementsByTagName( 'h1' );
var count = 0;

heading[0].addEventListener( 'click', function() {
  var newPara = document.createElement( 'p' );
  count += 1;
  newPara.innerHTML = 'This is click number ' +count;

  document.body.appendChild( newPara );
});
