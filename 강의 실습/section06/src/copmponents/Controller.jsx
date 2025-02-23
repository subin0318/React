const Controller = ({onClickButton}) => {
      // 부모로 부터 이벤트 핸들링 ({onClickButton}) 를 받아 버튼을 클릭할때 마다 value 값을 전달한다
     
      return <div>
        <button onClick={()=>{
            onClickButton(-1);
        }}>-1</button>
        <button onClick={()=>{
            onClickButton(-10);
        }}>-10</button>
        <button onClick={()=>{
            onClickButton(-100);
        }}>-100</button>
        <button onClick={()=>{
            onClickButton(100);
        }}>100</button>
        <button onClick={()=>{
            onClickButton(10);
        }}>10</button>
        <button onClick={()=>{
            onClickButton(1);
        }}>1</button>
      </div>
};

export default Controller;