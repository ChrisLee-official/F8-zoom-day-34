const $ = document.querySelector.bind(document);
const { useState, useEffect } = React;

function CounterApp() {
  const [count, setCount] = useState(count);

  return (
    <>
      <div className="counter-app">
        <h1>Counter App</h1>
        <div className="show-count">{count}</div>
        <div className="btn-wrapper">
          <button className="decrement">Decrement (-1)</button>
          <button className="reset">Reset (0)</button>
          <button className="increment">Increment (+1)</button>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot($("#root"));
root.render(<CounterApp />);
