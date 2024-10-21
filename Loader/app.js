//Accessing our HTML Elements
let number=document.querySelector("#number");

//Initialising counter variable that will show how much loader has progressed
let counter=0;

//The setInterval function will be called every 30 milliseconds and will update the counter value by 1 until it becomes 65
setInterval(()=>{

    //When counter value becomes 65 it stops the setInterval function and the counter halts
    if(counter==65){
        clearInterval();
    }

    //Otherwise the counter keeps increasing
    else{
        counter+=1;
        number.innerText=counter+"%";
    }
},30)
