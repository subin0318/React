import { useRef } from "react";

function Example() {
  const countRef = useRef(0);  // 초기값 0으로 설정

  const increment = () => {
    countRef.current += 1;  // 값을 수정
    console.log(countRef.current);  // 변경된 값 출력
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{countRef.current}</h1>
    </div>
  );
}

export default Example;