import { useState } from "react"

function Todo() {
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState('');
    function handleAdd(e){
        e.preventDefault();
        if(!todoName) return;
        const newTodo = {name: todoName, completed: false, id: Date.now()};
        setTodos([...todos, newTodo]);
        setTodoName('');
    }

    function handleDelete(id){
        setTodos(todos.filter((todo) => todo.id != id));
    }

    function handleComplete(id){
        setTodos(todos.map(todo => todo.id  == id ? {...todo, completed: !todo.completed} : todo))
    }
    return (
      <div className="m-3">
        <h3>Add New Todo</h3>
        <input
          className="form-control"
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={(e) => handleAdd(e)}>
          Add
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <button onClick={() => handleComplete(todo.id)}>✔</button>
              <span style={todo.completed ? {textDecoration: 'line-through'} : {}}>{todo.name}</span>
              <button onClick={() => handleDelete(todo.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Todo
