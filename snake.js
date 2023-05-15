class Snake {
    body;
    snakeSize;
    canvasSize;
    direction =  'right';
  
    constructor(snakeSize, canvasSize) {
      this.body = [
        {x: 200, y: 200}, // 0 (head)
        {x: 180, y: 200}, // 1
        {x: 160, y: 200}, // 2
      ];
      this.snakeSize = snakeSize
      this.canvasSize = canvasSize
    }
  
    draw(context) {
      this.body.map((segment, index) => {
        // fade yellow color
        let opacity = (100/index);
        context.fillStyle = (index == 0) ? '#122a09' : `rgba(255, 255, 0, ${opacity}%)`
        context.fillRect(segment.x, segment.y, this.snakeSize, this.snakeSize)
      })
    }
  
    move() {
      // create a new head
      const newHead = {...this.body[0]} // use spread operator to be sure its a new object
      
      switch (this.direction) {
        case 'right':
          newHead.x += 20;
          break;
        case 'left':
            newHead.x -= 20;
            break;
        case 'up':
            newHead.y -= 20;
            break;
        case 'down':
              newHead.y += 20;
              break;
        default:
          break;
      }
  
      // add the new head
      this.body.unshift(newHead);
  
      // remove the tail
      this.body.pop();
    }
  
    update(context) {
      this.move()
      this.draw(context)
    }

    updateDirection(newDirection) {
        if (this.isOppositeDirection(newDirection)) return;
        this.direction = newDirection;
    }

    isOppositeDirection(newDirection) {
        let curDirection = this.direction;

        if ((curDirection == 'right' && newDirection == 'left') || (curDirection == 'left' && newDirection == 'right') ) return true;
        if ((curDirection == 'up' && newDirection == 'down') || (curDirection == 'down' && newDirection == 'up') ) return true;

        return false;
    }
  }
  

  export default Snake;