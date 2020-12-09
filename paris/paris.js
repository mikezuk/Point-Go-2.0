
let canvas2;
//let time;

function preload() {

eiffel = loadImage ('eiffel/assets/eiffel.JPG')
louvre = loadImage ('eiffel/assets/louvre.JPG')
myFont = loadFont('digital-7 (italic).ttf');
//('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', gotData)
termo = loadImage ('termo.png');
}

function setup() {
  createCanvas(1455, 995);
  loadJSON('https://api.worldweatheronline.com/premium/v1/tz.ashx?key=8027c52829be4c82829235539200312%20&q=Paris&format=json', time )
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=db257703b317c0eafa49fe6c0038caba&units=metric', gotData)
  let scale = 0.9/ 1
  imageMode(CENTER)

  image (eiffel,430,410,eiffel.width/1.8 * scale ,eiffel.height/1.8 * scale)
  image (louvre, 964,635, louvre.width/2.3 * scale, louvre.height/2.4 * scale)
  imageMode(CENTER)
  

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
  rect(5,120, 175,180,20)

  noStroke()
  fill('blue')
  rect(75,578, 22 , -weather.main.temp* 2.2)
  
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

