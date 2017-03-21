// the entire canvas
var canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = canvas.getContext("2d");
var tile = 32;
var COLS = canvas.width/tile, ROWS = canvas.height/tile;
var dir = 0; // 0 still, 1 up, 2 right, 3 down, 4 left
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
    ctx.clearRect(currentX,currentY,actorWidth,actorHeight);
}

function createChar() {
    // initiate position at pixel
    currentX = 9*tile;
    currentY = 10*tile;
}

// clears the board
function init() {
}

//listener
function keyPress( key ) {
    var temp;
    switch ( key ) {
        case 'up':
            dir = 1;
            break;
        case 'right':
            dir = 2;
            break;
        case 'down':
            dir = 3;
            break;
        case 'left':
            dir = 4;
            break;    
    }
}

function keyRelease(key) {
    dir = 0;
}


// checks if the resulting position of current shape will be feasible
function checkCollision(offsetX, offsetY) {
    if (offsetX ===0) { //that means move Y axis
        var newLocY= offsetY >=0 ? Math.floor(currentY/tile) + 1
                                 : Math.floor((currentY+offsetY)/tile);
        //boundary check (DONE)
        if (newLocY < 0 || newLocY >= ROWS) {
            return 0;
        }
        //"true" collision check
        if (board[newLocY][Math.floor(currentX/tile)] === 1 ||
            board[newLocY][Math.ceil(currentX/tile)] === 1 ) {
            return 0;
        }
        return offsetY;     
        // if (board[currentY + offsetY][currentX+offsetX] === 6) {
        //     skillModal.style.display = "block";
        // }

        // if (currentX + offsetX === 29 &&
        //     currentY + offsetY === 17) {
        //     projectModal.style.display = "block";
        // }
    }

    //move X axis
    var newLocX= offsetX >=0 ? Math.floor(currentX/tile) + 1
                                 : Math.floor((currentX+offsetX)/tile);
    //boundary check (DONE)
    if (newLocX < 0 || newLocX >= COLS) {
        return 0;
    }
    //"true" collision check
    if (board[Math.floor(currentY/tile)][newLocX] === 1 ||
        board[Math.ceil(currentY/tile)][newLocX] === 1 ) {
        return 0;
    }
    return offsetX; 
}

function checkModal() {
    // if (board[currentY][currentX] !== 6) {
    //     skillModal.style.display = "none";
    // }

    // if (currentX !== 29 ||
    //     currentY !== 17) {
    //     projectModal.style.display = "none";
    // }
}
function newGame() {
    createChar();   //create the moving character
}

newGame();