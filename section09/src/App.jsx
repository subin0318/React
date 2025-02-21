import './App.css'
import { useState, useRef } from 'react'
import Header from './copmponents/Header'
import Editor from './copmponents/Editor'
import List from './copmponents/List'
import Exam from './copmponents/Exam'

const mockTodo = [
  { id: 0, isDone: false, content: "React 공부하기", date: new Date().getTime() },
  { id: 1, isDone: false, content: "빨래하기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "장 보기", date: new Date().getTime() },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodo([newItem, ...todo]); 
  }; 

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };
   
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todo={todo} onUpdate={onUpdate}  onDelete={onDelete} /> */}
    </div>
  )
}

export default App;
