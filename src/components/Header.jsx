import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
   const [darkMode, setDarkMode] = useState(initialStateDarkMode);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [darkMode]);

   return (
      <header
         className="container mx-auto px-4 transition-all
         duration-700 md:max-w-xl"
      >
         <div className="flex justify-between pt-8">
            <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">
               Tareas
            </h1>
            <button onClick={() => setDarkMode(!darkMode)}>
               {darkMode ? <IconMoon /> : <IconSun />}
            </button>
         </div>
      </header>
   );
};
export default Header;
