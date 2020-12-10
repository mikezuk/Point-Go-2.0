let img;
let canvas2;
let button;
let transparent;
let time;
let pm;



function preload() {
  pm = loadImage('physical-world-map.jpg')
  img = loadImage('mainAssets/map.png');
  img3 = loadImage('mainAssets/pin2.png');
  myFont = loadFont('mainAssets/selima_.otf');
  img4 = loadImage('mainAssets/plane.png')
  loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', gotData)
}
function setup() {
  
  button = createButton('Physical Map');
  button.position (300,15)
  button.mousePressed(physical)



  let scale = 0.8/ 1
  createCanvas(1455, 995 );

  image(img, 0, 0, width * scale + 170, height * scale);
  imageMode(CENTER)

  
  
  image(img3, 305, 200, width * scale /21, height/ 12 * scale);
  image(img3, 605,155, width / 21 * scale, height / 12 * scale)
  image(img3, 1090, 205, width / 21 * scale, height / 12 * scale )
  
  
 
}

function gotData(data){

  weather = data 
  console.info(data)
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


function physical (){
  let scale = 0.8/ 1
  image(pm, 800, 500, width * scale * 1.4+ 20, height * scale + 250); 

  
  //imageMode(CENTER)
  image(img3, 445, 230, width * scale /21 * 1.4, height/ 12 * scale * 1.2);
  image(img3, 755,155, width / 21 * scale  * 1.4, height / 12 * scale* 1.2)
  image(img3, 1090, 205, width / 21 * scale  * 1.4, height / 12 * scale * 1.2)

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

function openWin4() {
  window.open("../index.html", "_self");
}

function mousePressed () {
  console.info (mouseX, mouseY)
}

