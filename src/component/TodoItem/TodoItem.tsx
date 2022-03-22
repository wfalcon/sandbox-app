
import { useState } from "react";
import "./TodoItem.css"


function TodoItem(props: any) {
  const [todosCompleted, setTodosComplited] = useState(props.item.completed)
  // if (todosCompleted) {  
  // console.log({todosCompleted})
  // }
  const [todoClass, setTodoClass] =useState('todo-item')
  return (
   <div onMouseOver={() => setTodoClass('todo-item-1')} onMouseOut={() => setTodoClass('todo-item')} className={todoClass}>
     <input type="checkbox" checked={todosCompleted} onChange={()=>setTodosComplited(!todosCompleted)} />
     <p>{props.item.text}</p>
     
   </div>
  );
}

export default TodoItem
