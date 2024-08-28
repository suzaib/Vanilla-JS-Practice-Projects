//Accessing our HTML elements
let lists=document.querySelectorAll(".list");
let rightBox=document.querySelector("#right");
let leftBox=document.querySelector("#left");

//The dragover event is what that takes place while the element is being dragged
rightBox.addEventListener("dragover",(event)=>{

    //By default dropping the element is not allowed during dragging therefore we need to prevent this default
    event.preventDefault();
});

leftBox.addEventListener("dragover",(event)=>{
    event.preventDefault();
});

//Attaching event listener to each of the listItems;
lists.forEach((list)=>{
    //The dragstart event is fired when a html draggable element is dragged
    list.addEventListener("dragstart",(event)=>{
        let selected=event.target;


        //The drop event takes place when the element is dropped at the desired location
        rightBox.addEventListener("drop",()=>{
            rightBox.appendChild(selected);
            selected=null;
        });



        leftBox.addEventListener("drop",()=>{
            leftBox.appendChild(selected);
            selected=null;
        })
    })
})
