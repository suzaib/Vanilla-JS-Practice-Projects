let productImg=document.querySelector("#productImg");
let btns=document.querySelectorAll(".btn");

btns[0].addEventListener("click",(event)=>{
    productImg.src="images/image1.png";
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
})

btns[1].addEventListener("click",(event)=>{
    productImg.src="images/image2.png";
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
})

btns[2].addEventListener("click",(event)=>{
    productImg.src="images/image3.png";
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
})