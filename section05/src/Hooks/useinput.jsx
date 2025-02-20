import { useState } from "react";
function useInput () { 
    // 커스텀 훅을 만들기위해서는 앞에 접두사 use을 붙여야한다
    const [input, setInput] = useState("");

    const onChange = (e) => {
       setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;