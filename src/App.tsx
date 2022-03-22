
import './App.css';
import TodoItem from './component/TodoItem/TodoItem';
import todosData from './todosData';


function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className='todo-list'  >
      <h2 className='todolist'>Список дел</h2>
        {todoItems }
    </div>
)
  }
export default App;
