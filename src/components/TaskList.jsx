import TaskItem from "./TaskItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TaskList = ({ list, changeComplete, removeTask }) => {
   return (
      <Droppable droppableId="tasksDnD">
         {(droppableProvided) => (
            <div
               className="container bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 dark:bg-slate-800 transition-all duration-700"
               ref={droppableProvided.innerRef}
               {...droppableProvided.droppableProps}
            >
               {list.map((obj, i) => (
                  <Draggable key={obj.id} draggableId={`${obj.id}`} index={i}>
                     {(draggableProvided) => (
                        <TaskItem
                           obj={obj}
                           removeTask={removeTask}
                           changeComplete={changeComplete}
                           ref={draggableProvided.innerRef}
                           {...draggableProvided.dragHandleProps}
                           {...draggableProvided.draggableProps}
                        />
                     )}
                  </Draggable>
               ))}
               {droppableProvided.placeholder}
            </div>
         )}
      </Droppable>
   );
};

export default TaskList;
