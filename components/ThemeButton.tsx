
import { useState } from 'react';
import Light from './icons/Light';
import Night from './icons/Night';
const ThemeButton = () => {

    const [isDark, setIsDark] = useState(false);





    const toggleTheme = () => {

        setIsDark(document.documentElement.classList.toggle('dark'))

    }


    return (

        <button onClick={toggleTheme} className="
          
            text-white
            hover:bg-slate-600
            cursor-pointer
            max-w-fit
            rounded
            py-2
            px-3
            text-sm
            fixed
            right-14
            bottom-14
            z-50

            bg-gradient-to-r 
            from-slate-800 
            to-blue-900 
            hover:from-slate-700 
            hover:to-blue-800 

            dark:from-amber-300
            dark:to-amber-500
            hover:dark:from-amber-200
            hover:dark:to-amber-400
            
            
            " >{isDark ? <Light /> : <Night />}</button>

    );
};

export default ThemeButton;