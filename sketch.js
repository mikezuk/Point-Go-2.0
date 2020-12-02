let img;
let canvas2;
let button;
let transparent;
let time;

//oadJSON('http://worldtimeapi.org/api/timezone/Asia/Seoul.json'

function preload() {
  img = loadImage('mainAssets/map.png');
  img3 = loadImage('mainAssets/pin2.png');
  myFont = loadFont('mainAssets/selima_.otf');
  img4 = loadImage('mainAssets/plane.png')
}
function setup() {
  
  //UTC -05:00
  let scale = 0.8/ 1
  createCanvas(1455, 995 );
  // background(255)

  // translate (-100,0)
  
  image(img, 0, 0, width * scale + 170, height * scale);
  imageMode(CENTER)

  
  
  image(img3, 305, 200, width * scale /21, height/ 12 * scale);
  image(img3, 605,155, width / 21 * scale, height / 12 * scale)
  image(img3, 1090, 205, width / 21 * scale, height / 12 * scale )
  
}



function draw() {

  scale (0.8 / 1)
  textSize(120);
  textFont(myFont)
  textAlign(CENTER)
  //fill('red')
  text('Point & Go!', width / 1.8, height / 1.8);
  //image (img4, mouseX, mouseY)
  
// console.info(time)

}





function openWin() {
  window.open("nyc/nyc-index.html","_self");
}

function openWin2() {
  window.open("seoul/seoul-index.html", "_self"); 
}

function openWin3() {
  window.open("paris/paris-index.html", "_self");
}

function mousePressed () {
  console.info (mouseX, mouseY)
}

