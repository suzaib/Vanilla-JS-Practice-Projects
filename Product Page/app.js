//Accessing our HTML Elements
let productImg=document.querySelector("#productImg");
let btns=document.querySelectorAll(".btn");

//Here we add event to each of the button that is to display different images of product
//When clicked , we first set the src of productImg corresponding to the button clicked
btns[0].addEventListener("click",(event)=>{
    productImg.src="images/image1.png";

    //We then remove the active class from each of the buttons
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });

    //We then add the active class to the button that was clicked
    event.target.classList.add("active");
})


//We do this with all the buttons
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
