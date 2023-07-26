import { Outlet, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUserContext } from "../contexts/UserContext";

const LayoutAdmin = () => {
   const { user } = useUserContext();

   if (!user) return <Navigate to={"/"} />;

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
export default LayoutAdmin;
