// clase Jitter
class Particula {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(10, 30);
        this.speed = this.diameter/10;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    move(mx, my) {
        if (dist(mx, my, this.x, this.y) < 50) {
            if(this.x>mx){
                this.x-=this.speed;
            }else if(this.x<mx){
                this.x+=this.speed;
            }
            if(this.y>my){
                this.y-=this.speed;
            }else if(this.y<my){
                this.y+=this.speed;
            }
        } else {
            this.x += random(-this.speed, this.speed);
            this.y += random(-this.speed, this.speed);
        }
    }

    display() {
        fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    getX(){
        return this.x;        
    }

    getY(){
        return this.y;        
    }
    
}