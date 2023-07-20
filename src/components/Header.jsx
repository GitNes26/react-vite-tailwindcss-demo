import IconMoon from "./icons/IconMoon";

const Header = () => {
   return (
      <header className="container mx-auto px-4">
         <div className="flex justify-between pt-8">
            <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">
               Tareas
            </h1>
            <button>
               <IconMoon />
            </button>
         </div>
      </header>
   );
};
export default Header;
