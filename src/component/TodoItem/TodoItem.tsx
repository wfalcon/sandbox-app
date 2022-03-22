
import { useState } from "react";
import todosData from "../../todosData";
import "./TodoItem.css"


function TodoItem(props: any) {
  const [todosCompleted, setTodosComplited] = useState(props.item.completed)
  return (
   <div className='todo-item'>
     <input type="checkbox" checked={todosCompleted} onChange={()=>setTodosComplited(!todosCompleted)}/>
     <p>{props.item.text}</p>
   </div>
  );
}

export default TodoItem
