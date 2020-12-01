
function setup() {
  createCanvas(1280, 770);
}

function draw() {
  background(255);
  image (bkg,500,500)
  fill (80, 101, 217);
  noStroke();
  rect(40, 140, 500, 450);

  let scale = 1 / 1.52
  //let scale2 = 10 / 5.5

  imageMode(CENTER);
  image(img, 290, 295, img.width * scale, img.height * scale);
  image(img2, 850, 460, img.width  * 1.3 , img.height * 2.3);

}

function preload() {
  bkg = loadImage ('../eiffel/assets/corkboard.jpg')
  img = loadImage('../eiffel/assets/LOURVE.jpg');
  img2 = loadImage('../eiffel/assets/notepad.png');
}

function openWin() {
  window.open("https://www.louvre.fr/en");
}
function openWin2() {
  window.open("../paris-index.html", "_self");
}
