const Viewer = ({count}) => {
    // 부모 로 부터 {count} 를 받아 화면에 표시를 한다 
   return <div>현재 카운트 :
    <h1>{count}</h1>
    </div>
};

export default Viewer;