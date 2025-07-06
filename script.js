const weatherApiKey = 'e879a44fe4b6856ad1a374112078a455'; 

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric&lang=id`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('weatherResult').innerHTML = `
                <h3>Cuaca di ${data.name}</h3>
                <p>${data.weather[0].description}</p>
                <p>Suhu: ${data.main.temp}°C</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `
                <p style="color:red;">Kota tidak ditemukan atau API Key salah.</p>
            `;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('weatherResult').innerHTML = `
            <p style="color:red;">Terjadi kesalahan saat mengambil data cuaca.</p>
        `;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('weatherForm').addEventListener('submit', e => {
        e.preventDefault();
        const city = document.getElementById('cityInput').value;
        fetchWeather(city);
    });
    fetchNews();
});