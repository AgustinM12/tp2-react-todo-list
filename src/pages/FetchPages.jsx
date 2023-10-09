import { useEffect } from "react"
import { useState } from "react"

export const FetchPages = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await resp.json()
        setTodos(data);
    }
    return (
        <div>
            Fetch
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => {
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.userId}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
