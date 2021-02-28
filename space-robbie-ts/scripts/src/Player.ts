
interface Keys {
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    space: boolean;
}

interface LaserConstructor extends GameObjectConstructor {
    origin: string;
}

class Player extends GameObject {

    keys: Keys;

    constructor(player_object: GameObjectConstructor) {
        super(player_object);

        this.keys = {
            left: false,
            right: false,
            up: false,
            down: false,
            space: false
        }
        this.place();
        this.giveControl();
    }

    giveControl(): void {
        window.addEventListener("keydown", event => {
            if(event.key == "a") this.keys.left = true;
            if(event.key == "d") this.keys.right = true;
            if(event.key == "w") this.keys.up = true;
            if(event.key == "s") this.keys.down = true;
            if(event.key == " ") this.keys.space = true;
        })
        window.addEventListener("keyup", event => {
            if(event.key == "a") this.keys.left = false;
            if(event.key == "d") this.keys.right = false;
            if(event.key == "w") this.keys.up = false;
            if(event.key == "s") this.keys.down = false;
            if(event.key == " ") this.keys.space = false;
        })
    }

    update(delta: number): void {
       if(this.keys.right) this.x_pos += this.x_velocity * delta;
       if(this.keys.left) this.x_pos -= this.x_velocity * delta;
       if(this.keys.down) this.y_pos += this.y_velocity * delta;
       if(this.keys.up) this.y_pos -= this.y_velocity * delta;
       if(this.keys.space) Laser.create(this.x_pos, this.y_pos, delta, "player");

        this.x_pos = this.stop(this.x_pos, 0, Game.bodyWidth-this.ele_width);
        this.y_pos = this.stop(this.y_pos, 0, Game.bodyHeight-this.ele_height);
        
        Player.updatePos(this);
    }
}


class Laser extends GameObject {

    origin: string;

    constructor(laser_object: LaserConstructor) {
        super(laser_object);
        this.origin = laser_object.origin;
        this.place();
    }

    static create(_x: number, _y: number, delta: number, origin: string){

        let LaserPrototype: LaserConstructor = {
            element: Laser.createDOM("laser","apple"),
            x_pos: _x,
            y_pos: _y,
            x_velocity: 0,
            y_velocity: -Game.properites.laser_speed,
            ele_width: 20,
            ele_height: 20,
            origin: origin
        }
        Game.objects.Laser.push(new Laser(LaserPrototype));
           
        
    }

    static update(delta: number):void {
        Game.objects.Laser.forEach(laser => {

                laser.y_pos += laser.y_velocity * delta;

                if(laser.y_pos <= 0 ) Laser.destroy(laser);

                Game.objects.Laser = Game.objects.Laser.filter(laser => !laser.dead)

                Laser.updatePos(laser);
        });
    }


}



/* 



*/