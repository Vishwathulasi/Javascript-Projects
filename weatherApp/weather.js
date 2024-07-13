const apiKey="a68a0a16a564fe33ba918b877c0dd8fd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

        console.log("data",data);
        document.querySelector(".city").innerText=data.name;
        document.querySelector(".temp").innerText=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerText=data.main.humidity + "%";
        document.querySelector(".wind").innerText=data.wind.speed + " km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png"
        }
    }


}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
})
