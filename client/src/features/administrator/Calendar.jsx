import React, { useEffect, useState, useContext } from 'react'
import Calendar from 'react-calendar';
import { SetContext } from '../../context/ModeContext';
import 'react-calendar/dist/Calendar.css';

function CalendarFeatures() {
    const { calendarThemeBool } = useContext(SetContext);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const calendarElementParent = document.getElementById("calendar");  
        if(localStorage.theme == "dark"){
            calendarElementParent.innerHTML = `<link rel="stylesheet" type="text/css" href="/css/calendarDarkMode.css" />`;
        }else{
            calendarElementParent.innerHTML = `<link rel="stylesheet" type="text/css" href="/css/calendarLightMode.css" />`
        }
    }, [calendarThemeBool]);

    const onChange = val => {
        setDate(val);
    }

  return (
    <div className="col-span-12 rounded-md border bg-white border-gray-200 shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:px-2 lg:col-span-4 dark:text-slate-200 md:col-span-4">
        <div>
            <div className='flex items-center justify-center'>
                <div id='calendar'></div>
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    </div>
  )
}

export default CalendarFeatures;