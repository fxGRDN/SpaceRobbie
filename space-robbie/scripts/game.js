class Game {
    constructor (){
        this.board = $("#game-board");
        this.width = 1500;
        this.height = 800;
        this.oldTime = 0;
        this.score = 0;
        this.objects = {
            player: null, 
            laser: [],
            enemy: []
        }
        this.prop = {
            e_s: 500,       //enemy speed
            p_s: 900,       //player speed
            l_s: 600,       //laser speed
            l_cd: 0.05,        //laser cooldown
            e_rr: 0.1,        //enemy respawn rate

        }

        this.init();
    }
    init(){
        this.objects.player = new Player($('<img src="galery/robbie.png" class="player">'), this.width/2, this.height-50, this.prop.p_s, this.prop.p_s, 30, 50);

        window.requestAnimationFrame(time => {this.loop(time)});
    }


    loop(time){
        var delta = (time-this.oldTime)/1000;
        this.oldTime = time;
        Enemy.create(delta,this.prop.e_rr);
        this.objects.enemy.forEach(enemy => { enemy.update(delta) });
        this.objects.laser.forEach(laser => { laser.update(delta) });
        this.objects.player.update(delta);
        Game.colisionDetector();
        $("#score").html("Score: "+this.score);
        

        
        window.requestAnimationFrame(time => {this.loop(time)});
    }

     static colisionDetector(){
        game.objects.laser.forEach(l => {
            game.objects.enemy.forEach(e => {
                if(l.x > e.x + e.width || e.x > l.x + l.width  || e.y > l.y + l.height || l.y > e.y + e.height ) return;
                else {
                    GameObject.destroy(e);
                    game.score += 100;
                }
            })
        })
    }
}


var game = new Game();
