const input = document.querySelector(".input");

const btn = document.querySelector("button");

const cities = document.querySelector(".cities");
const another = document.querySelector(".another");



const getWeather = async ()=>{
    const apiKey = "2b6fc034709f70ad0e769dd70ac76d07";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
if(cities.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
    const par = document.createElement("p");
    par.className ="par"
    another.appendChild(par);
    par.innerText =`You already know the weather for ${(input.value)}`;
    input.value = ""

    
} else{

    try {
        const response = await fetch(url);
        const data =  await response.json();
        const {weather,main,sys,name } = data
        let city = document.createElement("div");
        city.className = "city";
        cities.appendChild(city)
        city.innerHTML += `<p>${name}<sup>${sys.country}</sup></p>
         <p>${(main.temp).toFixed()}<sup>°C</sup></p> 
         <p><img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="" /></p> 
         <p>${(weather[0].description).toUpperCase()}</p>`

         input.value = ""
        
        
    } catch (error) { 
       console.log("erorrr");
    }
}
};

btn.addEventListener("click", getWeather);
