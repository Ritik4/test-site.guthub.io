let  myImage=document.querySelector('img');
myImage.onclick=function()
{
  if(myImage.getAttribute('src')==='cafelogo.png')
  {
  myImage.setAttribute('src','cafelogo2.png');
  }else{
      myImage.setAttribute('src','cafelogo.png');
  }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName){
  setUserName();
  }
  else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Cafe is cool, ' + myName;
       }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'cafe is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}