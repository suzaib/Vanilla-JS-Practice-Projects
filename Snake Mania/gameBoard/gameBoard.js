// Game Constants and Variables

let direction={x:0,y:0};
const foodSound=new Audio("../music/food.mp3");
const gameOverSound=new Audio("../music/gameover.mp3");
const moveSound=new Audio("../music/move.mp3");

let board=document.querySelector("#board");
let scoreBoard=document.querySelector("#score");
let highScore=localStorage.getItem("highScore");
let loseBox=document.querySelector("#loseBox");
let playAgain=document.querySelector("#playAgain");
let exit=document.querySelector("#exit");
let highScoreBox=document.querySelector("#highScoreBox");
let highScoreVal;

if(highScore===null){
    highScoreVal=0;
    localStorage.setItem("highScore",JSON.stringify(highScoreVal));
}
else{
    highScoreVal=JSON.parse(highScore);
    highScoreBox.innerHTML="High Score : "+highScore;
}


let speed = 5;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

let food={x:6,y:7};
let inputDir={x:0,y:0};


// Game Functions

const isCollide=(snake)=>{

    // If you bump into yourself

    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            score=0;
            scoreBoard.innerText="Score : 0";
            return true;
        }
    }

    // If you bump into wall

    if(snake[0].x>18 || snake[0].x<0 || snake[0].y>18 || snake[0].y<0){
        score=0;
        scoreBoard.innerText="Score : 0";
        return true;
    }

}

const main=(currTime)=>{
    window.requestAnimationFrame(main);
    if((currTime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=currTime;
    gameEngine();
}

const gameEngine=()=>{
    //Part 1:Updating the snake array & food

    if(isCollide(snakeArr)===true){
        gameOverSound.play();
        inputDir={x:0,y:0};
        loseBox.style.display="flex";
        snakeArr=[{x:13,y:15}];
        musicSound.loop=true;
        musicSound.play();
        score=0;
        scoreBoard.innerHTML="Score : 0";
    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score++;
        if(score>highScoreVal){
            highScoreVal=score;
            localStorage.setItem("highScore",JSON.stringify(highScoreVal))
            highScoreBox.innerHTML="High Score : "+highScoreVal;
        }
        scoreBoard.innerHTML="Score : "+score;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y + inputDir.y})
        food={x:Math.floor(Math.random()*18)+1,y:Math.floor(Math.random()*18)+1};
    }

    // Moving The Snake

    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]}// Use this whenever you want to create a copy of an array with some changes
    }

    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;



    //Part 2:Display the snake
    
    board.innerHTML="";
    snakeArr.forEach((element,idx)=>{
        snakeElement=document.createElement("div");
        snakeElement.style.gridRowStart=element.y;
        snakeElement.style.gridColumnStart=element.x;
        if(idx==0){
            snakeElement.classList.add("head");
        }
        else{
            snakeElement.classList.add("snakeBody");
        }
        board.appendChild(snakeElement);
    })

    //Part 3:Displaying the food

    foodElement=document.createElement("div");
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}






// Game Logic

window.requestAnimationFrame(main);

window.addEventListener("keydown",(event)=>{
    
    //Start the game
    
    let key=event.key;
    if(key=="ArrowUp"|| key=="w"){
        moveSound.play();
        inputDir.x=0;
        inputDir.y=-1;
    }
    else if(key=="ArrowDown" || key=="s"){
        moveSound.play();
        inputDir.x=0;
        inputDir.y=1;
    }
    else if(key=="ArrowLeft" || key=="a"){
        moveSound.play();
        inputDir.x=-1;
        inputDir.y=0;
    }
    else if(key=="ArrowRight" || key=="d"){
        moveSound.play();
        inputDir.x=1;
        inputDir.y=0;
    }
})

playAgain.addEventListener("click",()=>{

    //This reloads the window
    window.location.reload();
})

exit.addEventListener("click",()=>{
    window.history.back()
})


