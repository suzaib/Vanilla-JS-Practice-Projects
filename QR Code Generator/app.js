//Accessing our HTML Elements
let imgBox=document.querySelector("#imgBox");
let qrImage=document.querySelector("#qrImage");
let qrText=document.querySelector("#qrText");
let button=document.querySelector("button");

//Function to generate QR
const generateQR=()=>{

    //Works well if search box isn't empty
    if(qrText.value.length>0){
        //This is a free api that generates a QR for us on the basis of text entered and then we store the QR as image
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img");
    }

    //If search box is empty we throw an error while vibrating the search box for a eye catching effect
    else{
        qrText.classList.add("error");

        //We set the time for the vibration of the search box
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }
}

//Finally calling the generate QR function when the button is clicked
button.addEventListener("click",()=>{
    generateQR();
})





