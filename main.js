import Snake from './snake';
import './style.css'

// Canvas
const BOX_SIZE = 20;
const CANVAS_SIZE = 400
const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d')

const snake = new Snake(BOX_SIZE, CANVAS_SIZE)

function gameLoop() {
  context.clearRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
  snake.update(context)
}

// requestAnimationFrame
setInterval(gameLoop, 1000);

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
    default:
      break;
  }
})

