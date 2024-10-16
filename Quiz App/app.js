//Accessing our HTML Elements
const questionElement=document.querySelector("#question");
const answerButtons=document.querySelector("#answerButtons");
const nextButton=document.querySelector("#nextBtn");

//An Array will store the questions and their answers along with a tag of whether a particular answer is correct or not
const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },

    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",corrct:false},
        ]
    }
];

//Initializing the currentQuestionIndex and score as 0
let currentQuestionIndex=0;
let score=0;

//The handleNextButton function increses the currentQuestionIndex by 1 as long as the index is not out of bound
const handleNextButton=()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){

        //If index is valid then the next question is shown using showQuestion function
        showQuestion();
    }

    //Otherwise the score is shown indicating that all the questions have been answered
    else{
        showScore();
    }
}


//The showScore function does two tasks
const showScore=()=>{

    //first, it calls the resetState function
    resetState();

    //then it changes the questionElement and nextButton appropriately to show the score
    questionElement.innerText=`You scored ${score} out of ${questions.length} `;
    nextButton.style.display="block";
    nextButton.innerText="Play Again";
}

//The selectAnswer function checks the answer selected using the event's target and checks if the tag with the answer was true or not
const selectAnswer=(event)=>{
    const selectedBtn=event.target;
    const isCorrect=selectedBtn.dataset.correct==="true";

    //In case the answer was correct , the correct class is added to that option
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }

    //If the answer was not correct , incorrect class is added to it
    else{
        selectedBtn.classList.add("incorrect");
    }

    //We now make sure to disable all the remaining options so they can't be clicked, we also show what is the correct answer (if the user has chosen a wrong answer)

    //Iterating over each of the buttons
    Array.from(answerButtons.children).forEach((button)=>{
        
        //Adding the correct class to the right option
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        
        //Then disabling the button (so it can't be clicked)
        button.disabled=true;
    });
    nextButton.style.display="block";
}

//The resetState function:
const resetState=()=>{

    //Hides the nextButton 
    nextButton.style.display="none";
    while(answerButtons.firstChild){

        //removes each of the buttons that contained the options
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//The showQuestion function first calls the resetState
const showQuestion=()=>{
    resetState();

    //Then gives the current question index so that the question can be fetched from the array along with assigning questionNo and filling the questionElement's innerHTML
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    
    //Iterating over each answer in the array to create an option for each one of them 
    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        //Attaching and eventListener to the newly created button 
        button.addEventListener("click",selectAnswer);
    });
}

//The startQuiz function sets the currentQuestionIndex and score to 0 along with calling showQuestion function and filling the nextButton with text
const startQuiz=()=>{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerText="Next";
    showQuestion();
}

//The startQuiz is called as soon as the program loads
startQuiz();

//Attaching eventListener to nextButton
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }

    else{
        startQuiz();
    }
})
