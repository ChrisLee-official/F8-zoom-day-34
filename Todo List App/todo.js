const $ = document.querySelector.bind(document);
const { useState } = React;

function TodoForm() {
  return (
    <>
      <form className="todo-form">
        <input
          className="todo-input"
          type="text"
          placeholder="Add new task here..."
        />
        <button className="btn-add" type="submit">
          Add
        </button>
      </form>
    </>
  );
}

function TodoListApp() {
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
    <>
      <div className="todo">
        <h1> Todo List</h1>
        <form className="todo-form">
          <input
            className="todo-input"
            type="text"
            placeholder="Add new task here..."
          />
          <button className="btn-add" type="submit">
            Add
          </button>
        </form>
        <div className="empty-space">
          There is no task here, plz create a new task
        </div>
        <ul className="status">
          <li className="status-total">Total</li>
          <li className="status-complete">Complete</li>
          <li className="status-remaining">Remaining</li>
        </ul>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot($("#root"));
root.render(<TodoListApp />);
