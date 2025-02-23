import useInput from "../Hooks/useinput";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능 
// 2. 조건부로 호출될수 없다 ex) if for
// 3. 나만의 훅 (Custom Hook) 직접 만들수있다


// const state = useState(); Hook 은 함수 내부에서만 선언이 가능하다 




const HookExam = () => {

    const [input, onChange] =useInput();

    return (
      <input value={input} onChange={onChange}></input>
    );
}

export default HookExam;