import Food from './food';
import Snake from './snake';
import './style.css'

// Game Manager

// Canvas
const BOX_SIZE = 20;
const CANVAS_SIZE = 400
const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d')
let intervalTimer;
 
let gameSpeed = 1; //1-7

const snake = new Snake(BOX_SIZE, CANVAS_SIZE)
const food = new Food(BOX_SIZE, CANVAS_SIZE)
// Boundary

function gameLoop() {
  context.clearRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
  snake.update(context)
  food.draw(context);
}

// starting the game
food.generateFood();
intervalTimer = setInterval(gameLoop, 700 / gameSpeed);

// Event Listener
window.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'ArrowUp':
      snake.updateDirection('up')
      break;
    case 'ArrowDown':
        snake.updateDirection('down')
        break;
    case 'ArrowLeft':
      snake.updateDirection('left')
      break;
    case 'ArrowRight':
        snake.updateDirection('right')
        break;
    case 'Space':
          if (intervalTimer) {
            clearInterval(intervalTimer);
            intervalTimer = undefined;
          } else {
            intervalTimer = setInterval(gameLoop, 700 / gameSpeed);
          } 
          break;
    default:
      break;
  }
})

