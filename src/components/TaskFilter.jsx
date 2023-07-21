const TaskFilter = ({ setFilter, filter }) => {
   return (
      <section
         className="container mx-auto mt-8 transition-all
      duration-700"
      >
         <div
            className="flex justify-center rounded-md bg-white py-4 gap-4 dark:bg-slate-800 transition-all
         duration-700"
         >
            <button
               className={`${
                  filter === "all"
                     ? "text-blue-600 dark:text-blue-500"
                     : "text-gray-400 hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-400 "
               }`}
               onClick={() => setFilter("all")}
            >
               Todos
            </button>
            <button
               className={`${
                  filter === "active"
                     ? "text-blue-600 dark:text-blue-500"
                     : "text-gray-400 hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-400"
               }`}
               onClick={() => setFilter("active")}
            >
               Activas
            </button>
            <button
               className={`${
                  filter === "completed"
                     ? "text-blue-600 dark:text-blue-500"
                     : "text-gray-400 hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-400"
               }`}
               onClick={() => setFilter("completed")}
            >
               Completadas
            </button>
         </div>
      </section>
   );
};

export default TaskFilter;
