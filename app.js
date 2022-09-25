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
    par.innerText ="You already know";
    input.value = ""

    
} else{

    try {
        const response = await fetch(url);
        const data =  await response.json();
        const {weather,main,sys,name } = data
        let city = document.createElement("div");
        city.className = "city";
        cities.appendChild(city)


        city.innerHTML += `${name} <sup>${sys.country}</sup>  <br/> ${weather[0].main} <br/> ${ main.temp} <br/> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="" /> <br/> ${weather[0].description} `
        
        
    } catch (error) { 
       console.log("erorrr");
    }
}
};

btn.addEventListener("click", getWeather);
