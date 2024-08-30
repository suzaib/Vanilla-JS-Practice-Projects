//Accessing our HTML elements
const quote=document.querySelector("blockquote");
const author=document.querySelector("span");
const newButton=document.querySelector(".newQuote");
const tweetButton=document.querySelector(".tweet");  

//configuring our api
const url ="https://api.quotable.io/random";

//this tweet function opens up twitter on browser 
const tweet=()=>{
    window.open("https://twitter.com/intent/tweet?text="+quote.innerText+"----- by "+author.innerText,"Tweet Window","width=600,height=300");
}

//this function uses the api to fetch a random quote along with its author , the function is async as 
const getQuote=async()=>{
    const response=await fetch(url);
    let data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

//Attaching eventListener to call getQuote function
newButton.addEventListener("click",getQuote)

//Attaching eventListener to post tweet
tweetButton.addEventListener("click",tweet);

//calling the getQuote function to display a random quote on opening our web-app
getQuote();
