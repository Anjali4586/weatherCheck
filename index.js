const apiKey = "09ddac82bbb08b24e0b42e38cdc41913";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//here we are keeping units= metric so that it gives in our standards eg:33.53;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL+city+`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

        //console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
    
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
    
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
    
        }
        else if(data.weather[0]=="Mist"){
            weatherIcon.src="images/mist.png";
        }
    
        else if(data.weather[0]=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
    
        }
        else if(data.weather[0]=="Clear"){
            weatherIcon.src="images/clear.png";
    
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


checkWeather();