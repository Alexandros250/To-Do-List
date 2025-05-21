import "../css/Home.css";
import MyModal from "@/components/Modal";
import Checkbox from "@/components/CheckBox";
import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const handleTaskCompletion = (id: number) => {
    setTasks((prevTasks) => // Gives me the old state
      prevTasks.map((task) => // .map applies a function to every item in the array.
        task.id === id ? { ...task, completed: !task.completed } : task // ... copies the task and it
        // overides the existing values with the new values.
      )
    );
  };

  const handleTaskDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }; 


  return (
    <>
      <div className="home-page flex-col h-screen bg-[rgb(39,39,42)] text-2xl sm:text-lx md:text-2xl lg:text-3xl xl:text-4xl">
        <div className="home-page gap-5 flex w-64 h-32 text-white px-4 py-5 rounded-lg mb-5 text-4xl font-bold">
          <h1>TO DO LIST</h1>
          <MyModal />
        </div>
        <Checkbox />
      </div>
    </>
  );
}

export default Home;

