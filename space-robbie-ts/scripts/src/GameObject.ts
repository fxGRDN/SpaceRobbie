interface GameObjectConstructor {
    element: HTMLImageElement;
    x_pos: number;
    y_pos: number;
    x_velocity: number;
    y_velocity: number;
    ele_width: number;
    ele_height: number;
    dead?: boolean
}


abstract class GameObject implements GameObjectConstructor {

    element: HTMLImageElement;
    x_pos: number;
    y_pos: number;
    x_velocity: number;
    y_velocity: number;
    ele_width: number;
    ele_height: number;
    dead: boolean

    constructor(object: GameObjectConstructor) {

        this.element = object.element;
        this.x_pos = object.x_pos;
        this.y_pos = object.y_pos;
        this.x_velocity = object.x_velocity;
        this.y_velocity = object.y_velocity;
        this.ele_width = object.ele_width;
        this.ele_height = object.ele_height;
        this.dead = false;

    }

    place(): void {
        Game.gameBody.appendChild(this.element);
        GameObject.updatePos(this);
    }

    static updatePos(object: GameObjectConstructor): void {
        object.element.style.transform = "translate("+object.x_pos+"px, "+object.y_pos+"px)";
    }

    stop(pos:number, min:number, max:number): number {
        if(pos > max) return max;
        else if(pos < min) return min;
        else return pos;
    }

    static destroy(object): void{
        object.element.remove();
        object.dead = true;
    }

    static createDOM ( _class: string, bg_image: string): HTMLImageElement {
        let newElement = document.createElement("img");
        newElement.src = `galery/${bg_image}.png`;
        newElement.classList.add(_class);
        
        return newElement;
    }
}
