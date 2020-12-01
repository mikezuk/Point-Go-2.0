
function setup() {
  createCanvas(1280, 770);
}

function draw() {
  background(255);
  image (bkg,800,500)

  fill (84, 201, 7);
  noStroke();
  rect(40, 140, 500, 500);

  let scale = 1 / 2.45
  //let scale2 = 10 / 5.5

  imageMode(CENTER);
  image(img, 290, 310, img.width * scale, img.height * scale);
  image(img2, 850, 460, img.width /1.3 , img.height / 1.1 );

}

function preload() {
  bkg = loadImage ('assets/corkboard.jpg')
  img = loadImage('assets/EIFFEL.jpeg');
  img2 = loadImage('assets/notepad.png');
}

function openWin() {
  window.open("https://www.toureiffel.paris/en");
}
function openWin2() {
  window.open("../paris-index.html", "_self");
}
