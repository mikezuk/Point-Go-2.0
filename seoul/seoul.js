let img;
let img2;

function preload() {
  img = loadImage('namsan-tower/assets/seoul/NAMSAN.PNG');
 img2 = loadImage('hongdae/assets/seoul/HONGDAE.PNG')
}

function setup() {
  createCanvas(1310, 770)
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)

}
function gotData(data){
  weather = data 
  console.info(data)
  
  textSize(20)
  text('Current Weather:', 15,160)
  text('degrees celsius', 20,270)
  textSize(50)
  text(weather.main.temp, 50, 230)
  
  fill(158, 231, 255,0)
  strokeWeight(10)
  rect(5,120, 175,180,20)
}
function draw() {
  let scale = 1.5 / 10
  let scale2 = 2 / 10
  imageMode(CENTER);
  image(img, 1107, 220, img.width * scale, img.height * scale);
  image(img2, 450, 480, img.width * scale2, img.height * scale2);
  position = ('SCALE');
  
}

function openWin() {
  window.open("namsan-tower/index2.html", "_self");
}

function openWin2() {
  window.open("hongdae/index3.html", "_self");
}

function openWin3() {
  window.open("../index.html", "_self");
}

