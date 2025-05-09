'use client'
import Link from "next/link";
export default function TaskList({ tasks, onDelete }) {
    return (
        // ==================== JSX 結構說明 ====================
        // 1. ul 元素：無序列表
        // 2. Tailwind CSS 類名解析：
        //    - space-y-2：設置子元素之間的垂直間距為 8px (2 * 0.25rem)
        <ul className="space-y-2">
            {/* ==================== 數組渲染 ==================== */}
            {/* 1. Array.map() 方法：
                   - 遍歷 tasks 數組中的每個任務
                   - 返回新的 JSX 元素數組
                2. 參數說明：
                   - task：當前任務內容
                   - index：當前索引，用於 key prop */}
                   
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="border p-2 rounded flex justify-between items-center"
                >
                    {/* 3. 內容渲染：
                           - 直接顯示任務文本
                           - 使用 {} 在 JSX 中嵌入 JavaScript 表達式 */}
                    <Link href={`/task/${task.id}`} className="text-blue-600 hover:underline">{task.title}</Link>
                    <button
                        className = "text-red-500"
                        onClick={()=> onDelete(task.id) }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}