import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({todo,onUpdate,onDelete}) => {
    
  const [serch,setSerch] =useState("");
  const onChangeSerch = (e) => {
      setSerch(e.target.value);
  };
 
  
  const getFilteredDate = () => {
    if (serch === "") {
      return todo;
    }
    return todo.filter((todo)=>
      todo.content.toLowerCase().includes(serch.toLowerCase())
    );
  }
  
  const filteredTodos = getFilteredDate();
  
  
  return (
      <div className="List">
        <h4>Todo List 🍀</h4>
        <input
         value={serch}
         onChange={onChangeSerch}
         placeholder="검색어를 입력하세요"></input>
        <div className="todos_wrapper">
         {filteredTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
         })}
        </div>
      </div>
    ); 
};

export default List;