// JavaScript for the game

// Set up canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player object
const player = {
  x: 50,
  y: canvas.height / 2,
  width: 20,
  height: 20,
  speed: 5,
  dx: 0,
  dy: 0
};

// Draw player
function drawPlayer() {
  ctx.fillStyle = 'red';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Update player position
function updatePlayer() {
  if (player.y + player.height + player.dy > canvas.height || player.y + player.dy < 0) {
    player.dy = 0;
  }
  player.y += player.dy;
}

// Clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update game canvas
function update() {
  clearCanvas();
  drawPlayer();
  updatePlayer();
  requestAnimationFrame(update);
}

// Keydown event listener
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp' || e.key === 'w') {
    player.dy = -player.speed;
  } else if (e.key === 'ArrowDown' || e.key === 's') {
    player.dy = player.speed;
  }
});

// Keyup event listener
document.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'w' || e.key === 's') {
    player.dy = 0;
  }
});

// Start game loop
update();
function showAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }
  