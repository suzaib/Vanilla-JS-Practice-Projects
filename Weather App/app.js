//Accessing our HTML elements
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const card=document.querySelector(".card");
let weatherIcon=document.querySelector(".weather-icon");

//Defining our variables to be used throughout this program
let condition;
let data;
let response;

//Configuring the API that will fetch us our data(It's a free API with its own demerits)
const apiKey="6bf7b344b253f3cbe886c11836ce1e79";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//Defining a function to check Weather , it takes an argument city and returns the current weather using the api used
const checkWeather=async(city)=>{
    response=await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status==404){
        //Handling the error
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        //We wait for the data to be arrived and then only we proceed further
        data=await response.json();

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

        //The condition property of the data received tells us about the weather type
        condition=data.weather[0].main;
    
        if(condition=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(condition=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(condition=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(condition=="Humidity"){
            weatherIcon.src="images/humidity.png";
        }
        else if(condition=="Mist"){
            weatherIcon.src="images/mist.png";
        }
        else if(condition=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(condition=="Snow"){
            weatherIcon.src="images/snow.png";
        }
        else if(condition=="Wind"){
            weatherIcon.src="images/wind.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }

}

//Attaching event listener to run checkWeather function on click
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

//Attaching event listener to run the checkWeather function on pressing Enter
document.addEventListener("keydown",(event)=>{
    if(event.key==="Enter" && searchBox.value!==""){
        checkWeather(searchBox.value);
    }
})
