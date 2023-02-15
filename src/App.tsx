import { useEffect, useState } from "react";

function Counter({ color }: { color: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
  }, [color]);
  const clickHandler = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>+</button>
      <span style={{ color }}>{count}</span>
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
