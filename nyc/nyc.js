let img;
let img2;
let cp ;
let c2;


function preload() {
  img = loadImage('empire/assets/nyc/EMPIRE.PNG');
  img2 = loadImage('chinatown/assets/nyc/CHINATOWN.PNG')
  bkg = loadImage ('empire/assets/nyc/NYC.jpg')
}

function setup() {
  createCanvas(1280, 770);
image(bkg, 200,90)
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=manhattan&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)
//loadJson('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', gotData2)
}

function draw() {
  let scale = 3.5 / 10
  let scale2 = 1.5 / 10
  imageMode(CENTER);
  image(img, 1005, 380, img.width * scale, img.height * scale); 
  image(img2, 750, 420, img.width * scale2, img.height * scale2);
  position = ('SCALE');
  
 
} 
// function gotData2(data1){
//   time_zone = data1 
//   console.info(data1)

  
// }
  
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
function openWin() {
  window.open("empire/empire-index.html", "_self")

}

function openWin2() {
  window.open("chinatown/ctown-index.html", "_self")
}

function openWin3() {
  window.open("../index.html", "_self")
}

