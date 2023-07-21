import TaskItem from "./TaskItem";

const TaskList = ({ list, changeComplete, removeTask }) => {
   return (
      <div
         className="container bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 transition-all
         duration-700  dark:bg-slate-800"
      >
         {list.map((obj) => (
            <TaskItem
               key={obj.id}
               obj={obj}
               removeTask={removeTask}
               changeComplete={changeComplete}
            />
         ))}
      </div>
   );
};

export default TaskList;
