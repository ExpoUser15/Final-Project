import { createContext, useState, useEffect} from "react";

const SetContext = createContext();

function AppProvider({children}){
    const [calendarThemeBool, setCalendarThemeBool] = useState(false);
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <SetContext.Provider value={{ calendarThemeBool, setCalendarThemeBool, theme, setTheme }}>
            { children }
        </SetContext.Provider>
    )
}

export { SetContext, AppProvider };