export class DrawableCircle {
    constructor(c) {
        this.colorPalette = ["#79838C", "#929CA6", "#AAB5BF", "#5F6B73", "#79878C"];
        this.Draw = (c) => {
            let bc = c.getContext('2d');
            //add xy increment and boundry
            if (this.x > (c.width - this.radius)) {
                this.xIncrement = -1;
            }
            else if (this.x < (0 + this.radius)) {
                this.xIncrement = 1;
            }
            if (this.y > (c.height - this.radius)) {
                this.yIncrement = -1;
            }
            else if (this.y < (0 + this.radius)) {
                this.yIncrement = 1;
            }
            this.y = this.y + this.yIncrement;
            this.x = this.x + this.xIncrement;
            bc.beginPath();
            bc.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            bc.strokeStyle = this.cirCol;
            bc.stroke();
        };
        this.radius = Math.floor((Math.random() + 1) * 15);
        if (Math.floor(Math.random() - 0.50) == -1) {
            this.xIncrement = -0.5;
        }
        else {
            this.xIncrement = 0.5;
        }
        if (Math.floor(Math.random() - 0.50) == -1) {
            this.yIncrement = -0.5;
        }
        else {
            this.yIncrement = 0.5;
        }
        this.x = ((Math.random() * (c.width - (this.radius * 2))) + this.radius);
        this.y = ((Math.random() * (c.height - (this.radius * 2))) + this.radius);
        this.cirCol = this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
    }
}
//# sourceMappingURL=DrawableCircle.js.map