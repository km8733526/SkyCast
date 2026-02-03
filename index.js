const cityInput = document.querySelector('.inputcity');
const searchBtn = document.querySelector('.sbtn');
const weatherInfo = document.querySelector('.winfo');
const searchSection = document.querySelector('.search');
const notFoundSection = document.querySelector('.notfound');

const apiKey = '73814b9300444b77970164429260302';

async function getWeather(city) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            showSection(notFoundSection);
            return;
        }

        document.querySelector('.country').textContent = data.location.name;
        document.querySelector('.temp').textContent = Math.round(data.current.temp_c) + " °C";
        document.querySelector('.condition').textContent = data.current.condition.text;
        document.querySelector('.hp').textContent = data.current.humidity + "%";
        document.querySelector('.wp').textContent = data.current.wind_kph + " km/h";

        const date = new Date(data.location.localtime);
        const options = { weekday: 'short', day: '2-digit', month: 'short' };
        document.querySelector('.datetxt').textContent = date.toLocaleDateString('en-GB', options).toLowerCase();

        updateWeatherIcon(data.current.condition.text, document.querySelector('.wimg'));

        updateForecast(data.forecast.forecastday);

        showSection(weatherInfo);
    } catch (error) {
        showSection(notFoundSection);
    }
}

function updateWeatherIcon(condition, element) {
    const text = condition.toLowerCase();
    let imgName = "clouds.svg"; // Default

    if (text.includes("clear") || text.includes("sunny")) imgName = "clear.svg";
    else if (text.includes("rain") || text.includes("drizzle")) imgName = "rain.svg";
    else if (text.includes("thunder")) imgName = "thunderstorm.svg";
    else if (text.includes("snow")) imgName = "snow.svg";
    else if (text.includes("mist") || text.includes("fog")) imgName = "atmosphere.svg";
    
    element.src = `weather/${imgName}`;
}

function updateForecast(forecastDays) {
    const forecastContainer = document.querySelector('.fitems');
    forecastContainer.innerHTML = ''; 

    forecastDays.forEach(day => {
        const dateObj = new Date(day.date);
        const formattedDate = dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toLowerCase();
        
        let forecastIcon = "clouds.svg";
        const cond = day.day.condition.text.toLowerCase();
        if (cond.includes("clear") || cond.includes("sunny")) forecastIcon = "clear.svg";
        else if (cond.includes("rain")) forecastIcon = "rain.svg";
        else if (cond.includes("thunder")) forecastIcon = "thunderstorm.svg";

        const cardHtml = `
            <div class="fitem">
                <h5 class="fitemd">${formattedDate}</h5>
                <img src="weather/${forecastIcon}" class="fitemi">
                <h5 class="fitemt">${Math.round(day.day.avgtemp_c)} °C</h5>
            </div>
        `;
        forecastContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
}

function showSection(section) {
    [weatherInfo, searchSection, notFoundSection].forEach(s => s.style.display = "none");
    section.style.display = section === weatherInfo ? "flex" : "block";
}

searchBtn.addEventListener('click', () => getWeather(cityInput.value));