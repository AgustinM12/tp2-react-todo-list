
export const TodoList = ({todoList, todo, completeTodo}) => {
    return (
      <>
      <div>TodoList</div>

      <ul className="list-unstyled">
            {/* TodoList Item */}
            {
              (todoList.length === 0)
                ? (
                  <li className="alert alert-primary">No hay to do's</li>
                )
                :
                (todoList.map(todo => (
                  < li
                    key={todo.id}
                    className={`d-flex justify-content-between mb-2 alert ${(todo.done) ? "alert-success" : "alert-warning"}`}
                  >
                    <span>{todo.desc}</span>
                    <button
                      className={`btn btn-sm ${(todo.done) ? "btn-success" : "btn-warning"}`}
                      id={todo.id}
                      onClick={completeTodo}
                    >
                      {(todo.done) ? "Completada" : "Pendiente"}</button>

                  </li>
                ))
                )
            }
          </ul>


      </>
    )
  }
  