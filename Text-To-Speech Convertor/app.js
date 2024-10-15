//Accessing our HTML elements
let voiceSelect=document.querySelector("select");
let textarea=document.querySelector("textarea");
let listenButton=document.querySelector("button");

//Using the WEB speech API to make a speech request
let speech=new SpeechSynthesisUtterance();

//Declaring an array that will store different voices
let voices=[];

//Attaching eventListener that is called when you change/select the voices
//This stores the new value selected as the new speech 
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});

//This function is called only when the available list of speech synthesis voice changes
//Hence this function will execute when the page loads and then whenever a new voice is added to the Web speech api
window.speechSynthesis.onvoiceschanged=()=>{

    //The list of available voices is stored inside the voices array
    voices=window.speechSynthesis.getVoices();

    //Setting a default voice speech
    speech.voice=voices[0];

    //Now filling the options with the available speech synthesis voices
    voices.forEach((voice,i)=>{
        voiceSelect.options[i]=new Option(voice.name,i);
    })
}


//Calling the speech function to convert text to speech based on the text inside the textarea and the speech voice selected currently
listenButton.addEventListener("click",()=>{
    speech.text=textarea.value;
    window.speechSynthesis.speak(speech);
})


