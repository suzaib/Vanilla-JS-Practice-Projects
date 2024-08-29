//Accessing our HTML elements
let scrollContainer=document.querySelector(".gallery")
let backBtn=document.querySelector("#backBtn");
let nextBtn=document.querySelector("#nextBtn");

//Attaching event listeners 
//The wheel event is fired upon scrolling the mouse wheel 
scrollContainer.addEventListener("wheel",(event)=>{

    //The default action is to scroll the page but we don't want that so we prevent default
    event.preventDefault();

    //scrollLeft tells how much the html element has been scrolled
    //deltaY tells the total scroll done by the mouse wheel
    scrollContainer.scrollLeft+=event.deltaY;

    //scrollBehaviour refers to the way scrolling will take place , auto means so special effects , just abrupt scrolling (immediately on rotating wheel)
    scrollContainer.style.scrollBehavior="auto";
});

nextBtn.addEventListener("click",()=>{

    //smooth behaviour means the scrolling will happen slowly giving a smooth effect
    scrollContainer.style.scrollBehavior="smooth";

    //290 here is just enough to show the remaining portion of our image gallery
    scrollContainer.scrollLeft+=290;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=290;
})
