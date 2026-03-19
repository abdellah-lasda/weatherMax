import React from 'react'
import { Calendar, Droplets } from "lucide-react"

export default function Forecast({forecast=[],isC}) {
  return (
    <div className='col-span-full md:col-span-4 p-3 mt-4 px-6  rounded-2xl bg-blue-700/15 backdrop-blur-sm text-white/60  border-2 border-gray-200/20' >
        <h1 className='flex gap-3 items-center' >
            <Calendar className='text-white size-9 p-2 bg-gray-200/25 rounded-2xl ' />
            <span className='text-xl text-white font-semibold ' >5-Day Forecast</span>
        </h1>

        <ul className='flex flex-col gap-3 py-3' >
            {forecast.map((f,k)=>{

                const date = new Date(f.dt * 1000);

                const formatted = date.toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                });

                function cToF(celsius) {
                    return Math.round((celsius * 9) / 5 + 32);
                }



                return <li key={k} className=' flex flex-wrap justify-between ps-0 p-3 px-4 rounded-2xl border border-gray-50/20 col-span-12 md:col-span-6 lg:col-span-4  bg-white/25' >

                    <section className='flex items-center' >
                        <img src={`https://openweathermap.org/img/wn/${f.weather[0].icon}.png`} alt="" className='size-12' />
                        <div>
                            <h2 className='text-white font-semibold' >{formatted}</h2>
                            <p className='text-[11px] capitalize' >{f.weather[0].description}</p>
                        </div>
                    </section>

                    <section className='flex gap-3.5 items-center' >
                        <div className='flex items-center gap-1 text-[11.5px]' > <Droplets className='size-3.5 text-blue-300 inline' /><span>{f.main.humidity}%</span></div>
                        <div>
                            <h2 className='text-white font-semibold' >{ isC ? f.main.temp+" °C" : cToF(f.main.temp)+" °F"}  </h2>
                            <span className='block text-end text-[11px]' >{ isC ? f.main.feels_like+" °C " : cToF(f.main.feels_like)+" °F"} </span>
                        </div>
                    </section>

                </li>
            })}
        </ul>
    </div>
  )
}
