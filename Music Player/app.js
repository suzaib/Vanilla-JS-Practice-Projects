//Accessing our HTML elements
const progress=document.querySelector("#progress");
const song=document.querySelector("#song");
const pausePlayBtn=document.querySelector(".pauseBtn");
const playNextBtn=document.querySelector(".playNextBtn");
const playPrevBtn=document.querySelector(".playPrevBtn");
const audioSource=song.querySelector('source');


//Defining our current track number ( total 6 tracks , if you want more , then simply add another track with title "music7.mp3" in media files);
let currentTrack=1;

//Storing our total tracks numbers
let totalTracks=5;


//onloadedmetadata event takes place after the content inside the audio/video file is loaded but before it starts playing
//This event is fired everytime a new song is loaded
song.onloadedmetadata=()=>{
    progress.max=song.duration;
    progress.value=song.currentTime;
}


//We declare a function to play and pause our song 
const playPause=()=>{

    //We check which icon is there , if it is a pause icon we stop the song and if it is a play icon , we play the song when it is clicked
    if(pausePlayBtn.children[0].classList.contains("fa-pause")){
        song.pause();

        //This code below changes the icon from pause to play
        pausePlayBtn.children[0].classList.remove("fa-pause")
        pausePlayBtn.children[0].classList.add("fa-play");
    }

    else {
        song.play();

        //This code below changes the icon from play to pause
        pausePlayBtn.children[0].classList.remove("fa-play");
        pausePlayBtn.children[0].classList.add("fa-pause");
    }
}

//Function to play nextTrack by changing the src of audio
const playNextTrack=()=>{
    if(currentTrack<totalTracks){
        currentTrack=currentTrack+1;
        audioSource.src=`media/music${currentTrack}.mp3`
    }
    else{
        currentTrack=1;
        audioSource.src=`media/music${currentTrack}.mp3`
    }

    //This is need to load the metadata of the song 
    song.load();

    //This is needed to play the song
    song.play();

    if(pausePlayBtn.children[0].classList.contains("fa-play")){
        pausePlayBtn.children[0].classList.remove("fa-play");
        pausePlayBtn.children[0].classList.add("fa-pause");
    }
}

const playPrevTrack=()=>{
    if(currentTrack>1){
        currentTrack=currentTrack-1;
        audioSource.src=`media/music${currentTrack}.mp3`;
    }
    else{
        currentTrack=totalTracks;
        audioSource.src=`media/music${currentTrack}.mp3`
    }

    //This is needed to load the metadata of the song 
    song.load();

    //This is needed to play the song
    song.play();
}

//Attaching event listeners to play/pause btn and to next and previous track btns
pausePlayBtn.addEventListener("click",playPause);
playNextBtn.addEventListener("click",playNextTrack);
playPrevBtn.addEventListener("click",playPrevTrack);

//This function executes every sec and resets the cursor to its new position indicating how much song is played and how much is left
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },1000)
}

//If someone changes the progressBar then :
progress.onchange=function(){

    //we make sure song keeps playing
    song.play();

    //the song duration is correctly shown in progressBar
    song.currentTime=progress.value;

    //the icon available is for pausing the song
    pausePlayBtn.children[0].classList.add("fa-pause");
    pausePlayBtn.children[0].classList.remove("fa-play");
}
