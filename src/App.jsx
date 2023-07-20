import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

const initialStateTasks = [
   { id: 1, title: "Terminar el curso de ReacJS-2023", completed: false },
   { id: 2, title: "Ir al Gimnacio", completed: true },
   { id: 3, title: "Terminar el programa de Becas", completed: false },
   { id: 4, title: "Ir al Gimnacio otra vez", completed: false },
];

const App = () => {
   const [tasks, setTasks] = useState(initialStateTasks);

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

   const pendingTasks = tasks.filter((task) => !task.completed).length;

   const [filter, setFilter] = useState("all");
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

   return (
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
         <Header />

         <main className="container mx-auto px-4">
            <TaskCreate createTask={createTask} />

            {/* TaskList {Task} TaskUpdate & TaskDelete */}
            <TaskList
               list={filteredTask()}
               changeComplete={changeComplete}
               removeTask={removeTask}
            />

            <TaskComputed
               pendingTasks={pendingTasks}
               clearCompleted={clearCompleted}
            />

            <TaskFilter setFilter={setFilter} filter={filter} />
         </main>

         <footer className="container mx-auto px-4 mt-8 text-center">
            Drag & Drop pendiente para ordenar tareas
         </footer>
      </div>
   );
};

export default App;
