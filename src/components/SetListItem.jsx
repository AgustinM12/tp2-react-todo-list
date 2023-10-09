
export const SetListItem = ({ todoList, todo, setTodoList }) => {


  // Lógica para completar un to do
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

  return (
    <>
      <div>TodoList</div>

      <ul className="list-unstyled">
        {/* TodoList Item */}
        {
          (todoList?.length === 0)
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
