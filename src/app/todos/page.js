'use client';
import  { useState, useEffect} from 'react';
export default function TodosPage()
{
    const [todos, setTodos] = useState([]);
    const [newTodo, setnewTodo] = useState('');
    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function fetchTodos() {
            try{
                const res=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
                console.log(res);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                    const data = await res.json();
                    setTodos(data);
                }
                await new Promise((resolve) => setTimeout(resolve, 3000));
                const data = await res.json();
                setTodos(data);
            }catch (err) {console.log(err.message)} finally {setloading(false);}
      }
        fetchTodos();
    },[])
    return
    (
        <main className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            {loading && <p>Loading...</p>}
            {!loading && (
            <ul className="space-y-2">
                {todos.map((todo, index) => (
                    <li key={todo.id} className="border p-2 rounded">
                        <h2>    
                            {todo.title} {todo.completed ? 'Done' : ''}
                        </h2> 
                    </li>
                ))}
            </ul>
            )}
        </main>
    );
}