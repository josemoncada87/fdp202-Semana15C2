let bug; // declarar objeto
let cuadro;
let bichos = [];
let cuadros = [];

function setup() {
  createCanvas(710, 400);
  // crear objeto
  bug = new Particula();
  cuadro = new Cuadrado();

  for(let i = 0 ; i < 50 ; i++){
    cuadros.push(new Cuadrado());
  }
}

function draw() {
  background(50, 89, 100);
  
  bug.move(mouseX, mouseY);
  bug.display();

  bichos.forEach(elbicho => {
    elbicho.display();
    elbicho.move(mouseX, mouseY);
  });

  pintarLineas();
 
  cuadros.forEach(element => {
    element.display();
    element.move();
  });

  

}

function pintarLineas() {
  for(let i = 0; i < bichos.length ; i++){
    let x1 = bichos[i].getX();
    let y1 = bichos[i].getY();  
    for(let j = 0; j < bichos.length ; j++){
      let x2 = bichos[j].getX();
      let y2 = bichos[j].getY();   
      //console.log(x1, y1, x2, y2); 
      if(i!==j){
        if(dist(x1,y1,x2,y2)<50){
          stroke(255);
          line(x1,y1,x2,y2);
        }
      }
    }
  }
}

function mousePressed(){
  bichos.push(new Particula());
}

