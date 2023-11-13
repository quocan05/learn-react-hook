const Todos = (props) => {
  const title = props.title;
  const todos = props.value;
  const deleteTodo = props.delete;
  //console.log(">>check props: ", props);

  const handleDelete = (element) => {
    console.log(typeof element);
    deleteTodo(element);
  };

  return (
    <div>
      <p>{title}</p>
      {todos.map((todo) => {
        //console.log(todo);
        return (
          <div key={todo.id}>
            <li className="todo-item">
              {todo.title}{" "}
              <span
                onClick={(element) => {
                  element = todo.id;
                  handleDelete(element);
                }}
              >
                X
              </span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todos;
