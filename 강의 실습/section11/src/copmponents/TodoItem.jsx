import "./TodoItem.css"
import { memo ,useContext} from "react";
import { TodoContext } from "../App";
const TodoItem = ({id, isDone, content, date}) => {
   
   const {onUpdate,onDelete} = useContext(TodoContext);
  
   const onChangeCheckbox = () => {
      onUpdate(id);
    };
   
    const onClickDelete = () => {
      onDelete(id);
    };
 
   
   return (
    <div className="TOdoItem">
       <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
       <div className="content">{content}</div>
       <div className="date">{new Date(date).toLocaleDateString()}</div>
       <button onClick={onClickDelete}>삭제</button>
    </div>
    
   ); 
};

export default memo(TodoItem, (prevProps,nextPros)=>{

   // 반환 값에 따라, Props 가 바뀌었는지 안바뀌었는지 판단
   // T -> Props 바뀌지 않음 -> 리렌더링 X
   // F -> Props 바뀜 -> 리렌더링 O  
   if(prevProps.id !== nextPros.id) return false; 
   if(prevProps.isDone !== nextPros.isDone) return false; 
   if(prevProps.content !== nextPros.content) return false;
   if(prevProps.date !== nextPros.date) return false; 
   return true;

});

// React.memo는 새로운 props를 받을 때만 리렌더링을 한다.
// props가 변경되었는지 확인할 때, 이전 값과 현재 값을 비교한다.
// 하지만 자바스크립트에서는 '얕은 비교(Shallow Comparison)'를 사용한다.
// 얕은 비교는 객체나 배열일 경우 '값'이 아닌 '메모리 주소'를 비교한다.
// 그래서 props로 객체 타입을 전달하면, 매번 새로운 객체로 인식되어 리렌더링이 발생한다.