import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
   const { data } = useLoaderData();

   return (
      <ul className="container bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 dark:bg-slate-800 transition-all duration-700 flex flex-col">
         {data.length > 0 ? (
            data.map((blog) => (
               <li
                  key={blog.id}
                  className="flex gap-4 border-b text-white p-2 border-b-gray-300 dark:bg-slate-800 dark:border-b-slate-600 transition-colors duration-700"
               >
                  <Link to={`/blog/${blog.id}`}>
                     {blog.id} - {blog.title}
                  </Link>
               </li>
            ))
         ) : (
            <li>No hay Posts</li>
         )}
      </ul>
   );
};
export default Blog;

export const loaderBlog = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();
   return { data };
};
