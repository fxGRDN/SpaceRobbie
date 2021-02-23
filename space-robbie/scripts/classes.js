


class GameObject {

    constructor(element, x, y, xv, yv){

        this.element = element;
        this.x = x;
        this.y = y;
        this.xv = xv;
        this.yv = yv;
        //attributes
        this.isColiding = false;

        this.place();
        
    }

    place(){
        $(this.element).appendTo("#game-body");
        this.newPositon();
    }

    newPositon(){
        $(this.element).css('transform','translate('+this.x+'px, '+this.y+'px)');

    }
    
    update(delta){
        this.x += this.xv * delta;
        this.y += this.xy * delta;
        this.newPositon();
       
    }
}

class Player extends GameObject {

 //jakies epickie funckje pozniej
}

class Enemy extends GameObject {
    //epickie funckje
}