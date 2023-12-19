


const apikey = "3e0679279638f1b52e6b7d2516bd92ac";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
 let input = document.getElementById('input');
 let search = document.getElementById('search');
 let img = document.getElementById('img');


async function weather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
    var data = await response.json();


    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°C';   // math.round for remove point in numders & M IS CAPITAL
    document.getElementById('humidity').innerHTML = data.main.humidity +'%';
    document.getElementById('windspeed').innerHTML = data.wind.speed + ' km/hr';
     
    if (data.weather[0].main== "Clear"){
           img.src = 'images/clear.png';
    }else if(data.weather[0].main== "Clouds"){
        img.src = 'images/clouds.png';
    }else if(data.weather[0].main== "Drizzle"){
        img.src = 'images/drizzle.png';
    }else if(data.weather[0].main== "Mist"){
        img.src = 'images/mist.png';
    }else if(data.weather[0].main== "Snow"){
        img.src = 'images/snow.png';
    }else if(data.weather[0].main== "Rain"){
        img.src = 'images/snow.png';
    };
};

search.addEventListener('click', ()=>{
    weather(input.value);
});