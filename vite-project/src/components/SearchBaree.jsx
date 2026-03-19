import { useState} from 'react'
import { MapPin } from 'lucide-react';
import DropDounCity from './DropDounCity';
import fetchCities, { fetchForecastLL, fetchWeatherLL } from '../api';
import Weather from './Weather';
import Forecast from './Forecast';
import { toast } from 'react-toastify';


export default function SearchBaree() {
  const [isC,setIsC] = useState(true)
  const [prefix,setPrefix] = useState("")
  const [cities,setCities] = useState([])
  const [weather,setWeather] = useState(null);
  const [forecast,setForecast] = useState(null);
  const [show,setShow] = useState(true)

  const fetchData = async () => {
    const result = await fetchCities(prefix);
    if(result.length === 0){
      return toast.error(result.message)
    } 
    setCities(result);
  };

  const handleSearch = ()=>{
    if(!prefix) return
    fetchData();
    setShow(true)
  }

  const handleClick = () => {
  const confirmLocation = window.confirm('Can we use your location ?');

  if (confirmLocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;


        // fetch weather
        try {
          const weatherData = await fetchWeatherLL(lat, lon);
          const forecastData = await fetchForecastLL(lat, lon);

          setWeather(weatherData);
          setForecast(forecastData.list.filter(f => f.dt_txt.includes("12:00:00")));
        } catch (err) {
          console.error("Erreur fetch météo :", err);
        }
      },
      (error) => {
        console.error("Erreur géolocalisation :", error);
      },
      { enableHighAccuracy: true }
    );
  }
};

  

  
      
  return (
    <div>
      <section className='flex relative z-20 gap-3  w-full lg:px-[10%]' >

        <div className='flex  gap-3 relative z-20 items-center grow '>
          <div className='place-content-center relative z-20  grow' >

            <input onChange={(e)=>{
              setPrefix(e.target.value)
              setShow(false)
            }}
               placeholder='Search for any city worldxinde ...' type="text" 
              className='placeholder:text-white/80 focus:border-3 ps-8 text-white/95 font-medium w-full focus:outline-0 border-gray-200/50 border-2 rounded-xl p-2.5 bg-blue-50/25 focus:ring-0' />
            <button onClick={handleClick}  className='absolute focus:outline-0 top-1.5 right-2' >
              <MapPin className='text-white size-9 p-2 hover:bg-gray-200/25 rounded-2xl ' />
            </button>
            
            <DropDounCity show={show} setShow={setShow}  cities={cities} setForecast={setForecast} setWeather={setWeather} />

          </div>
          <button onClick={handleSearch} className='py-2 px-3 font-medium  text-white/60 bg-blue-50/45 transition-all duration-300 ease-linear cursor-pointer rounded-xl ' >
            Search
          </button>
        </div>
        
        <div className='flex gap-1 items-center'>
          <div className='p-0.5 border-2 bg-blue-50/15 flex gap-1 border-gray-200/10 rounded-xl'>
            <button onClick={()=>setIsC(true)} 
              className={` ${ isC ? "bg-white text-blue-500" : "text-white/60" } py-1 px-3 w-[50%]  font-medium transition-all duration-300 ease-linear cursor-pointer rounded-xl `} >°C</button>
            <button onClick={()=>setIsC(false)} 
              className={` ${ !isC ? "bg-white text-blue-500" : "text-white/60" } py-1 px-3 w-[50%]  font-medium transition-all duration-300 ease-linear cursor-pointer rounded-xl `} >°F</button>
          </div>
        </div>
        

      </section>
      
      {weather && forecast && <main className='grid grid-cols-12 gap-4' >
            <Weather weather={ weather } isC={isC} />
            <Forecast forecast={forecast} isC={isC} />
      </main>}
    
      
    </div>
  )
}
