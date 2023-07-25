import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const reorder = (list, startIndex, endIndex) => {
   const listTemp = [...list]; //hacemos una copia temporal del arrray
   const [removeItemTemp] = listTemp.splice(startIndex, 1); // sacamos el item tomado del array temporal, porque el splice muta el array
   listTemp.splice(endIndex, 0, removeItemTemp); // regresamos el item al array ya en su nueva posicion
   return listTemp; //retornamos la lista reordenada
};

const App = () => {
   const [tasks, setTasks] = useState(initialStateTasks);

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   const createTask = (title) => {
      const newTask = {
         id: tasks.length + 1,
         title,
         completed: false,
      };
      setTasks([...tasks, newTask]);
   };

   const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

   const changeComplete = (id) => {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
         )
      );
   };

   const clearCompleted = () => {
      setTasks(tasks.filter((task) => !task.completed));
   };

   let pendingTasks = tasks.filter((task) => !task.completed).length;

   const [filter, setFilter] = useState("all");
   useEffect(() => {
      pendingTasks = tasks.filter((task) => !task.completed).length;
   }, [filter]);
   const filteredTask = () => {
      switch (filter) {
         case "all":
            return tasks;
            break;
         case "active":
            return tasks.filter((task) => !task.completed);
            break;
         case "completed":
            return tasks.filter((task) => task.completed);
            break;
         default:
            break;
      }
   };

   const handleDragEnd = (result) => {
      const { destination, source } = result;
      if (!destination) return;
      if (
         source.index === destination.index &&
         source.droppableId === destination.droppableId
      )
         return;
      setTasks((prevTasks) =>
         reorder(prevTasks, source.index, destination.index)
      );
   };

   return (
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] dark:bg-slate-700 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-700">
         <Header />

         <main className="container mx-auto px-4 md:max-w-xl">
            <TaskCreate createTask={createTask} />

            {/* TaskList {Task} TaskUpdate & TaskDelete */}
            <DragDropContext onDragEnd={handleDragEnd}>
               <TaskList
                  list={filteredTask()}
                  changeComplete={changeComplete}
                  removeTask={removeTask}
               />
            </DragDropContext>

            <TaskComputed
               pendingTasks={pendingTasks}
               clearCompleted={clearCompleted}
            />

            <TaskFilter setFilter={setFilter} filter={filter} />
         </main>

         <footer className="container mx-auto p-4 mt-8 text-center dark:text-slate-300">
            Drag & Drop pendiente para ordenar tareas
         </footer>
      </div>
   );
};

export default App;
