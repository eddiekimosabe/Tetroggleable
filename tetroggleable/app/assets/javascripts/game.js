var ROWS = 20;
var COLS = 10;
var SIZE = 32;

var canvas;
var context;
var lineScore;
var currentBlock;


$(document).ready(function(){

	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	lineScore = $('#lines');
	// startGame();
	// drawBoard();
	// drawBlock(getRandomBlock());

})


function startGame() {	
	var r, c;
	currentLines = 0;
	isGameOver = false;
	
	gameData = new Array();
		
		for(r = 0; r < ROWS; r++)
		{
			gameData[r] = new Array();
			for(c = 0; c < COLS; c++)
			{
				// gameData[r].push(0);
				gameData[r][c] = 0;
			}
		}	

	currentBlock = getRandomBlock();
	

	
	var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
							
	window.requestAnimationFrame = requestAnimFrame;
	
	// requestAnimationFrame(update);
	}


function drawBoard() {
	// context.drawImage(bgImg, 0, 0, 320, 640, 0, 0, 320, 640);
	context.rect(0, 0, 320, 640);
	context.fillStyle="blue";
	context.fill();
	context.lineWidth = "2";
	context.strokeStyle = "yellow";
	context.stroke();
	
	for(var row = 0; row < ROWS; row++) {
		for(var col = 0; col < COLS; col++) {
			if(gameData[row][col] != 0) {
				// context.drawImage(blockImg, (gameData[row][col] - 1) * SIZE, 0, SIZE, SIZE, col * SIZE, row * SIZE, SIZE, SIZE); -->
				context.rect(col * SIZE, row * SIZE, SIZE, SIZE);
				context.fillStyle="red";
				context.fill();
			}
		}
	}
}

function drawBlock(block) {
	var drawX = block.gridX;
	var drawY = block.gridY;
	var rotation = block.currentRotation;
	
	for(var row = 0, len = block.rotations[rotation].length; row < len; row++) {
		for(var col = 0, len2 = block.rotations[rotation][row].length; col < len2; col++) {
			if(block.rotations[rotation][row][col] == 1 && drawY >= 0) {
				// context.drawImage(blockImg, block.color * SIZE, 0, SIZE, SIZE, drawX * SIZE, drawY * SIZE, SIZE, SIZE);
				context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
				context.fillStyle="green";
				context.fill();
			}
			
			drawX += 1;
		}
		
		drawX = block.gridx;
		drawY += 1;
	}

}

