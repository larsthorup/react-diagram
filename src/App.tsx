import { useEffect, useState } from "react";

function Counter({ color }: { color: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect", color);
    setCount(0);
  }, [color]);
  console.log("render", count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span style={{ color }}>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

function App() {
  const [color, setColor] = useState("black");
  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <label>
        Color:<input type="text" onChange={onColorChange}></input>
      </label>
      <Counter color={color} />
    </>
  );
}

export default App;
