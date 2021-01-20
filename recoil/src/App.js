import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { TodoFilter } from './components/TodoFilter';

const App = () => {
  return (
    <div className="App">
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
