// Your JS goes here

console.log('hello there');

//create divs

var shade1,shade2;
shade1 = 0;
shade2 = 0;

makeColor = function(shade,range){
  var str;
  if (range === 'r'){
    str = 'rgb('+shade+',0,0)'
  }
  else if (range === 'g'){
    str = 'rgb(0,'+shade+',0)'
  }
  else if (range === 'b'){
    str = 'rgb(0,0,'+shade+')'
  }
  console.log(str);
  return str;
}

for (var i=0; i<81; i++){

  var div = document.createElement('div')
  div.style.cssText = 'width: 11.1%; padding-bottom: 11.1%; float: left;';
  if (i%2==0){
    div.style.backgroundColor = makeColor(shade1,'r');
    shade1 += 5;
  }
  else {
    div.style.backgroundColor = makeColor(shade2,'g');
    shade2+=5;
  }
  document.body.appendChild(div);
}
