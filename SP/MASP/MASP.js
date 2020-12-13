
function setup() {
  createCanvas(1280, 770);
}

function draw() {

  fill (219, 103, 43);
  noStroke();
  rect(75, 75, 550, 580);

  let scale = 2 / 10
  let scale2 = 5 / 10

  imageMode(CENTER);
  image(img, 350, 260, img.width * scale, img.height * scale);
  image(img2, 900, 500, img.width * scale2, img.height * scale2);

}

function preload() {
  img = loadImage('Masp.jpg');
  img2 = loadImage('notepad.png');
}

function openWin() {
  window.open("https://masp.org.br/en");
}
function openWin2() {
  window.open("../SP-index.html", "_self");
}
