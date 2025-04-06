import './App.css'
import { Link } from "react-router-dom"

export const App = () => {
  const title: string = 'Hello World!';

  return (
    <div className='App'>
      <h1>{title}</h1>
      <Link to='/test'>Testへ</Link>
    </div>
  );
}

export default App