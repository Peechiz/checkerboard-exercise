// Your JS goes here

console.log('hello there');

//create divs

function randoColor(){
  var r,g,b;
  r = Math.floor(Math.random()*256);
  g = Math.floor(Math.random()*256);
  b = Math.floor(Math.random()*256);

  color = 'rgb(' + r + ',' + g + ',' + b +')';

  return color;
}

console.log(randoColor());

for (var i=0; i<81; i++){
  var div = document.createElement('div')
  div.style.cssText = 'width: 11.1%; padding-bottom: 11.1%; float: left;';
  div.style.backgroundColor = randoColor();
  document.body.appendChild(div);
}
