const TaskComputed = ({ pendingTasks, clearCompleted }) => {
   return (
      <section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
         <span className="text-gray-400">{pendingTasks} Tareas Pendientes</span>
         <button className="text-gray-400" onClick={clearCompleted}>
            Limpiar Completados
         </button>
      </section>
   );
};

export default TaskComputed;
