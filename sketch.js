let img;
let canvas2;
let button;
let transparent;
let time;
let pm;
let polmap;



function preload() {
  polmap = loadImage('world-map.jpg')
  pm = loadImage('physical-world-map.jpg')
  img = loadImage('mainAssets/map.png');
  img3 = loadImage('mainAssets/pin2.png');
  myFont = loadFont('mainAssets/selima_.otf');
  img4 = loadImage('mainAssets/plane.png')
  loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', gotData)
}
function setup() {
  
  //createCanvas(1455, 995 );
  // main()

  let scale = 0.8/ 1
  createCanvas(1455, 995 );


  
  image(img, 0, 0, width * scale + 170, height * scale);
  imageMode(CENTER)
  

  
  
  image(img3, 305, 200, width * scale /21, height/ 12 * scale);
  image(img3, 605,155, width / 21 * scale, height / 12 * scale)
  image(img3, 1090, 205, width / 21 * scale, height / 12 * scale )
  

  button = createButton('Physical Map');
  button.position (300,15)
  button.mousePressed(physical)
  button.size(100,40)


  button = createButton('Main Map');
  button.position (100,15)
  button.mousePressed(main)
  button.size(100,40)

  button = createButton('Political Map');
  button.position (500,15)
  button.mousePressed(political)
  button.size(100,40)

  
 
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
 function main(){
  let scale = 0.8/ 1
  createCanvas(1455, 995 );


  
  image(img, 664, 400, width * scale + 170, height * scale);
  //imageMode(CENTER)
  

  
  
  image(img3, 305, 200, width * scale /21, height/ 12 * scale);
  image(img3, 605,155, width / 21 * scale, height / 12 * scale)
  image(img3, 1090, 205, width / 21 * scale, height / 12 * scale )
  
 }

function physical (){
  
  let scale = 0.8/ 1
  image(pm, 800, 500, width * scale * 1.4+ 20, height * scale + 250); 

  
  //physical btns
  image(img3, 440, 230, width * scale /21 * 1.7, height/ 12 * scale * 1.5);
  image(img3, 810,165, width / 21 * scale  * 1.7, height / 12 * scale* 1.5)
  image(img3, 1380, 215, width / 21 * scale  * 1.7, height / 12 * scale * 1.5)

}

function political(){
  let scale = 0.8
  image(polmap, 840, 350, width * scale * 1.4+ 70, height * scale + 410); 

  
  //physical btns
  image(img3, 420, 230, width * scale /21 * 1.7, height/ 12 * scale * 1.5);
  image(img3, 810,165, width / 21 * scale  * 1.7, height / 12 * scale* 1.5)
  image(img3, 1380, 215, width / 21 * scale  * 1.7, height / 12 * scale * 1.5)

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

// function openWin4() {
//   window.open("../index.html", "_self");
// }

function mousePressed () {
  console.info (mouseX, mouseY)
}

