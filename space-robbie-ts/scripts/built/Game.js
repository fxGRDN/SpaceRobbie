class Game {
    constructor() {
        this.innerTimer = 0;
        this.innerTimer = 0;
        this.score = 0;
        this.init();
    }
    init() {
        Game.objects.Player = new Player(PlayerPrototype);
        window.requestAnimationFrame(newDelta => { this.gameLoop(newDelta); });
    }
    gameLoop(delta) {
        let newDelta = (delta - Game.timer) / 1000;
        Game.timer = delta;
        Game.objects.Player.update(newDelta);
        Laser.update(newDelta);
        if (this.innerTimer >= Game.properites.enemy_respawn) {
            Enemy.create();
            this.innerTimer = 0;
        }
        else
            this.innerTimer += newDelta;
        Enemy.update(newDelta);
        window.requestAnimationFrame(newDelta => { this.gameLoop(newDelta); });
    }
}
Game.gameBody = document.getElementById("game-body");
Game.scoreBody = document.getElementById("score");
Game.bodyWidth = 1500;
Game.bodyHeight = 800;
Game.timer = 0;
Game.objects = {
    Player: null,
    Enemy: [],
    Laser: [],
};
Game.properites = {
    player_speed: 700,
    laser_speed: 600,
    laser_cooldown: 0.10,
    enemy_speed: 500,
    enemy_respawn: 0.25
};
let PlayerPrototype = {
    element: Player.createDOM("player", "robbie"),
    x_pos: Game.bodyWidth / 2 - 30,
    y_pos: Game.bodyHeight - 50,
    x_velocity: Game.properites.player_speed,
    y_velocity: Game.properites.player_speed,
    ele_width: 30,
    ele_height: 50
};
let newGame = new Game();
