export const AddTodo = ({ todo, setTodoList, todoList, inputChange, setTodo }) => {
   return(
   <>
        <h3>New To Do</h3>
        <input
            type="text"
            className="form-control"
            placeholder="Agregar To Do"
            name="todo"
            value={todo}
            onChange={inputChange}
            // Evento cuando presiona tecla Enter en ASCII
            onKeyUpCapture={({ key }) => {
                if (key === "Enter" && todo !== "") {

                    setTodoList([
                        ...todoList,
                        {
                            id: new Date().getTime(),
                            desc: todo,
                            done: false

                        }
                    ])
                    setTodo("")
                }
            }}
        />

    </>
   )
}