import React, { useEffect, useState } from 'react'
import axios from "axios";

function Wheather() {
    const [data, setData] = useState({
        name: "",
        main: "",
        temp: "",
        icon: "",
        humidity: "",
    });
    const [date, setDate] = useState("");

    const dateFunction = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const formattedDate = `${day}-${month}-${year}`;
        setDate(formattedDate);
    }

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=sorong&appid=d1a3760d68794ecd3652e888ff519bb1&units=metric")
        .then(res => {
            // if(res.data.weather[0].main = "Cloudy")
            setData({
                name: res.data.name, 
                main: res.data.weather[0].main, 
                temp: Math.floor(res.data.main.temp), 
                icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`, 
                humidity: res.data.main.humidity,
                feelsLike: Math.floor(res.data.main.feels_like),
                wind: res.data.wind.speed
            });
        });
        dateFunction();
    }, []);

  return (
    <div className="col-span-12 rounded-md border border-gray-200 bg-white px-6 pt-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:px-2 lg:col-span-6 dark:text-slate-200 bg-[url('/weather/img/weatherbg.jpg')] bg-cover">
        <div>
            <div>
                <div className='min-h-[315px] flex flex-col items-center justify-center text-slate-200'>
                    <div className=''>
                        <h1 className='text-xl font-semibold text-center'>{data.name}</h1>
                        <h1 className='text-xl font-semibold text-center'>{date}</h1>
                        <img src={data.icon} alt="" className='w-32'/>
                        <h1 className='text-md font-semibold text-center'>{data.main}</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-1 mt-2 text-sm'>
                        <h1 className='font-semibold'>Suhu: {data.temp}°С</h1>
                        <h1 className='font-semibold'>Terasa Seperti: {data.feelsLike}°С</h1>
                        <h1 className='font-semibold'>Kelembapan: {data.humidity}%</h1>
                        <h1 className='font-semibold'>Kec. Angin: {data.wind} m/s</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wheather;