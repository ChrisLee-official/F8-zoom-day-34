const $ = document.querySelector.bind(document);
const { useState } = React;

function CounterApp() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleReset = () => setCount(0);
  return (
    <>
      <div className="counter-app">
        <h1>Counter App</h1>
        <div className="count">{count}</div>
        <div className="status"></div>
        <div className="btn-wrapper">
          <button onClick={handleDecrease} className="decrement">
            Decrease (-1)
          </button>
          <button onClick={handleReset} className="reset">
            Reset
          </button>
          <button onClick={handleIncrease} className="increment">
            Increase (+1)
          </button>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot($("#root"));
root.render(<CounterApp />);
