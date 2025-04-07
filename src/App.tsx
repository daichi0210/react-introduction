import './App.css'
import { useState } from "react"
import { LinkButton } from "./components/link"

export const App = () => {
  const title: string = 'Hello World!';
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  }

  return (
    <div className='App'>
      <h1>{title}</h1>
      {num}回押しました。
      <LinkButton text="Testへ" link="/test" />
      <button type="button" onClick={increment}>増やす</button>
    </div>
  );
}

export default App