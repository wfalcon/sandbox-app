import React from 'react';
import "./TodoItem.css"
import todosData from '../../todosData';


function TodoItem(props: any) {
  return (
   <div className='todo-item'>
     <input type="checkbox" checked={props.item.completed}/>
     <p>{props.item.text}</p>
   </div>
  );
}

export default TodoItem
