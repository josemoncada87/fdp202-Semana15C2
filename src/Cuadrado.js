class Cuadrado{
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.lado = random(10, 30);
        this.speed = 5;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.angulo = 0.0;
    }

    move() {
       this.angulo += (3.14/180.0);
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angulo);
        noStroke();
        fill(this.r,this.g,this.b);
        rectMode(CENTER);
        rect(0,0,this.lado, this.lado);
        rectMode(CORNER);
        pop();
    }

    getX(){
        return this.x;        
    }

    getY(){
        return this.y;        
    }
    


}