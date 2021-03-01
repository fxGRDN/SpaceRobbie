interface GameObjects {
    Player: Player | undefined;
    Enemy: GameObjectConstructor[] | undefined;
    Laser: Laser[] | undefined;
}

interface ObjectsProperies {
    player_speed: number;
    laser_speed: number;
    laser_cooldown: number;
    enemy_speed: number;
    enemy_respawn: number;
}



class Game {
    static gameBody: HTMLElement = document.getElementById("game-body");
    static scoreBody: HTMLElement = document.getElementById("score");

    static bodyWidth: number = 1500;
    static bodyHeight: number = 800;

    static timer: number = 0;
    score: number;
    innerTimer: number = 0;

    static objects: GameObjects = {
        Player: null,
        Enemy: [],
        Laser: [],
    }

    static properites: ObjectsProperies = {
        player_speed: 700,
        laser_speed: 600,
        laser_cooldown: 0.10,
        enemy_speed: 500,
        enemy_respawn: 0.25
    }

    constructor(){
      
        this.innerTimer = 0;
        this.score = 0;
        this.init()
    }

    init(): void {
        Game.objects.Player = new Player(PlayerPrototype);
        window.requestAnimationFrame(newDelta => { this.gameLoop(newDelta) });
    }

    gameLoop(delta: number) {
        let newDelta = (delta-Game.timer)/1000;
        Game.timer = delta;

        Game.objects.Player.update(newDelta);
        
        Laser.update(newDelta);

        if(this.innerTimer >= Game.properites.enemy_respawn){
            Enemy.create();
            this.innerTimer = 0;
        }
        else this.innerTimer += newDelta;
        
        Enemy.update(newDelta);
        
        window.requestAnimationFrame(newDelta => { this.gameLoop(newDelta) });
    }

}



let PlayerPrototype: GameObjectConstructor = {
    element: Player.createDOM("player","robbie"),
    x_pos: Game.bodyWidth/2-30,
    y_pos: Game.bodyHeight-50,
    x_velocity: Game.properites.player_speed,
    y_velocity: Game.properites.player_speed,
    ele_width: 30,
    ele_height: 50
};


let newGame = new Game();