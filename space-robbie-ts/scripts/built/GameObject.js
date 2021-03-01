class GameObject {
    constructor(object) {
        this.element = object.element;
        this.x_pos = object.x_pos;
        this.y_pos = object.y_pos;
        this.x_velocity = object.x_velocity;
        this.y_velocity = object.y_velocity;
        this.ele_width = object.ele_width;
        this.ele_height = object.ele_height;
        this.dead = false;
    }
    place() {
        Game.gameBody.appendChild(this.element);
        GameObject.updatePos(this);
    }
    static updatePos(object) {
        object.element.style.transform = "translate(" + object.x_pos + "px, " + object.y_pos + "px)";
    }
    stop(pos, min, max) {
        if (pos > max)
            return max;
        else if (pos < min)
            return min;
        else
            return pos;
    }
    static destroy(object) {
        object.element.remove();
        object.dead = true;
    }
    static createDOM(_class, bg_image) {
        let newElement = document.createElement("img");
        newElement.src = `galery/${bg_image}.png`;
        newElement.classList.add(_class);
        return newElement;
    }
}
