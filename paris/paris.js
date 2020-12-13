
let canvas2;
//let time;

function preload() {
bkg = loadImage ('eiffel/assets/PARIS.jpg');
eiffel = loadImage ('eiffel/assets/eiffel.JPG')
louvre = loadImage ('eiffel/assets/louvre.JPG')
myFont = loadFont('digital-7 (italic).ttf');
//('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', gotData)
termo = loadImage ('termo.png');
clock = loadImage( 'clock.png')
}

function setup() {
  createCanvas(1455, 995);
  image(bkg, 250,100)
  loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', time )
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)
  let scale = 0.9/ 1
  imageMode(CENTER)

  image (eiffel,430,310,eiffel.width/1.8 * scale ,eiffel.height/1.8 * scale)
  image (louvre, 964,535, louvre.width/2.3 * scale, louvre.height/2.4 * scale)
  imageMode(CENTER)
  image(termo, 103, 480, termo.width/2, termo.height/2)

}
function gotData(data1){

weather = data1 
  console.info(data1)
  
  //text(data.time_zone.localtime)
  textSize(20)
  text('Current Weather:', 15,160)
  text('degrees celsius', 20,270)
  textSize(50)
  text(weather.main.temp, 50, 230)
  
  fill(158, 231, 255,0)
  strokeWeight(10)
  rect(5,120, 175,590,20)

  noStroke()
  fill('blue')
  rect(75,569, 22 , -weather.main.temp* 2.8)
  
 }

function time(data){
  time = data 
  // console.info(time)
  // console.info(data.data.time_zone[0])
  // console.info(data.data.time_zone[0])
  // fill(50)
  // rect(550, 0, 280,150)
  image(clock,710,50, clock.height *2.7, clock.width -50)
push()

  a = data.data.time_zone[0].localtime
  textSize(80)
  textAlign(CENTER);
  textFont(myFont)
text(data.data.time_zone[0].localtime, 630, -20, 200)


textSize(70)
text(data.data.time_zone[0].localtime, 630, 770, 200)
pop()
}

function openWin3() {
  window.open("../index.html", "_self")
}

function openWin() {
  window.open("Louvre/louvre-index.html", "_self");
}

function openWin2() {
  window.open("eiffel/eiffel-index.html", "_self"); 


  
  

}

// function mousePressed(){
//   console.info (mouseX, mouseY)
// }

