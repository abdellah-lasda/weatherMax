import { Search } from 'lucide-react';
import { fetchForecast, fetchWeather } from '../api';
import { toast } from 'react-toastify';

export default function DropDounCity({cities=[],setForecast,setWeather,show,setShow}) {

    const fetchData = async(selected)=>{
        const result = await fetchForecast(selected.name,selected.country)
        const data = await fetchWeather(selected.name,selected.country)
        if(data.cod != 200 || result.cod != 200){
            return toast.error(data.message)
        } 
        setWeather(data)
        setForecast(result.list.filter(f => f.dt_txt.includes("12:00:00")))
    }

  return( 
    <ul className={` ${show ? "" : "hidden" }  absolute z-20 w-full left-0 top-12 mt-3  `} >
        {
            cities.map((c,k)=>{

                return <li  className='flex hover:bg-blue-100/55 justify-between items-center px-6 py-1.5 bg-blue-100/45 backdrop-blur-sm text-white/60 transition-all duration-300 ease-linear cursor-pointer first:rounded-t-lg last:rounded-b-lg last:border-b border border-gray-200/20 border-b-0 ' 
                key={k} onClick={async ()=>{
                    setShow(false)
                    fetchData(c)
                }}>
                    <div>
                        <h2 className='text-sm' > {c.local_names?.fr ? c.local_names.fr : c.name}</h2><span className='text-sm' >{c.country}</span>
                    </div>
                   <Search className='size-4' />
                  </li>
            }
        )}
    </ul>
    )
}
