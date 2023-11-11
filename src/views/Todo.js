const Todos = (props) => {
  let todos = props.value;

  console.log(">>check props: ", props);
  return (
    <div>
      {todos.map((todo) => {
        console.log(todo);
        return (
          <li className="todo-item" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
