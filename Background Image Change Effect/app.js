// accessing all the elements
let imgBox=document.querySelector(".imgBox");
let imgWrap=document.querySelector(".imgWrap");
let originalImg=document.querySelector("#originalImg");
let line=document.querySelector("#line");


originalImg.style.width=imgBox.offsetWidth+"px";

let leftSpace=imgBox.offsetLeft

// As the mouse moves we change the width
imgBox.onmousemove=(event)=>{
    let boxWidth=(event.pageX - leftSpace)+"px";
    imgWrap.style.width=boxWidth;
    line.style.left=boxWidth;
}