// the entire canvas
var canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = canvas.getContext("2d");


var tile = 32;
var COLS = canvas.width/tile, ROWS = canvas.height/tile;
var dir = 0; // 0 still, 1 up, 2 right, 3 down, 4 left
var board = [
//legend: 2:door, 3:books, 4:sign, 5:edu, 6:skills, 7:projects
  [1,1,1,1,1,1,1,0,0,0, 0,4,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,1,1,1, 1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0,0,0, 0,0,0,1,1,1,1,1,1,1, 1,0,1,1,1,0,0,1,1,1, 1,1,1,0,0,0,0,0,1,1],
  [0,1,1,1,1,0,1,0,0,0, 0,0,0,1,3,1,1,1,0,1, 1,0,1,5,1,0,0,1,1,1, 1,1,1,0,0,0,6,0,1,1],
  [1,1,1,0,1,1,1,0,0,0, 0,0,0,1,0,0,0,0,0,1, 1,0,1,0,1,0,0,1,1,1, 1,1,1,0,0,0,0,0,1,1],
  [1,1,1,1,0,0,0,0,0,0, 0,0,0,1,1,0,0,0,0,0, 1,1,1,0,1,0,0,1,1,1, 1,1,1,0,0,0,0,0,1,1],
  [1,1,1,0,1,1,0,0,0,0, 0,0,0,1,0,0,0,0,0,0, 2,0,0,0,1,0,0,0,1,1, 1,0,0,0,0,1,1,1,1,1],
  [1,1,0,1,0,0,1,0,0,0, 0,0,0,1,1,0,0,0,0,1, 1,1,1,1,1,0,0,0,1,1, 0,0,0,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0, 0,0,0,1,1,1,0,1,1,1, 0,0,0,0,0,0,0,0,1,1, 0,1,0,1,1,1,1,1,1,1],
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
  [1,1,0,0,0,0,0,0,0,0, 0,0,0,0,1,1,0,0,0,0, 0,0,0,0,0,1,1,0,0,1, 1,0,0,0,0,0,0,1,1,1],
  [1,0,1,0,0,0,0,0,0,0, 1,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,1],

  [1,0,0,0,0,0,0,0,0,0, 0,1,0,0,1,1,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,1,1],
  [0,1,0,0,0,0,0,0,0,0, 0,0,0,0,1,1,0,0,0,0, 7,0,0,0,1,0,0,1,0,0, 0,1,0,0,0,8,0,1,1,1],
  [0,0,0,0,4,0,0,0,0,0, 0,1,0,0,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1]
];


var currentX, currentY; // position of actor
var degree = 0; //0: no degree, 1:just got degree, 2:done
var start = false;
//-------------------------------HELPER-----------------------//
function clearOldFrame() {
    ctx.clearRect(currentX,currentY,actorWidth,actorHeight);
}

function init() {
  createChar();
}

function createChar() {
    // initiate position at pixel
    currentX = 9*tile;
    currentY = 10*tile;
}
//------------------------------------------------------------//


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

function educated(val) { //1 means hit the door, 0 means hit the book
  var nmbody = document.getElementsByClassName("noticeModal-body")[0];
  var canMove = false;
  if (val === 1) {
    switch (degree) {
      case 0:
        noticeModal.style.display = "block";
        nmbody.innerHTML = "<h1>Notice</h1><p class='big'>One does not simple walk in and get a degree.</p><p class='big'>Go back to the room and study some books.</p><p class='small'>Move left to dismiss.</p>";
        break;
      case 1:
        noticeModal.style.display = "block";
        nmbody.innerHTML = "<h1>Notice</h1><p class='big'>Congratulation on the degree!</p><p class='small'>Move to dismiss.</p>";
        degree = 2;
        canMove = true;
        break;
      case 2:
        canMove = true;
        break;
    }

  //hit ht book
  }else if (val === 0  && degree === 0){
    noticeModal.style.display = "block";
    nmbody.innerHTML = "<h1>Notice</h1><p class='big'>Read all the books!</p><p class='big'>Time to get the degree!</p><p class='small'>Move down to dismiss.</p>";
    degree = 1;
    canMove = true;
  }else {
    canMove = true;
  }
  return canMove;
}
//collision detection (the cheap way)
function checkCollision(offsetX, offsetY) {
     //move Y axis
    if (offsetX ===0) {
        var newLocY= offsetY >=0 ? Math.floor(currentY/tile) + 1
                                 : Math.floor((currentY+offsetY)/tile);
        //boundary check
        if (newLocY < 0 || newLocY >= ROWS) {
            return 0;
        }

        //"true" collision check
        if (board[newLocY][Math.floor(currentX/tile)] === 1 ||
            board[newLocY][Math.ceil(currentX/tile)] === 1 ) {
            return 0;
        }
           
        //book check
        if (board[newLocY][Math.floor(currentX/tile)] === 3) {
          educated(0);
        }

        //degree check
        if (board[newLocY][Math.floor(currentX/tile)] === 5) {
          eduModal.style.display = "block";
        }

        return offsetY;  
    }

    //move X axis
    var newLocX= offsetX >=0 ? Math.floor(currentX/tile) + 1
                                 : Math.floor((currentX+offsetX)/tile);
    //boundary check
    if (newLocX < 0 || newLocX >= COLS) {
        return 0;
    }
    //"true" collision check
    if (board[Math.floor(currentY/tile)][newLocX] === 1 ||
        board[Math.ceil(currentY/tile)][newLocX] === 1 ) {
        return 0;
    }

    //EDUCATION ROOM
    if (board[Math.floor(currentY/tile)][newLocX] === 2) {
      if (!educated(1)) return 0; 
    }
    
    
    return offsetX;  
}

function checkModal() {
  if (board[Math.floor(currentY/tile)][Math.floor(currentX/tile) + 1] !== 2 &&
      board[Math.floor(currentY/tile)][Math.floor(currentX/tile)] !== 3) {
        noticeModal.style.display = "none";
  }

  if(board[Math.floor(currentY/tile)][Math.floor(currentX/tile)] !== 5) {
    eduModal.style.display = "none";
  }
}


init();