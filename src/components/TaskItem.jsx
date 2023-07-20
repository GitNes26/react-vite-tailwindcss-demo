import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TaskItem = ({ obj, changeComplete, removeTask }) => {
   return (
      <article className="flex gap-4 border-b border-b-gray-300">
         <button
            onClick={() => changeComplete(obj.id)}
            className={`rounded-full border-2 w-5 h-5 grid place-items-center ${
               obj.completed
                  ? "bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500"
                  : "inline-block"
            }`}>
            {obj.completed && <IconCheck />}
         </button>
         <p
            className={`text-gray-600 grow ${
               obj.completed && "line-through text-gray-300"
            }`}>
            {obj.title}
         </p>
         <button onClick={() => removeTask(obj.id)}>
            <IconCross />
         </button>
      </article>
   );
};

export default TaskItem;
