
function setup() {
  createCanvas(1280, 770);
}

function draw() {

  fill (219, 103, 43);
  noStroke();
  rect(100, 100, 500, 500);

  let scale = 2 / 10
  let scale2 = 5 / 10

  imageMode(CENTER);
  image(img, 350, 270, img.width * scale, img.height * scale);
  image(img2, 900, 470, img.width * scale2, img.height * scale2);

}

function preload() {
  img = loadImage('../empire/assets/nyc/EMPIRESTATE.jpeg');
  img2 = loadImage('../empire/assets/notepad.png');
}

function openWin() {
  window.open("https://www.esbnyc.com/");
}
function openWin2() {
  window.open("../nyc-index.html", "_self");
}
