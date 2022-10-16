class Square {
    constructor(x, y, ssize) {
        this.x = x;
        this.y = y;
        this.ssize = ssize
    }

    displayWhite() {
        fill(255)
        noStroke()
        square(this.x, this.y, this.ssize)
    }
    displayBlack() {
        fill(0)
        noStroke()
        square(this.x, this.y, this.ssize)
    }


    state() {
        //if a piece is in a square, return true, otherwise false

    }
}