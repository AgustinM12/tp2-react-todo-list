import { useState } from "react"
//useState devuelve un array de 2 objetos
import { AddTodo } from "../components/AddTodo.jsx"
import { TodoList } from "../components/SetListItem.jsx"

export const TodoApp = () => {


  //FUNCIONES EXTRA AL EJERCICIO//////////////////////////////////////////////////////////////////////////////////////////////////////
  // Lógica para almacenar los todos
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState("")

  //Lógica para eliminar to do's compleatados
  const clearCompletedTodos = () => {
    const todosPendientes = todoList.filter(todo => !todo.done);
    setTodoList(todosPendientes);
  };

  //Lógica para eliminar todos los to do's
  const clearAllTodo = () => {
    setTodoList([])
  }

  //Lógica para completar todos los to do's
  const completeAll = () => {
    const todosCompletados = todoList.map((todo) => ({
      ...todo,
      done: true,
    }));
    setTodoList(todosCompletados);
  };

  //Lógica para cancelar todos los to do's
  const cancelAll = () => {
    const todosCompletados = todoList.map((todo) => ({
      ...todo,
      done: false,
    }));
    setTodoList(todosCompletados);
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
          <button className="btn btn-sm btn-primary"
            onClick={clearAllTodo}
          >Clear All</button>

          <button className="btn btn-sm btn-warning"
            onClick={cancelAll}
          >Active</button>


          <button className="btn btn-sm btn-success"
            onClick={completeAll}
          >Completed</button>

          <button className="btn btn-sm btn-danger"
            onClick={clearCompletedTodos}
          >Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 form-control">
          <AddTodo
            setTodoList={setTodoList}
            todo={todo}
            todoList={todoList}
            setTodo={setTodo}
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <TodoList
            todoList={todoList}
            todo={todo}
            setTodoList={setTodoList}
          />

        </div>
      </div>
    </div >
  )
}
