import { useState } from "react"

export const TodoApp = () => {

  // Lógica para almacenar los todos
  //useState devuelve un array de 2 objetos
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState("")

  const inputChange = ({ target }) => {
    setTodo(target.value)
  }

  //RECORRER LA LISTA DE TODO Y MODIFICAR DONE
  const completeTodo = ({ target }) => {
    const todos = todoList.map(todo => {
      if (todo.id === +target.id) {
        todo.done = !todo.done
        return todo;
      }
      return todo;
    })
    setTodoList(todos);
  }

  // Lógica para añadir un todo

  // Lógica para completar un todo

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 form-control">
          <h3>New Todo</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            name="todo"
            onChange={inputChange}
            value={todo}
            // onChange={setTodo}
            //recibe todos los datos del input, como si fuera setTodo(e)
            //Otra forma de hacerlo onChange={(e)=>{setTodo({[e.target.name]:e.target.value})}} requiere que tenga el "name=""
            // Evento cuando cambia el valor del input

            // Evento cuando presiona tecla Enter en ASCII
            onKeyUpCapture={({ key }) => {
              if (key === "Enter") {

                setTodoList([
                  ...setTodoList,
                  {
                    id: new Date().getTime(),
                    desc: todo,
                    done: false

                  }
                ])
              }
            }}
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {/* TodoList Item */}
            {

              (todoList.length === 0)
                ? (
                  <li className="alert alert-info">No hay to do's</li>
                )
                :
                (todoList.map(todo => (
                  < li
                    key={todo.id}
                    className="d-flex justify-content-between mb-2 alert"
                  >
                    <span>{todo.desc}</span>
                    <button
                      className={`btn btn-sm ${(todo.done) ? "btn-success" : "btn-warning"}`}>
                      {(todo.done) ? "Completada" : "Pendiente"}</button>

                  </li>
                ))
                )
            }
          </ul>

        </div>
      </div>
    </div >
  )
}
