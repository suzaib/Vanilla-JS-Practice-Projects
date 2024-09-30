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

const questionElement=document.querySelector("#question");
const answerButtons=document.querySelector("#answerButtons");
const nextButton=document.querySelector("#nextBtn");

let currentQuestionIndex=0;
let score=0;

const handleNextButton=()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

const showScore=()=>{
    resetState();
    questionElement.innerText=`You scored ${score} out of ${questions.length} `;
    nextButton.style.display="block";
    nextButton.innerText="Play Again";
}

const selectAnswer=(event)=>{
    const selectedBtn=event.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

const resetState=()=>{
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

const showQuestion=()=>{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

const startQuiz=()=>{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerText="Next";
    showQuestion();
}

startQuiz();


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})