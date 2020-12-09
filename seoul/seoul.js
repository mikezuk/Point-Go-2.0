let img;
let img2;

function preload() {
  img = loadImage('namsan-tower/assets/seoul/NAMSAN.PNG');
 img2 = loadImage('hongdae/assets/seoul/HONGDAE.PNG')
 myFont = loadFont('digital-7 (italic).ttf');
 termo = loadImage ('termo.png');
}

function setup() {
  createCanvas(1310, 770)
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)
  loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Seoul&format=json', time)
  image(termo, 60, 280, termo.width/2, termo.height/2)
}
function gotData(data1){
  weather = data1 
  console.info(data1)
  
  textSize(20)
  text('Current Weather:', 15,160)
  text('degrees celsius', 20,270)
  textSize(50)
  text(weather.main.temp, 50, 230)
  
  fill(158, 231, 255,0)
  strokeWeight(10)
  rect(5,120, 175,590,20)
 //termo
  noStroke()
  fill('blue')
  rect(75,578, 22 , -weather.main.temp* 2.8)
  
  
}

function time(data){
  time = data 
  // console.info(time)
  // console.info(data.data.time_zone[0])
  // console.info(data.data.time_zone[0])
push()
  a = data.data.time_zone[0].localtime
  textSize(60)
  textAlign(CENTER);
  textFont(myFont)
text(a, 500, 60, 100,120)
pop()

  // text(time_zone.localtime, 100, 500)
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

