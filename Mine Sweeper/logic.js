//My minesweeper game isn't completely identical to the original one , as the first move can land you on a mine whereas the typical minesweeper game sets the location of mines after the first click
//Apart from that the game is exactly similar to any classic minesweeper game
//Happy Playing (right click for marking the tile for mine, left click for revealing the tile)


//Declaring different types of status that will be assigned to each tile
export const TILE_STATUSES={
    HIDDEN:'hidden',
    MINE:'mine',
    NUMBER:'number',
    MARKED:'marked',
}

//A function to create Board with tiles that can be mine or safe
export const createBoard=(boardSize,numberOfMines)=>{
    const board=[];
    const minePositions=getMinePositions(boardSize,numberOfMines);
    for(let x=0;x<boardSize;x++){
        const row=[];
        for(let y=0;y<boardSize;y++){
            const element=document.createElement("div");
            element.dataset.status=TILE_STATUSES.HIDDEN;
            const tile={
                element,
                x,
                y,
                mine:minePositions.some(positionMatch.bind(null,{x,y})),
                get status(){
                    return this.element.dataset.status;
                },
                set status(value){
                    this.element.dataset.status=value;
                }
            }
            row.push(tile)
        }
        board.push(row);
    }
    return board;

};

//A function to be executed when a tile is clicked for marking
export const markTiles=(tile)=>{

    if(tile.status!== TILE_STATUSES.HIDDEN && tile.status!==TILE_STATUSES.MARKED){
        return;
    }

    //If the tile is marked then it will be hidden on click
    if(tile.status===TILE_STATUSES.MARKED){
        tile.status=TILE_STATUSES.HIDDEN;
    }

    //If the tile is hidden , it will be marked on click
    else if(tile.status===TILE_STATUSES.HIDDEN){
        tile.status=TILE_STATUSES.MARKED;
    }
}

//A function to be executed when a tile is clicked for revelation
export const revealTile=(board,tile)=>{

    //If the tile is marked then it can't be revealed , you must first unmark it
    if(tile.status!==TILE_STATUSES.HIDDEN){
        return;
    }

    //If the tile has a mine , the status will be updated to MINE and function will return
    if(tile.mine){
        tile.status=TILE_STATUSES.MINE;
        return;
    };

    //if the tile is safe(that is it has a number then we will check for the adjacent tiles)
    tile.status=TILE_STATUSES.NUMBER;
    const adjacentTiles=nearbyTiles(board,tile);
    const mines=adjacentTiles.filter(t=>t.mine);

    //If there are no mine adjacent to the currently revealed tile then all the adjacent tiles are revealed as well
    if(mines.length===0){
        adjacentTiles.forEach(revealTile.bind(null,board))
    }

    //Otherwise it shows the number of adjacent tiles having mines
    else{
        tile.element.textContent=mines.length;
    }
}

//A function to check for Win , It iterates over every tile to check their status, 
export const checkWin=(board)=>{

    // .every method return true if the condition written inside is fulfilled
    return board.every(row=>{
        return row.every(tile=>{
            return (
                //Checking if every tile has either a number on it or:
                tile.status===TILE_STATUSES.NUMBER ||

                //if the tile doesn't have a number then if the tile is a mine and 
                (tile.mine && 

                    //if its still hidden
                    (tile.status===TILE_STATUSES.HIDDEN ||

                        //Correctly marked as a mine
                        tile.status===TILE_STATUSES.MARKED))
            )
        })
    })
}

//This function is to check lose
export const checkLose=(board)=>{
    return board.some(row=>{
        return row.some(tile=>{

            //If even one tile has been marked as mine after revelation then game is over
            return tile.status===TILE_STATUSES.MINE;
        })
    })

}

//This functions is executed after creation of board, it randomly sets position of mines
const getMinePositions=(boardSize,numberOfMines)=>{
    const positions=[];

    while(positions.length<numberOfMines){
        const position={
            x:randomNumber(boardSize),
            y:randomNumber(boardSize),
        }
        if(!positions.some(positionMatch.bind(null,position))){
            positions.push(position);
        }
    }

    return positions;

}

//A function to simply check for position match based on its argument, it will used later
const positionMatch=(a,b)=>{
    return a.x===b.x && a.y===b.y;
}

//A function to generate a random number whose size is based on argument given to it
const randomNumber=(size)=>{
    return Math.floor(Math.random()*size);
}

//A function to check for nearby tiles
const nearbyTiles=(board,{x,y})=>{
    const tiles=[];

    for(let xOffset=-1;xOffset<=1;xOffset++){
        for(let yOffset=-1;yOffset<=1;yOffset++){
            const tile=board[x+xOffset]?.[y+yOffset] //Optional Chaining in javascript. only if first condition is true then only the second condition is checked
            if(tile){
                tiles.push(tile);
            }
        }
    }

    return tiles;

}