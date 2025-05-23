'use client'
import { useState,useEffect } from "react"; 
import Link from "next/link";
import TaskList from "@/conpoents/MainMenu";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(1);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
    const maxId=savedTasks.reduce((max, task) => Math.max(max, task.id), 0);
    setNextId(maxId + 1);
  }, []);
  const addTask = () => {
    console.log("Before", tasks);
    console.log("New Task", newTask);
    const newTaskObj = {
      id: nextId,
      title: newTask,
      description: "",
    };
    const updateTask = [...tasks, newTaskObj];
    setTasks(updateTask);
    console.log("After", updateTask);
    setNewTask("");
    setNextId(nextId + 1);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
    };
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    // main 容器，使用 Tailwind CSS 添加內邊距
    <main className="p-4 max-w-md mx-auto">
      {/* 標題 */}
      <h1 className="text-2xl font-bold">Task Board</h1>
      {/* 輸入區域容器 */}
      <div className="flex gap-2 mb-4">
        {/* 任務輸入框 */}
        <input
          className="border p-2 flex-1"
          placeholder="Enter a task"
          value={newTask}
          // 當輸入內容改變時更新 newTask 狀態
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* 添加任務按鈕 */}
        <button
          className="bg-blue-500 text-white  px-4"
          onClick={addTask}
        >Add</button>
      </div>
      {/* 顯示任務列表組件，傳入任務數組作為 props */}
      <TaskList tasks={tasks} onDelete={handleDelete}/>
    </main>
  );
}
