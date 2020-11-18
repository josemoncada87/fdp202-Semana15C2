let bug; // declarar objeto
let bichos = [];

function setup() {
  createCanvas(710, 400);
  // crear objeto
  bug = new Particula();
}

function draw() {
  background(50, 89, 100);
  bug.move(mouseX, mouseY);
  bug.display();

  bichos.forEach(element => {
    element.display();
    element.move(mouseX, mouseY);
  });



  //console.log(bichos.length);
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

