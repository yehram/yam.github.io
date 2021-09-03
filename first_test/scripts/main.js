let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/chimmy-happy.png'){
        myImage.setAttribute('src', 'images/tata.png');
    } else {
        myImage.setAttribute('src', 'images/chimmy-happy.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chimmy is cool,' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chimmy is cool,' + storedName;
}
myButton.onclick = function(){
    setUserName();
}