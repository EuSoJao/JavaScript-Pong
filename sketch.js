//Variaveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15
let raio = diametro / 2;
let velocidadeBolinha = 6;

let velocidadePadrao = 6;
let velocidadeyBolinha = 6;
let velocidadexBolinha = 6;

//Variaveis Raquetes
let velocidadeRaquete = 10;
let yDireita = yBolinha;
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

//Placar
let MeusPontos = 0;
let PontosAdversario = 0;

//sons
let ponto;
let raquetada;
let trilha;

let colidiu = false

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificarColisao();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoEsquerda();
  movimentoRaqueteOponente();
  //colisaoRaquete();
  colisaoRaqueteLib(xRaquete, yRaquete);
  colisaoRaqueteLib(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificarColisao(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentoEsquerda(){
    if (keyIsDown(87) === true){
    yRaquete -= velocidadeRaquete;
    }
      if (keyIsDown(83) === true){
    yRaquete += velocidadeRaquete;
    }
}
function movimentoRaqueteOponente(){
  if (keyIsDown(UP_ARROW) === true){
    yRaqueteOponente -= velocidadeRaquete;
  }
  if (keyIsDown(DOWN_ARROW) === true){
    yRaqueteOponente += velocidadeRaquete;
  }
}
function colisaoRaqueteOponente() {
    if (xBolinha - raio < xRaqueteOponente + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
        velocidadexBolinha *= -1;
    }
}

function colisaoRaqueteLib(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
if (colidiu){
  velocidadexBolinha *= -1;
  raquetada.play()
}
}
function colisaoRaqueteLib(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
if (colidiu){
  velocidadexBolinha *= -1;
  raquetada.play()
}
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(MeusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(PontosAdversario, 470, 26);
}
function marcaPonto(){
  if (xBolinha > 590){
        MeusPontos += 1;
        xBolinha = 300;
        yBolinha = 100;
        velocidadexBolinha *= -1
    ponto.play()
      }
  if (xBolinha < 10){
      PontosAdversario += 1;
      xBolinha = 300;
      yBolinha = 100;
      velocidadexBolinha *= 1
    ponto.play()
    }
}


//function bolinhaNaoFicaPresa(){
//    if (xBolinha - raio < 0){
//    xBolinha = 23
//    }
//}