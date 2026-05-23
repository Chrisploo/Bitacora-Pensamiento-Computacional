//https://editor.p5js.org/ChrisitianPLO/sketches/rOUw-RQnz

let posX = 100; 
let posY = 100;

let dirX;
let dirY;

let velocidad = 2; 
let colorFondo = 220; 

function setup() {
  createCanvas(400, 400);
  don = loadImage("https://raw.githubusercontent.com//Chrisploo/Bitacora-Pensamiento-Computacional/main/Encargos/Encargos-08/recursos/roahog.jpg");
  
  dirX = random(-1, 1);
  dirY = random(-1, 1);
}

function draw() {
  background(colorFondo);
  image(don, posX, posY, 100, 100);
  
  posX = posX + velocidad * dirX;
  posY = posY + velocidad * dirY; 
  
  if (posX > width * 4/5 - 100){ 
    dirX = random(0.2, 1); 
    dirX = -dirX; 
    dirY = random(-1, 1);
    cambiarEfectos();
  }
  
  if (posX < width * 1/5){
    dirX = random(0.2, 1); 
    
    dirY = random(-1, 1);
    cambiarEfectos();
  }
  
  if (posY > height * 4/5 - 100){ 
    dirY = random(0.2, 1);
    dirY = -dirY;
    
    dirX = random(-1, 1);
    cambiarEfectos();
  }
  
  if (posY < height * 1/5){
    dirY = random(0.2, 1);
    
    dirX = random(-1, 1);
    cambiarEfectos();
  }

  line(width * 1/5, 0, width * 1/5, height);
  line(width * 4/5, 0, width * 4/5, height);
  line(0, height * 1/5, width, height * 1/5);
  line(0, height * 4/5, width, height * 4/5);
}

function cambiarEfectos() {
  velocidad = random(2, 5);
  colorFondo = color(random(255), random(255), random(255));
}
