import "./List.css"
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";
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

  // const getAnalyzedData = () => {
  //     const totalCount = filteredTodos.length;
  //     const doneCount = todo.filter(
  //       (todo) => todo.isDone
  //     ).length;
  //     const notDoneCount = totalCount -doneCount;
      
  //     return {
  //       totalCount,
  //       doneCount,
  //       notDoneCount
  //     };
  // };

  const {totalCount,doneCount,notDoneCount} = useMemo (()=>{
    const totalCount = filteredTodos.length;
    const doneCount = todo.filter(
      (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount -doneCount;
    
    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todo])
  // 의존성 배열 deps

  // const {totalCount,doneCount,notDoneCount} = getAnalyzedData();
  
  return (
      <div className="List">
        <h4>Todo List 🍀</h4>
        <div>total: {totalCount}</div>
        <div>doneCount: {doneCount}</div>
        <div>notDoneCount: {notDoneCount}</div>
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