// the entire canvas
var canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = canvas.getContext("2d");
var tile = 32;
var COLS = canvas.width/tile, ROWS = canvas.height/tile;
var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
//legend: 2:door, 3:diamond, 4:sign, 5:edu, 6:skills, 7:java,8:C++ 
var board = [
  [1,1,1,1,1,1,1,0,0,0, 0,4,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,1,1,1, 1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0,0,0, 0,0,0,1,1,1,1,1,1,1, 1,0,1,1,1,0,0,1,1,1, 1,1,1,0,0,0,0,0,1,1],
  [0,1,1,1,1,0,1,0,0,0, 0,0,0,1,3,1,1,1,0,1, 1,0,1,5,1,0,0,1,1,1, 1,1,1,0,0,0,6,0,1,1],
  [1,1,1,0,1,1,1,0,0,0, 0,0,0,1,0,0,0,0,0,1, 1,0,1,0,1,0,0,1,1,1, 1,1,1,0,0,0,0,0,1,1],
  [1,1,1,1,0,0,0,0,0,0, 0,0,0,1,1,0,0,0,0,0, 1,1,1,0,1,0,0,1,1,1, 1,1,1,0,0,0,0,0,1,1],
  [1,1,1,0,1,1,0,0,0,0, 0,0,0,1,0,0,0,0,0,0, 2,0,0,0,1,0,0,0,1,1, 1,0,0,0,0,1,1,1,1,1],
  [1,1,0,1,0,0,1,0,0,0, 0,0,0,1,1,0,0,0,0,1, 1,1,1,1,1,0,0,0,1,1, 0,0,0,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0, 0,0,0,1,1,1,2,1,1,1, 0,0,0,0,0,0,0,0,1,1, 0,1,0,1,1,1,1,1,1,1],
  [1,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,1,0,0,1,1, 0,1,0,1,1,1,1,1,1,1],
  [1,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,1,0,0,0,0,1, 1,1,0,1,1,1,1,1,1,1],

  [1,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,4,0,0, 0,0,0,0,0,0,0,0,0,0, 0,4,0,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,1,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,0,1,1, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,4,0,0,0,0, 0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,1, 1,1,1,1,1,1,0,1,1,1],
  [1,1,0,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,1,1,1, 1,1,1,1,1,1,1,0,0,1, 1,1,1,1,1,1,2,1,1,1],
  [1,1,1,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,1,1,1, 1,1,1,1,1,1,1,0,0,1, 1,0,0,1,0,0,0,0,0,1],
  [1,1,0,0,0,0,0,0,0,0, 0,0,0,0,1,1,0,0,1,0, 0,0,1,0,0,1,1,0,0,1, 1,0,1,1,1,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,0,0, 0,0,0,0,1,1,0,0,0,0, 0,0,0,0,0,1,1,2,2,1, 1,0,0,0,0,0,0,1,1,1],
  [1,0,1,0,0,0,0,0,0,0, 1,0,0,0,0,2,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,1],

  [1,0,0,0,0,0,0,0,0,0, 0,1,0,0,1,1,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,1],
  [0,1,0,0,0,0,0,0,0,0, 0,0,0,0,1,1,0,0,0,0, 7,0,0,0,1,0,0,1,0,0, 0,1,0,0,0,8,0,1,1,1],
  [0,0,0,0,4,0,0,0,0,0, 0,1,0,0,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1]
];


var currentX, currentY; // position of actor

function clearOldFrame() {
    ctx.clearRect(currentX*tile,currentY*tile,actorWidth,actorHeight);
}

function createChar() {
    // initiate position at pixel
    currentX = 9;
    currentY = 10;
}

// clears the board
function init() {
}

//listener
function keyPress( key ) {

    //console.log(currentY);
    //console.log(board[currentY][currentX]);
    switch ( key ) {
        case 'left':
            if (checkCollision(-1,0)) {
                clearOldFrame();
                --currentX;
            }
            break;
        case 'right':
            if (checkCollision(1,0)) {
                clearOldFrame();
                ++currentX;
            }
            break;
        case 'down':
            if (checkCollision(0, 1)) {
                clearOldFrame();
                ++currentY;
            }
            break;
        case 'up':
            if (checkCollision(0,-1)) {
                clearOldFrame();
                --currentY;
            }
            break;
    }
}

// checks if the resulting position of current shape will be feasible
function checkCollision(offsetX, offsetY) {

    //boundary check (DONE)
    if (currentX + offsetX<0    ||
        currentX + offsetX>=COLS ||
        currentY + offsetY<0    ||
        currentY + offsetY>=ROWS) {
        return false;
    }
    if (board[currentY + offsetY][currentX+offsetX] === 1) {
        console.log("collision");
        return false;
    }
    //"true" collision check
    

    
    if (currentX + offsetX === 20 &&
        currentY + offsetY === 7) {
        skillModal.style.display = "block";
    }

    if (currentX + offsetX === 29 &&
        currentY + offsetY === 17) {
        projectModal.style.display = "block";
    }
    return true;
}

function checkModal() {
    if (currentX !== 20 ||
        currentY !== 7) {
        skillModal.style.display = "none";
    }

    if (currentX !== 29 ||
        currentY !== 17) {
        projectModal.style.display = "none";
    }
}
function newGame() {
    init(); //clear the board
    createChar();   //create the moving character
}

newGame();