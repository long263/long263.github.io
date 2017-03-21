var ctx = canvas.getContext("2d");   

//sprite info     
var spriteWidth = 320; 
var spriteHeight = 32;       
var cols = 10; //number of animation in a sprite picture
                        
var actorWidth = spriteWidth/cols; 
var actorHeight = spriteHeight; 
            
var curFrame = 0; 
var frameCount = 10; 

//pivot for the sprite      
var pivotX= 0; 
var pivotY= 0; 
            
//chartacter image            
var actor = new Image(); 
actor.src = "sprite/character.png";
            
function updateFrame(){
    curFrame = ++curFrame % frameCount;                 
    pivotX = curFrame * actorWidth; 
    clearOldFrame();  
}
            
function draw(){
	//console.log("coord:" + currentX + ", " + currentY);
	//console.log("board:" + board[currentY][currentX]);
    updateFrame();
    checkModal();
    ctx.drawImage(actor,pivotX,pivotY,actorWidth,actorHeight,
                  currentX*tile,currentY*tile,actorWidth,actorHeight);
}

setInterval(draw,60);
            