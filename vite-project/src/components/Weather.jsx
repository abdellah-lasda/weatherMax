import React from 'react'
import { MapPin ,Eye ,Wind ,Droplets ,Gauge ,Thermometer ,Sunrise ,Sunset} from 'lucide-react';


export default function Weather({weather,isC}) {

    const date = new Date(weather.dt * 1000);
    const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const sunset = new Date(weather.sys.sunset * 1000).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });


    const formatted = date.toLocaleString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric"
    });

    const formattime = date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    function cToF(celsius) {
        return Math.round((celsius * 9) / 5 + 32);
    }



  return (
    <div className='col-span-full md:col-span-8 p-3 mt-4 px-6  rounded-2xl bg-blue-700/15 backdrop-blur-sm text-white/60  border-2 border-gray-200/20 ' >
        
        <header className='flex justify-between' >
            <div className='flex gap-2 items-center' >
              <MapPin className='text-white size-9 p-2 bg-gray-200/25 rounded-2xl ' />
                <div className='flex flex-col' >
                    <span className='text-[13px] font-semibold text-white ' >{weather.name}</span>
                    <span className='uppercase text-white/45 text-sm font-semibold' >{weather.sys.country}</span>
                </div>
            </div>
            <div className='text-sm text-white/45' >
                <span className='block' >{formatted}</span>
                <span className='block text-end' >{formattime}</span>
            </div>
        </header>

        <main className='py-4 flex justify-between items-center ' >
            <div>
                <h1 className='text-white text-6xl font-bold py-2' >{ isC ? weather.main.temp : cToF(weather.main.temp)}°<span className='text-5xl uppercase' >{isC?"c":"f"}</span></h1>
                <p className='text-white/90 text-lg capitalize ' >{weather.weather[0].description}</p>
                <div className=' font-semibold text-sm flex gap-3' >
                    <span>H : { isC ? weather.main.temp_max+" °C" : cToF(weather.main.temp_max)+" °F"  }</span>
                    <span>L : { isC ? weather.main.temp_min+" °C" : cToF(weather.main.temp_min)+" °F"  }</span>
                </div>
            </div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" className='size-25' />
        </main>

        <section className='grid grid-cols-12 gap-4'>

            <div className=' p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-4   bg-white/25' >
                <div className='flex items-center gap-3 ' >
                    <Eye className='size-9 p-2 text-blue-200 bg-gray-200/25 rounded-2xl ' />
                    <span className='font-semibold' >Visibility</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{parseFloat((weather.visibility)/1000)} Km</span>
            </div>

            <div className=' p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6  xl:col-span-4  bg-white/25' >
                <div className='flex items-center gap-3 ' >
                    <Wind className='text-green-300 size-9 p-2 bg-gray-200/25 rounded-2xl ' />
                    <span className='font-semibold' >Wind Speed</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{weather.wind.speed} m/s</span>
            </div>

            <div className=' p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6  xl:col-span-4  bg-white/25' >
                <div className='flex items-center gap-3 ' >
                    <Droplets className='text-blue-300 size-9 p-2 bg-gray-200/25 rounded-2xl ' />
                    <span className='font-semibold' >Humidity</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{weather.main.humidity} %</span>
            </div>

            <div className=' p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6  xl:col-span-4  bg-white/25' >
                <div className='flex items-center gap-3 ' >
                    <Gauge  className='text-purple-300 size-9 p-2 bg-gray-200/25 rounded-2xl ' />
                    <span className='font-semibold' >Pressure</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{weather.main.pressure} hPa</span>
            </div>

            <div className=' p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6  xl:col-span-4  bg-white/25' >
                <div className='flex items-center gap-3 ' >
                    <Thermometer className='text-orange-200 size-9 p-2 bg-gray-200/25 rounded-2xl ' />
                    <span className='font-semibold' >Feels Like</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{ isC ? weather.main.feels_like+" °C" : cToF(weather.main.feels_like)+" °F"  }</span>
            </div>

        </section>

        <section className='grid grid-cols-12 gap-4 py-4'>

            <div className=' hover: bg-linear-to-r from-orange-400/80 to-yellow-300/80 p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 md:col-span-6 backdrop-blur-md  ' >
                <div className='flex items-center gap-3 ' >
                    <Sunrise className='text-orange-100 size-9 p-2 bg-orange-900/25 rounded-2xl ' />
                    <span className='font-semibold' >Sunrise</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{sunrise}</span>
            </div>

            <div className=' hover: bg-linear-to-r from-purple-700/80 to-pink-400/80 p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 md:col-span-6 backdrop-blur-md  ' >
                <div className='flex items-center gap-3 ' >
                    <Sunset className='text-puple-100 size-9 p-2 bg-purple-900/25 rounded-2xl ' />
                    <span className='font-semibold' >Sunset</span>
                </div>
                <span className='ps-12 text-white font-bold text-[17px]' >{sunset}</span>
            </div>

        </section>

    </div>
  )
}


