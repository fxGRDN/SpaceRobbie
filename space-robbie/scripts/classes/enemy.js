class Enemy extends GameObject {
    constructor(element, x, y, xv, yv, _w, _h){
        super(element, x, y, xv, yv, _w, _h);
        this.place();
    }

    update(delta){
        this.y += this.yv * delta;
        if(this.y > game.height-this.height) GameObject.destroy(this);
        else this.updatePosition();
        game.objects.enemy = game.objects.enemy.filter(enemy => !enemy.isDead);
        
    } 
    
    static create(delta,rate){
        var enemy = $("<img src='galery/enemy.png' class='enemy'>");
        var randPos = Math.random() * (game.width - 50) +50;
        if(rate <= 0) {
            game.objects.enemy.push(new Enemy(enemy, randPos-50, 0, 0, game.prop.e_s, 50, 50));
            game.prop.e_rr = 0.25;
        }
        else if(rate > 0) game.prop.e_rr -= delta;
    }
}