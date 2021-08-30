const images = ["img/0.jpg","img/1.jpg","img/2.jpg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = todaysImage;

//document.body.appendChild(bgImage);

//console.dir(document.body);
const screenWidth = screen.availWidth;
const screenHeight = screen.availHeight;   

document.body.style.backgroundImage = `url(${todaysImage})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = `${screenWidth}px ${screenHeight}px`;