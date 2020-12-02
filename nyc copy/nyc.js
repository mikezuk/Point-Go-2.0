let NYimg;
let NYimg2;
let Emimg;
let cp ;
let c2;
let mode = "NY"
let NYbkg


function preload() {
NYpreload();
Empreload();
}

function setup() {
NYsetup();
Emsetup();

}

function draw() {

  if (mode === "NY") {
		NYdraw();
	} else if (mode === "Empire") {
		Emdraw();
	}
} 

function mousePressed() {
  //console.info(mode)
	if (mode === "NY") {
		NYMousePressed();
	} else if (mode === "Empire") {
		EmMousePressed();
	}
}

// function setImageVisible(name, visible) {
//   if (visible = true) {

//       image(name, 1005, 380, name.width * scale, name.height * scale); }
  

//   // var img = document.getElementById(id);
//   // img.style.visibility = (visible ? 'visible' : 'hidden');
// }

// function openWin() {
//   window.open("empire/empire-index.html", "_self")

// }

function openWin2() {
  openChinatown();
}

function openWin3() {
  backToMap();
}






//ny page

function NYpreload(){
  NYimg = loadImage('empire/assets/nyc/EMPIRE.PNG');
  NYimg2 = loadImage('chinatown/assets/nyc/CHINATOWN.PNG')
  NYbkg = loadImage ('empire/assets/nyc/NYC.jpg')
}
function NYsetup(){
createCanvas(1280, 770);
// image(NYbkg, 200,90)

}

function NYdraw(){
  createCanvas(1280, 770);
  imageMode(CENTER)
  image(NYbkg, 705,395)
  let scale = 3.5 / 10
  let scale2 = 1.5 / 10
  imageMode(CENTER);
  image(NYimg, 1005, 380, NYimg.width * scale, NYimg.height * scale); 
  image(NYimg2, 750, 420, NYimg.width * scale2, NYimg.height * scale2);
  position = ('SCALE');
}

function openChinatown(){
  window.open("chinatown/ctown-index.html", "_self")
}

function backToMap(){
  window.open("../index.html", "_self")
}

function NYMousePressed() {
	alert("Switching to view: Empire");
	mode = "Empire";
}
//Empire

function Empreload(){
  Emimg = loadImage('empire/assets/nyc/EMPIRESTATE.jpeg');
  Emimg2 = loadImage('empire/assets/notepad.png');
}
function Emsetup(){
  createCanvas(1280, 770);
}

function Emdraw(){
  createCanvas(1280, 770);
  fill (219, 103, 43);
  noStroke();
  rect(100, 100, 500, 500);

  let scale = 2 / 10
  let scale2 = 5 / 10

  imageMode(CENTER);
  image(Emimg, 350, 270, Emimg.width * scale, Emimg.height * scale);
  image(Emimg2, 900, 470, Emimg.width * scale2, Emimg.height * scale2);

}

function EmMousePressed() {
	alert("Switching to view: NY");
	mode = "NY";
}
// function openChinatown(){
//   window.open("chinatown/ctown-index.html", "_self")
// }

// function backToMap(){
//   window.open("../index.html", "_self")
// }