import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const NavBar = () => {
   const { user, setUser } = useUserContext();
   console.log(useUserContext());

   return (
      <>
         <nav className="bg-slate-800 p-4">
            <div className="flex grow-0 justify-center">
               <NavLink
                  to={"/"}
                  className="bg-slate-600 rounded-lg text-white font-bold p-1 px-4 mx-2"
               >
                  TasksApp
               </NavLink>
               {user && (
                  <>
                     <NavLink
                        to={"/blog"}
                        className="bg-slate-600 rounded-lg text-white font-bold p-1 px-4 mx-2"
                     >
                        Blogs
                     </NavLink>
                     <button
                        className="bg-slate-100 text-slate-700 font-bold p-2 rounded"
                        onClick={() => setUser(false)}
                     >
                        Cerrar Sesión
                     </button>
                  </>
               )}
            </div>
         </nav>
      </>
   );
};
export default NavBar;
