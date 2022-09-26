const input = document.querySelector(".input");

const btn = document.querySelector("button");

const cities = document.querySelector(".cities");
const another = document.querySelector(".another");

const x = document.querySelector(".fa-solid");





const getWeather = async ()=>{
    const apiKey = "2b6fc034709f70ad0e769dd70ac76d07";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
if(cities.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
    const par = document.createElement("p");
    par.className ="par"
    another.appendChild(par);
    par.innerHTML =`You already know the weather for ${(input.value)}, Please search for another city`;
    input.value = "";    

} else{

    try {
        const response = await fetch(url);
        if(!response.ok){
            // throw new Error("there is not city called")
            input.value ="";
            hata()
            throw new error("someting");
            
        }else{
            
        const data =  await response.json();
        const {weather,main,sys,name } = data
        let city = document.createElement("div");
        city.className = "city";
        cities.appendChild(city)
        city.innerHTML += `<p>${name}<sup>${sys.country}</sup><i class="fa-solid fa-circle-xmark"></i></p>
         <p>${(main.temp).toFixed()}<sup>°C</sup></p> 
         <p><img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="" /></p> 
         <p>${(weather[0].description).toUpperCase()}</p>`

         input.value = "";
         
         
        
        }   
    } catch (error) { 
       console.log("erorrr");
    }
}
};

btn.addEventListener("click", getWeather);

const hata = ()=>{

    cities.innerHTML = `<img src="https://cdn.pixabay.com/photo/2021/01/10/20/03/laptop-5906264__340.png" alt="" />`

}

