class Player extends GameObject {

    constructor (element, x, y, vx, vy){
        super(element, x, y, vx, vy);

        this.keys = {
            left:   false,
            right:  false,
            up:     false,
            down:   false,
            space:  false
        };
        this.height = 50;
        this.width = 30;

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
        if(this.keys.down) this.y += this.yv * delta
        if(this.keys.space && game.prop.l_cd <= 0){
        this.createLaser();
        game.prop.l_cd = 0.3;
        }
        if(game.prop.l_cd > 0) game.prop.l_cd -= delta;

        this.x = this.stopOnBorder(this.x, game.width-this.width, 0);
        this.y = this.stopOnBorder(this.y, game.height-this.height, 0);

        this.updatePosition();
       
    }

    createLaser(){
        var laser = $("<img src='./galery/apple.png' class='laser'>").appendTo("#game-body");
        game.objects.laser.push(new Laser(laser, this.x+5, this.y, 0, game.prop.l_s));

    }

}


class Laser extends GameObject{

    constructor (element, x, y, vx, vy){
        super(element, x, y, vx, vy);

        this.height = 20;
        this.width = 20;

        this.updatePosition();
    }

    update(delta){
        this.y -= this.yv * delta;
        if(this.y == 0 ) GameObject.destroy(this);
        game.objects.laser = game.objects.laser.filter(laser => !laser.isDead);
        
        
        this.updatePosition();
    } 


}