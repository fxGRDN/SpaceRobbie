class Game {
    constructor (){
        this.board = $("#game-board");
        this.width = 1500;
        this.height = 800;
        this.oldTime = 0;
        this.objects = {
            player: null, 
            laser: [],
            enemy: []
        }
        this.prop = {
            e_s: 400,
            p_s: 900,
            l_s: 400,
            l_cd: 0

        }

        this.init();
    }
    init(){
        this.objects.player = new Player($('<img src="galery/robbie.png" class="player">'), this.width/2, this.height-60, this.prop.p_s, this.prop.p_s);

        window.requestAnimationFrame(time => {this.loop(time)});
    }


    loop(time){
        var delta = (time-this.oldTime)/1000;
        this.oldTime = time;

        this.objects.player.update(delta);
        this.objects.laser.forEach(laser => {  laser.update(delta) });
        
        window.requestAnimationFrame(time => {this.loop(time)});
    }
}


var game = new Game();
