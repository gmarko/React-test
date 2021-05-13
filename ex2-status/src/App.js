import Login from './Login'
import './App.css';
import Spinner from './Spinner';
import Calculator from './Calculator';
import Toggle from './Toggle';
import Spoiler from './Spoiler';
import Greetings from './Greetings';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Spinner />
      <Calculator />
      <Toggle />
      <p>
        Ayer vi una película en la que al final
        <Spoiler>un hobbit destruía un anillo</Spoiler>.
      </p>
      <Greetings />
      <TodoList />
      <Login defaultUser="demo" />
    </div>
  );
}

export default App;
