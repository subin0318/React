// 1. JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을수 있다
// 2. 숫자, 문자열, 배열 값만 랜더링 된다 
// 3. 모든 태그는 닫혀있어야 한다 
// 4. 최상위 태그는 하나여야 한다.

import "./Main.css"

const Main = () => {

   const number = 10;
   const obj = {a:1};

    return (

        <main>
        <h1 className="Main">main</h1>
        <p>{number % 2 === 0 ? "짝수":"홀수"}</p>
        {obj.a}
        {obj["a"]}
        </main>


    );
};

// number % 2 === 0 ? "짝수":"홀수"
// number 를 2로 나눴을때 나머지가 0이 될때 짝수(true) or 홀수(false) 를 출력하라
// 객체를 그대로 출력은 불가능하나 점표기법 및 대괄호 표기법을 통한 랜더링은 가능하다 
// 내부 스타일을 적용할때에는 css 에서의 표기법이 아닌 카멜 표기법을 이용하여 스타일을 정의한다


export default Main