function setup() {
  createCanvas(1280, 770);
}

function draw() {

  fill (86, 52, 158);
  noStroke();
  rect(700, 100, 500, 500);

  let scale = 2 / 10
  let scale2 = 5/ 10

  imageMode(CENTER);
  image(img, 950, 270, img.width * scale, img.height * scale);
  image(img2, 380, 490, img.width * scale2, img.height * scale2);


}

function preload() {
  img = loadImage('../chinatown/assets/nyc/CHINATOWN.jpg');
  img2 = loadImage('../chinatown/assets/notepad.png');


}

function openWin() {
  window.open("https://www.nycgo.com/boroughs-neighborhoods/manhattan/chinatown/");
}
function openWin2() {
  window.open("../nyc-index.html", "_self");
}