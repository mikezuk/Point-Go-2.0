let img;
let img2;

function preload() {
  img = loadImage('namsan-tower/assets/seoul/NAMSAN.PNG');
  img2 = loadImage('hongdae/assets/seoul/HONGDAE.PNG')
}

function setup() {
  createCanvas(1310, 770)
}

function draw() {
  let scale = 1.5 / 10
  let scale2 = 2 / 10
  imageMode(CENTER);
  image(img, 1107, 220, img.width * scale, img.height * scale);
  image(img2, 450, 480, img.width * scale2, img.height * scale2);
  position = ('SCALE');

}

function openWin() {
  window.open("namsan-tower/index2.html", "_self");
}

function openWin2() {
  window.open("hongdae/index3.html", "_self");
}

function openWin3() {
  window.open("../index.html", "_self");
}
