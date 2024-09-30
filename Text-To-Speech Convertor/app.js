let speech=new SpeechSynthesisUtterance();
let voiceSelect=document.querySelector("select");

let voices=[];

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>{
        voiceSelect.options[i]=new Option(voice.name,i);
    })
}

let textarea=document.querySelector("textarea");
let listenButton=document.querySelector("button");

listenButton.addEventListener("click",()=>{
    speech.text=textarea.value;
    window.speechSynthesis.speak(speech);
})


