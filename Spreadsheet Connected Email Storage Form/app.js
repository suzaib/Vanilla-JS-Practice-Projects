//Attaching our google spreadsheet to store all the emails
const scriptURL = 'https://script.google.com/macros/s/AKfycbwm_btf0MSJw35N0plQU0N7j7aiuGj212nVhdl9svx_6DjEU5AzRrUbZT5F-_aqsJJU/exec';

//Accessing our form inside html
const form = document.forms['submit-to-google-sheet']

//Accessing our HTML elements
const msg=document.querySelector("#msg");

//Attaching event Listener to our form
form.addEventListener('submit', e => {

    //default behaviour refreshes the page , so we need to prevent that
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
        msg.innerText="Thank You For Subscribing";
        //Set Timeout to make the msg dissapear after 3 seconds
        setTimeout(()=>{
            msg.innerText="";
        },3000)

        // Then we reset the form (empty its fields)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
