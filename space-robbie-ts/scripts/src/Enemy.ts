class Enemy extends GameObject {

    constructor(enemy_object: GameObjectConstructor) {
        super(enemy_object);

        this.place();
    }

    static create(){
        let rand = (Math.random() * (Game.bodyWidth - 50));

        let EnemyPrototype: GameObjectConstructor =  {
            element: Enemy.createDOM("enemy","enemy"),
            x_pos: rand,
            y_pos: 0,
            x_velocity: 0,
            y_velocity: Game.properites.enemy_speed,
            ele_height: 50,
            ele_width: 50,
        }
        Game.objects.Enemy.push(new Enemy(EnemyPrototype));
    }

    static update(delta: number){
        Game.objects.Enemy.forEach(enemy => {

            enemy.y_pos += enemy.y_velocity * delta;

            if(enemy.y_pos >= Game.bodyHeight-enemy.ele_height) Enemy.destroy(enemy);

            Game.objects.Enemy = Game.objects.Enemy.filter(enemy => !enemy.dead);

            Enemy.updatePos(enemy);
        })
    }

}