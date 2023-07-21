import { useState } from "react";

const TaskCreate = ({ createTask }) => {
   const [title, setTitle] = useState("");
   const handleSubmit = (e) => {
      e.preventDefault();

      if (!title.trim()) return setTitle("");

      createTask(title);
      setTitle("");
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center mt-8 px-4 dark:bg-slate-800 transition-all
         duration-700"
      >
         <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
         <input
            type="search"
            className="w-full text-gray-400 outline-none dark:bg-slate-800 dark:text-slate-300 transition-all
            duration-700"
            placeholder="Nueva tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
      </form>
   );
};

export default TaskCreate;
