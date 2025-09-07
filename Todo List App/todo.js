const $ = document.querySelector.bind(document);
const { useState } = React;

function TodoForm({ inputValue, handleSubmit, handleInputChange }) {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add new task here..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="btn-add" type="submit">
        Add
      </button>
    </form>
  );
}

let uniqId = 0;

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="todo">
      <h1> Todo List</h1>
      <TodoForm
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <div className="empty-task">
        There is no task here, plz create a new task
      </div>
      <ul className="status">
        <li className="status-total">Total:</li>
        <li className="status-complete">Complete:</li>
        <li className="status-remaining">Remaining:</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot($("#root"));
root.render(<TodoApp />);
