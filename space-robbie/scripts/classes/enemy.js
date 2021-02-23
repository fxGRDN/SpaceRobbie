class Enemy extends GameObject {
    constructor (element, x, y, vx, vy){
        super(element, x, y, vx, vy);

        this.height = 30;
        this.width = 30;

        this.updatePosition();
    }

    update(delta){
        this.y += this.yv * delta;
        if(this.y > game.height-this.height) GameObject.destroy(this);
        else this.updatePosition();
        game.objects.enemy = game.objects.enemy.filter(enemy => !enemy.isDead);
        
    } 
    
    static create(delta,rate){
        var enemy = $("<img src='galery/enemy.png' class='enemy'>").appendTo("#game-body");
        var randPos = Math.random() * game.width;
        if(rate <= 0) {
            game.objects.enemy.push(new Enemy(enemy, randPos, 0, 0, game.prop.e_s));
            game.prop.e_rr = 0.25;
        }
        if(rate > 0) game.prop.e_rr -= delta;
    }
}