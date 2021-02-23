


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
        this.updatePosition();
    }

    updatePosition(){
        $(this.element).css('transform','translate('+this.x+'px, '+this.y+'px)');

    }
    
    update(delta){
        this.x += this.xv * delta;
        this.y += this.xy * delta;
        this.updatePosition();
       
    }
}

class Player extends GameObject {

    constructor (context, x, y, vx, vy, mass){
        super(context, x, y, vx, vy, mass);

        this.keys = {
            left:   false,
            right:  false,
            up:     false,
            down:   false,
            space:  false
        };
        this.setupControls();
    }

    setupControls(){
         $(window).keydown(event => {
            if(event.which == 65) this.keys.left = true;
            if(event.which == 68) this.keys.right = true;
            if(event.which == 87) this.keys.up = true;
            if(event.which == 83) this.keys.down = true;
            if(event.which == 32) this.keys.space = true;
             
         });
         $(window).keyup(event => {
            if(event.which == 65) this.keys.left = false;
            if(event.which == 68) this.keys.right = false;
            if(event.which == 87) this.keys.up = false;
            if(event.which == 83) this.keys.down = false;
            if(event.which == 32) this.keys.space = false;
        });
    }

    update(delta){

        if(this.keys.left) this.x -= this.xv * delta;
        if(this.keys.right) this.x += this.xv * delta;
        if(this.keys.up) this.y -= this.yv * delta;
        if(this.keys.down) this.y += this.yv * delta;
        this.updatePosition();
       
    }

}

class Enemy extends GameObject {
    //epickie funckje
}

/*  
            


*/