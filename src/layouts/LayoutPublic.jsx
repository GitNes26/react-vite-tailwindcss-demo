import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
   const navigation = useNavigation();

   return (
      <>
         <NavBar />
         <main className="">
            {navigation.state === "loading" && (
               <div className="p-5 bg-teal-300 text-center text-teal-900 font-bold">
                  Cagando...
               </div>
            )}
            <Outlet />
         </main>
         <footer className="flex bg-slate-800 text-white font-bold justify-center p-5">
            Pie de pagina
         </footer>
      </>
   );
};
export default LayoutPublic;
