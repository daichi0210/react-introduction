import './App.css'
import { LinkButton } from "./components/link"

export const App = () => {
  const title: string = 'Hello World!';

  return (
    <div className='App'>
      <h1>{title}</h1>
      <LinkButton text="Testへ" link="/test" />
    </div>
  );
}

export default App