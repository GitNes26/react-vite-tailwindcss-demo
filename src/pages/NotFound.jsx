import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
   const error = useRouteError();
   console.log(error);

   return (
      <div className="flex flex-col text-center">
         <h1 className="text-9xl font-black">404</h1>
         <p className="text-4xl mt-5">{error.statusText}</p>
         <p className="font-light italic text-lg mt-8">
            {error.statusText || error.message}
         </p>
         <Link to={"/"} className="mt-5 bg-blue-700 text-white font-bold ">Volver al inicio</Link>
      </div>
   );
};
export default NotFound;
