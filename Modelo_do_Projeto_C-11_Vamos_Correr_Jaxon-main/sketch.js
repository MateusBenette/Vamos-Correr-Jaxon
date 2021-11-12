var parede, foto_parede;
var runner, runner_running;
var parede1;
var parede2;


function preload(){
  //imagens pré-carregadas
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  foto_parede = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  parede = createSprite(200, 10, 20, 20);
  parede.addImage(foto_parede);
  parede1 = createSprite(350, 100, 10, 600);
  parede2 = createSprite(50, 600, 10, 600);
  runner = createSprite(200, 350, 20, 20);
  runner.addAnimation("running",runner_running);
}

function draw() {
  background("black");

if(frameCount % 20 / 2){ 
  if (parede.y > 600 ){
    parede.y = height / 2;
  }

  if (parede.y > 600){

  parede.y = height/2;
  }

  if(parede.y > 600 ) {
    parede.y = height/2;
    }
  }

  parede. velocityY = 10;

  parede1.invisible = true;
  parede1.visible = false;
  parede2.invisible = true;
  parede2.visible = false;

  runner.bounceOff(parede1);
  runner.bounceOff(parede2);

  parede.scale = 1.2;
  runner.scale = 0.05;
  runner.x = mouseX;
  drawSprites();
}
