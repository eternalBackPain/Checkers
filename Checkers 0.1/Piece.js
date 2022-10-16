class Piece {
    constructor(x, y, d, red, blue) {
        this.x = x
        this.y = y
        this.d = d
        this.red = red
        this.blue = blue
    }

    cursorOverPiece(px, py) {
        if (dist(this.x, this.y, px, py) < this.d / 2) {
            return true;
        } else {
            return false;
        }
    }

    move(px, py) {
        this.x = px
        this.y = py
    }

    changeColour() {
        fill(this.red, 0, this.blue)
    }

    displayRed() {
        fill(this.red, 0, 0);
        noStroke();
        ellipse(this.x, this.y, this.d, this.d)
    }
    displayBlue() {
        fill(0, 0, this.blue);
        noStroke();
        ellipseMode(CENTER)
        ellipse(this.x, this.y, this.d, this.d)
    }

}