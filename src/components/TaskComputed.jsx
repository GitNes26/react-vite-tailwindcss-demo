const TaskComputed = ({ pendingTasks, clearCompleted }) => {
   return (
      <section
         className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-slate-800 transition-all
      duration-700"
      >
         <span className="text-gray-400 dark:text-slate-500">
            {pendingTasks} Tareas Pendientes
         </span>
         <button
            className="text-gray-400 hover:text-gray-300  dark:text-slate-500 dark:hover:text-slate-400"
            onClick={clearCompleted}
         >
            Limpiar Completados
         </button>
      </section>
   );
};

export default TaskComputed;
