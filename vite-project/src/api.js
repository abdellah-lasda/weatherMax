const API_KEY = import.meta.env.VITE_API_KEY

const fetchCities = async (prefix,limit=5) => {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${prefix}&limit=${limit}&appid=${API_KEY}`,
    {
      method: "GET"
    }
  );

  const data = await res.json();
  return data;
};

export default fetchCities ;



const fetchWeather = async (city,country) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,
    {
      method: "GET"
    }
  );

  const data = await res.json();
  return data;
};

export  {fetchWeather} ;



const fetchForecast = async (city,country) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`,
    {
      method: "GET"
    }
  );

  const data = await res.json();
  return data;
};

export  {fetchForecast} ;





const fetchForecastLL = async (lat,lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    {
      method: "GET"
    }
  );

  const data = await res.json();
  return data;
};

export  {fetchForecastLL} ;


const fetchWeatherLL = async (lat,lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    {
      method: "GET"
    }
  );

  const data = await res.json();
  return data;
};

export  {fetchWeatherLL} ;

