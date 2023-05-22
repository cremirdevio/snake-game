class Food {
    canvasSize;
    foodSize;
    x;
    y;

    constructor(foodSize, canvasSize) {
        this.foodSize = foodSize;
        this.canvasSize = canvasSize;
    }

    generateFood() {
        // Calculate the number of intervals within the canvas size
        const intervals = Math.floor(this.canvasSize / this.foodSize);
    
        // Generate a random interval index for both x and y coordinates
        const intervalX = Math.floor(Math.random() * intervals); 0-19
        const intervalY = Math.floor(Math.random() * intervals);
    
        // Calculate the random x and y coordinates within the canvas
        this.x = intervalX * this.foodSize;
        this.y = intervalY * this.foodSize;
    }
    

    draw(context) {
        context.fillStyle = '#ff0000'
        context.fillRect(this.x, this.y, this.foodSize, this.foodSize)
    }
}

export default Food;