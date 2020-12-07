let img;
let img2;
let cp ;
let c2;
var population
let num
let person;

function preload() {
  img = loadImage('empire/assets/nyc/EMPIRE.PNG');
  img2 = loadImage('chinatown/assets/nyc/CHINATOWN.PNG')
  bkg = loadImage ('empire/assets/nyc/NYC.jpg')
  myFont = loadFont('digital-7 (italic).ttf');
 population = loadJSON("Population.json")
 person = loadImage ('person.png')
}

function setup() {
  createCanvas(1280, 1000);
image(bkg, 200,90)
loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=New_York&format=json', time )
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=manhattan&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)

let y = 110
let imgW = person.width*0.05;
  let imgH = person.height*0.05;
for (let i = 0; i < 20; i++) {
  image(person,y , i + 700, imgW, imgH)
  image(person,y , i + 750, imgW, imgH)
  image(person,y , i + 800, imgW, imgH)
  image(person,y , i + 850, imgW, imgH)
  y += 40
}
image(person, 900, 700, 150,150)
textSize(100)
text('=',1050, 800)

}


function draw() {
  let scale = 3.5 / 10
  let scale2 = 1.5 / 10
  imageMode(CENTER);
  image(img, 1005, 380, img.width * scale, img.height * scale); 
  image(img2, 750, 420, img.width * scale2, img.height * scale2);
  position = ('SCALE');
  
 //console.info(population.Population_size[0])



} 
// function gotData2(data1){
//   time_zone = data1 
//   console.info(data1)

  
// }


  
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
  rect(5,120, 175,180,20)
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






function openWin() {
  window.open("empire/empire-index.html", "_self")

}

function openWin2() {
  window.open("chinatown/ctown-index.html", "_self")
}

function openWin3() {
  window.open("../index.html", "_self")
}

