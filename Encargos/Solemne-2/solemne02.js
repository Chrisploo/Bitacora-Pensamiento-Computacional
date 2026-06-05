let discoVinilo;
let puño;
let angulo = 0;
let coloText;
let xTexto = 600;
let textLight = 50;
let transicionColor = -0.5;
let noticiero1, noticiero2, noticiero3, noticiero4, noticiero5, noticiero6, noticiero7, noticiero8; 
let fondoInicial = 1;

function preload(){
  discoVinilo = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/DiscoVinilo.png");
  puño = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Puño.png");
  noticiero1 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero1.png");
  noticiero2 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero2.png");
  noticiero3 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero3.png");
  noticiero4 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero4.png");
  noticiero5 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero5.png");
  noticiero6 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero6.png");
  noticiero7 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero7.png");
  noticiero8 = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Solemnes/Solemne-02/Recursos/Noticiero8.png");

}
  
function setup() {
  colorMode(HSB, 360, 100, 100, 100);
  createCanvas(600, 600);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0, 0, 85);
  if (mouseIsPressed) {
    angulo = angulo + 0.6;
    
    if (frameCount % 12 === 0)
    fondoInicial = int(random(1, 9)); 
  }
  
push();
    imageMode(CORNER); 
    if (fondoInicial === 1) {
      image(noticiero1, 0, 0, 600, 600);
    } else if (fondoInicial === 2) {
      image(noticiero2, 0, 0, 600, 600);
    } else if (fondoInicial === 3) {
      image(noticiero3, 0, 0, 600, 600);
    } else if (fondoInicial === 4) {
      image(noticiero4, 0, 0, 600, 600);
    } else if (fondoInicial === 5) {
      image(noticiero5, 0, 0, 600, 600);
    } else if (fondoInicial === 6) {
      image(noticiero6, 0, 0, 600, 600);
    } else if (fondoInicial === 7) {
      image(noticiero7, 0, 0, 600, 600);
    } else if (fondoInicial === 8) {
      image(noticiero8, 0, 0, 600, 600);
    }
  pop();
  
let posicionYWindow = 600-mouseY;
let topeWindow = constrain(posicionYWindow, 500, 650);
let posicionY = mouseY;
let tope = constrain(posicionY, 450, 650);
  
  image(puño, 20, tope, 300, 300);
  image(puño, 110, topeWindow, 400, 400);
  image(puño, 200, tope, 300, 300);
  image(puño, 280, topeWindow, 400, 400);
  image(puño, 370, tope, 300, 300);
  
push();
  translate(550, 550);
  rotate(angulo);
  fill(100, 150, 250);
  image(discoVinilo, 0, 0, 500, 500);
pop();

xTexto = xTexto - 2.5;
  if (xTexto < -2320) { 
    xTexto = 600;
  }
  
  textLight = textLight + transicionColor;
  if (textLight <= 0) {
    transicionColor = 0.2;
  }
  
  if (textLight >= 50) {
    transicionColor = -0.5; 
  }

push();
  fill(360, 100, textLight);
  textFont("TEKO");
  textSize(35);
  text("LA JUVENTUD DEBE DESPERTAR Y TENER VOZ PROPIA. LA SOCIEDAD Y LOS MEDIOS MANIPULAN A LAS PERSONAS Y FOMENTAN EL CONFORMISMO. ES NECESARO CUESTIONAR LAS NORMAS Y GENERAR UN CAMBIO SOCIAL Y CULTURAL", xTexto, 30);
pop();
  
strokeWeight(0);
  fill(360, 100, textLight);
    quad(0, 200, 350, 60, 360, 160, 0, 230);
    quad(350, 60, 360, 160, 130, 360, 130, 320);
    quad(130, 360, 130, 320, 600, 180, 600, 260);
  
  fill(360, 100, 50 - textLight);
    quad(-5, 195, 345, 55, 355, 155, -5, 225);
    quad(345, 55, 355, 155, 125, 355, 125, 315);
    quad(125, 355, 125, 315, 595, 175, 595, 255);
  
  fill(100, 0, 100);
  textSize(12.3);
  textFont("TEKO");
  text("Mantén el click para activar el vinilo, y mueve el cursor de arriba a abajo para protestar", 0, 597);
  
}

//link p5.js : https://editor.p5js.org/Tanytanita/sketches/hDYcTbRMt
