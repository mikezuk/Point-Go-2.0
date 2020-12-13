let img;
let img2;
let cp ;
let c2;
var population
let num
let person;

function preload() {

  img = loadImage('masppaulista.jpg')

  myFont = loadFont('digital-7 (italic).ttf');

 termo = loadImage ('termo.png');
 clock = loadImage( 'clock.png')
}

function setup() {
  createCanvas(1310, 770)
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Sao,Paulo&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)
  loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Sao_Paulo&format=json', time)
  image(termo, 60, 280, termo.width/2, termo.height/2)


}

function gotData(data1){
  weather = data1 
  console.info(data1)
  
  textSize(20)
  text('Current Weather:', 15,160)
  text('degrees celsius', 20,270)
  textSize(50)
  text(weather.main.temp, 40, 230)
  
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
  // fill(50)
  // rect(550, 0, 280,150)
  image(clock,620,0, clock.height *2.8, clock.width -20)
push()

  a = data.data.time_zone[0].localtime
  textSize(80)
  textAlign(CENTER);
  textFont(myFont)
text(data.data.time_zone[0].localtime, 630, 0, 200)


textSize(70)
text(data.data.time_zone[0].localtime, 630, 740, 200)
pop()

  //text(time_zone.localtime, 100, 500)
}


function draw() {
  let scale = 2.5 / 10
  
  imageMode(CENTER);
  image(img, 980, 230, img.width * scale, img.height * scale); 
  // image(img2, 750, 420, img.width * scale2, img.height * scale2);
  // position = ('SCALE');
  
 //console.info(population.Population_size[0])


} 



function openWin() {
  window.open("MASP/MASP-index.html", "_self")

}


function openWin3() {
  window.open("../index.html", "_self")
}

