//My minesweeper game isn't completely identical to the original one , as the first move can land you on a mine whereas the typical minesweeper game sets the location of mines after the first click
//Apart from that the game is exactly similar to any classic minesweeper game
//Happy Playing (right click for markging the tile for mine , left click for revealing the tile)

import {
    TILE_STATUSES, 
    createBoard , 
    markTiles , 
    revealTile , 
    checkWin , 
    checkLose 
} 
from "./logic.js";


// 1.Populate a board with tiles/mines

const BOARD_SIZE=10;
const NUMBER_OF_MINES=10;

//Accessing Our HTML elements
const board=createBoard(BOARD_SIZE,NUMBER_OF_MINES);
const boardElement=document.querySelector(".board");
const minesLeftText=document.querySelector('[data-mine-count]')
const messageText=document.querySelector(".subtext");
const playAgain=document.querySelector(".playAgain");

boardElement.style.setProperty('--size',BOARD_SIZE)
board.forEach(row=>{
    row.forEach(tile=>{
        boardElement.append(tile.element);

        //2. Left click on tiles

        tile.element.addEventListener("click",()=>{
            //a.Reveal tiles

            revealTile(board,tile);

            //Check for Win/Lose Condition

            checkGameEnd();

        });

        //3. Right click on tiles

        tile.element.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            
            //a.Mark tiles

            markTiles(tile);
            listMinesLeft();
        })
    })
});

minesLeftText.textContent=NUMBER_OF_MINES;

const listMinesLeft=()=>{
    const markedTilesCount=board.reduce((count,row)=>{
        return (count+row.filter(tile=>tile.status===TILE_STATUSES.MARKED).length)
    },0);

    minesLeftText.textContent=NUMBER_OF_MINES-markedTilesCount
}


const checkGameEnd=()=>{
    const win=checkWin(board);
    const lose=checkLose(board);

    if(win||lose){
        playAgain.style.display="flex";
        boardElement.addEventListener("click",stopProp,{capture:true});
        boardElement.addEventListener("click",stopProp,{capture:true});
    }

    if(win){
        messageText.textContent="Congratulations!! You Have Won";
    }

    if(lose){
        messageText.textContent="You Have Lost";
        board.forEach(row=>{
            row.forEach(tile=>{
                if(tile.status===TILE_STATUSES.MARKED){
                    markTiles(tile);
                }
                if(tile.mine){
                    revealTile(board,tile);
                }
            })
        })
    }
}

const stopProp=(event)=>{
    event.stopImmediatePropagation()
}

//Reloading the window on clicking play again
playAgain.addEventListener("click",()=>{
    window.location.reload();
})





























