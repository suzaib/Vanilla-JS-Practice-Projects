//Accessing our HTML elements
let userpoints=document.querySelector("#user-score");
let comppoints=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

//Initialising the userScore and compScore
let userScore=0;
let compScore=0;

//Function to generate computer choice 
const generateComputerChoice=()=>{

    //We first create an array of three elements consisting rock paper and scissors
    const options=["Rock","Paper","Scissors"];

    //Then we take a random number from 0-3 and based on that we pick one element
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

//Function to be called when the round ends in draw
const drawGame=()=>{

    //displaying the draw msg and applying the appropriate styling
    msg.innerText="It's a Draw";
    msg.style.backgroundColor="white";
    msg.style.color="black";
}

//Function to show Winner 
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){

        //Displaying the result in msg and increasing the score
        msg.innerText=`You Win!!   ${userChoice} beats ${compChoice}`;
        userScore++;
        userpoints.innerText=userScore;
        msg.style.backgroundColor="green";
        msg.style.color="#DCF2F1";

    }
    else{
        msg.innerText=`Computer Wins   ${compChoice} beats ${userChoice}`;
        compScore++;
        comppoints.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.style.color="#1D2B53";
    }
};

//Function to play game
const playGame=(userChoice)=>{

    //Calling the generateComputerChoice function to generate a computer choice and storing it inside the compChoice variable
    const compChoice=generateComputerChoice();

    //if userChoice is same as compChoice then the round ends in draw
    if(userChoice===compChoice){
        drawGame();
    }


    else{
        let userWin=true;

        //Now if the userChoice beats the computer's choice then userChoice has value true otherwise it is false
        if(userChoice==='Rock'){
            userWin=compChoice==="Paper"? false:true;
        }
        else if(userChoice==='Scissors'){
            userWin=compChoice==="Rock"?false:true;
        }
        else{
            userWin=compChoice==="Scissors"?false:true;
        }

        //Calling show winner to declare winner
        showWinner(userWin,userChoice,compChoice)
    }
};

//Each of the rock , paper and scissors image is attached to an event listener which gets the id from the chosen option and assigns it to userChoice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");

        //Then we call the playGame function with userChoice as argument
        playGame(userChoice);
    });
});
