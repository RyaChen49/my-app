'use client'
import { useState } from "react"; 
import Image from "next/image";
import TaskList from "@/conpoents/MainMenu";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    console.log("Before", tasks);
    console.log("New Task", newTask);
    const updateTask = [...tasks, newTask];
    setTasks(updateTask);
    console.log("After", updateTask);
    setNewTask("");
    };
  const handleDelete = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
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
