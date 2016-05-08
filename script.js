// Your JS goes here

console.log('hello there');

//create divs

for (var i=0; i<81; i++){
  var div = document.createElement('div')
  div.style.cssText = 'width: 11.1%; padding-bottom: 11.1%; float: left;';
  if (i%2==0){
    div.style.backgroundColor = 'red';
  }
  else {
    div.style.backgroundColor = 'black';
  }
  document.body.appendChild(div);
}
