var ctx = canvas.getContext("2d");   

//Character sprite info          
var actor = new Image(); 
actor.src = "./sprite/actor.png"; 
var charSpriteWidth = 128; 
var charSpriteHeight = 160;     
var cols = 4; //number of animation in a sprite picture
var rows = 5;                        
var actorWidth = charSpriteWidth/cols; 
var actorHeight = charSpriteHeight/rows; 
         
var curFrame = 0; 
var frameCount = 4; 
var speed = 8;
//---------------------------------------


//Object sprite info
var objSpriteWidth = 128;
var objSpriteHeight = 32;
var objWidth = objSpriteWidth/4;
var objHeight = objSpriteHeight;

//Skills Chest
var chest = new Image();
chest.src = "./sprite/chest.png";
var chestX = 36*tile;
var chestY = 2*tile;

//Diploma Scroll+ books
var book = new Image();
book.src = "./sprite/book.png";
var bookX = 14*tile;
var bookY = 2*tile;

var scroll = new Image();
scroll.src = "./sprite/scroll.png";
var scrollX = 23*tile;
var scrollY = 2*tile;

//Project Display
var projDisplay = new Image();
projDisplay.src = "./sprite/display.png";
var projDisplayX = 20*tile;
var projDisplayY = 21*tile;

var jobDisplay = new Image();
jobDisplay.src = "./sprite/display.png";
var jobDisplayX = 35*tile;
var jobDisplayY = 21*tile;
//---------------------------------------



//pivot for the sprite      
var pivotX= 0; 
var pivotY= 0; 
            

            
function updateFrame(){
	clearOldFrame();
    checkModal();
	var tempSpeed = 0;
    curFrame = ++curFrame % frameCount;                 
    pivotX = curFrame * actorWidth;
    pivotY = dir * actorWidth;
    switch(dir) {
    	case 0:
    		break;
    	case 1:
    		tempSpeed = checkCollision(0,-speed);
    		if (tempSpeed !== 0) {
    			currentY += tempSpeed;
    		}
    		break;
    	case 2:
    		tempSpeed = checkCollision(speed,0);
    		if (tempSpeed !== 0) {
    			currentX += tempSpeed;
    		}
    		break;
    	case 3:
    		tempSpeed = checkCollision(0,speed);
    		if (tempSpeed !== 0) {
    			currentY += tempSpeed;
    		}
    		break;
    	case 4:
    		tempSpeed = checkCollision(-speed,0);
    		if (tempSpeed !== 0) {
    			currentX += tempSpeed;
    		}
    		break;
    }
     
}
      


//-----------------------------DRAW METHODS-----------------------------//
function drawActor() {
    updateFrame();
    checkModal();
    //draw actor
    ctx.drawImage(actor,pivotX,pivotY,actorWidth,actorHeight,
                  currentX,currentY,actorWidth,actorHeight);
}
function drawText() {
    //education
    ctx.clearRect(14*tile,tile,tile*6,tile);
    ctx.font = '20px prstart';
    ctx.fillStyle = '#dee0e2';
    ctx.textBaseline = 'top';
    ctx.fillText('Education', 455, 40);

    ctx.clearRect(31*tile,0,tile*4,tile);
    ctx.fillStyle = 'black';
    ctx.fillText('Skills', 992, 11);

    ctx.clearRect(19*tile,22*tile,tile*15,tile);
    ctx.fillStyle = 'black';
    ctx.fillText('Projects and Experience', 620, 713);


}
function drawObj() {
    drawText();
    //draw skill chest
    ctx.clearRect(chestX,chestY,objWidth,objHeight);
    ctx.drawImage(chest,pivotX,0,objWidth,objHeight,
                  chestX,chestY,objWidth,objHeight);
    //draw book
    ctx.clearRect(bookX,bookY,objWidth,objHeight);
    ctx.drawImage(book,pivotX,0,objWidth,objHeight,
                  bookX,bookY,objWidth,objHeight);

    //draw diploma scroll
    ctx.clearRect(scrollX,scrollY,objWidth,objHeight);
    ctx.drawImage(scroll,pivotX,0,objWidth,objHeight,
                  scrollX,scrollY,objWidth,objHeight);

    //draw project display
    ctx.clearRect(projDisplayX,projDisplayY,objWidth,objHeight);
    ctx.drawImage(projDisplay,pivotX,0,objWidth,objHeight,
                  projDisplayX,projDisplayY,objWidth,objHeight);

    //draw job display
    ctx.clearRect(jobDisplayX,jobDisplayY,objWidth,objHeight);
    ctx.drawImage(jobDisplay,pivotX,0,objWidth,objHeight,
                  jobDisplayX,jobDisplayY,objWidth,objHeight);
}


//-------------------------------------------------------//

//Timer
setInterval(drawActor,80);
setInterval(drawObj,240);
            