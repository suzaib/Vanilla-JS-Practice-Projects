//Accessing Our HTML Elements
const toastBox=document.querySelector("#toastBox");

//Defining default HTML that we will put inside the notification container
let successMsg='<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid input , check again';

//Defining the showToast function to show the notification by :
const showToast=(msg)=>{
    let toast=document.createElement("div");

    //Adding the class toast to toast element
    toast.classList.add("toast");

    //Puts our msg (taken as argument) as its innerHTML
    toast.innerHTML=msg;

    //Then we append this toast element to the toastBox
    toastBox.appendChild(toast);

    //We know add the class based on the msg (the class gives the particular styling for different messages)
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    if(msg.includes('Success')){
        toast.classList.add('success');
    }

    //This timeout tells the notification to disappear after the said duration
    setTimeout(()=>{
        toast.remove();
    },5000)
}
