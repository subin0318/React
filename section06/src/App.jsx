import './App.css'
import Viewer from './copmponents/Viewer'
import Controller from './copmponents/Controller'
import { useState } from 'react';


function App() {
 
  const [count,setCount] = useState(0);
  // useState 선언
  // count는 현재 상태값 setCount는 상태값을 업데이트하는 함수이다 

  const onClickButton = (value) => {
    setCount(count+value);
  };
  // 이벤트 핸들링
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
      <Viewer count={count}/>
      {
      /* count는 props를 통해 데이터를 전달하고 있다
         왼쪽 count 는 Viewer 컴포넌트에서 사용할 변수 이름이고 오른쪽 count useState 로 정의한 상태값이다
         즉 useState 로 관리되는 상태를  Viewer 컴포넌트에 전달하고 있는거다  
       */}
      </section>
      <section> {/* 문서나 애플리케이션의 논리적인 측면에서 주제별 콘텐츠 그룹을 나타내는데 사용 */}
      <Controller onClickButton={onClickButton} /> 
      {/* Viewer 와 형제 관계이기에 props로 값을 전달 받을수는 없다 */}
      </section>
   </div>
  );
}

export default App;
