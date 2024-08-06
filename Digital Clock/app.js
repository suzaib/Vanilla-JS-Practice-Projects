let timeBox=document.querySelector("#time");

const options={
    hour12:false,
    hours:"2-digit",
    min:"2-digit",
    sec:"2-digit"
}

setInterval(()=>{

    //toLocaleTimeString can take several arguments
    //undefined here refers to the time zone , since it is undefined therefore it takes the time zone of the system on which the code is running
    let time=new Date().toLocaleTimeString(undefined,options);
    timeBox.innerText=time;
},1000)












