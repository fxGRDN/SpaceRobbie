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

    stopOnBorder(pos,max,min){
        if(pos > max) return max;
        else if(pos < min) return min;
        else return pos;
    }

    static destroy(object){
        $(object.element).remove();
        object.isDead = true;

    }
}






/*  
            


*/