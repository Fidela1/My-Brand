'use strict';
let side=true
document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
  if(side){
    document.getElementById("myDIV").style.display = "block";
    side=false
  }
  else{
    document.getElementById("myDIV").style.display = "none";
    side=true
  }
 
});
document.querySelector('.sidebaroption')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
  if(side){
    document.getElementById("myDIV").style.display = "block";
    side=false
  }
  else{
    document.getElementById("myDIV").style.display = "none";
    side=true
  }
 
});

