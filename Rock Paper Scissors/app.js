let userScore=0;
let compScore=0;
let userpoints=document.querySelector("#user-score");
let comppoints=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const generateComputerChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="It's a Draw";
    msg.style.backgroundColor="white";
    msg.style.color="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText=`You Win!!   ${userChoice} beats ${compChoice}`;
        userScore++;
        userpoints.innerText=userScore;
        msg.style.backgroundColor="green";
        msg.style.color="#DCF2F1";

    }
    else{
        console.log("You have lost");
        msg.innerText=`Computer Wins   ${compChoice} beats ${userChoice}`;
        compScore++;
        comppoints.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.style.color="#1D2B53";
    }
};

const playGame=(userChoice)=>{
    const compChoice=generateComputerChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='Rock'){
            userWin=compChoice==="Paper"? false:true;
        }
        else if(userChoice==='Scissors'){
            userWin=compChoice==="Rock"?false:true;
        }
        else{
            userWin=compChoice==="Scissors"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});