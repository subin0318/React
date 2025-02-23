import './App.css'
import { useState, useRef, useMemo, useCallback,createContext } from 'react'
import Header from './copmponents/Header'
import Editor from './copmponents/Editor'
import List from './copmponents/List'

const mockTodo = [
  { id: 0, isDone: false, content: "React 공부하기", date: new Date().getTime() },
  { id: 1, isDone: false, content: "빨래하기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "장 보기", date: new Date().getTime() },
];

export const TodoContext = createContext();

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

  const onUpdate = useCallback ((targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  },[]);
   

  const onDelete = useCallback ((targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  },[])

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{
        todo ,
        onCreate,
        onUpdate,
        onDelete
      }}>
      <Editor/>
      <List />
    
      </TodoContext.Provider>
    </div>
  )
}

export default App;
