import { useLoaderData } from "react-router-dom";

const Post = () => {
   const { data } = useLoaderData();

   return (
      <>
         <h1 className="text-5xl text-center font-bold">
            {data.id} - {data.title}
         </h1>
         <p className="container text-center">{data.body}</p>
      </>
   );
};
export default Post;

export const loaderPost = async ({ params }) => {
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
   );
   if (!res.ok)
      throw {
         status: res.status,
         statusText: "elemento no encontrado",
      };
   const data = await res.json();

   return { data };
};
