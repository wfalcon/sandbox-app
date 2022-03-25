
import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import "./TodoItem.css"
import "../UI/button/MyButton.css"
import { title } from "process";


function TodoItem(props: any) {
  const [todosCompleted, setTodosComplited] = useState(props.item.completed)

  const [todoClass, setTodoClass] = useState('todo-item')

  function delItem(props: any) {
    
  }

  return (
   <div 
    onMouseOver={() => setTodoClass('todo-item-highlight')}
    onMouseOut={() => setTodoClass('todo-item')}
    className={todoClass}>

  <input type="checkbox"
   checked={todosCompleted}
   onChange={()=>((setTodosComplited(!todosCompleted),
   console.log(!todosCompleted, props.item.id)))} />
     
  <p className={todosCompleted ? "through" : ""} >{props.item.text}</p>
    <MyButton className="myBtn" title="удалить" onClick={()=>console.log('button')}/>
   </div>
  );
}

export default TodoItem
