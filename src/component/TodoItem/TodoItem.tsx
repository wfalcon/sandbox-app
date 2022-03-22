
import { useState } from "react";
import "./TodoItem.css"


function TodoItem(props: any) {
  const [todosCompleted, setTodosComplited] = useState(props.item.completed)

  const [todoClass, setTodoClass] =useState('todo-item')

  return (
   <div onClick={()=>((setTodosComplited(!todosCompleted), console.log(todosCompleted, props.item.id)))} onMouseOver={() => setTodoClass('todo-item-highlight')} onMouseOut={() => setTodoClass('todo-item')} className={todoClass}>

     <input type="checkbox" checked={todosCompleted} onChange={()=>{}} /> {/* onChange={()=>(setTodosComplited(!todosCompleted), console.log(todosCompleted))} /> */}
     
     <p>{props.item.text}</p>
     
   </div>
  );
}

export default TodoItem
