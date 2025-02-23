import { useState } from "react";
import { useRef } from "react"; // React Hooks 라고 부른다

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년 월일
// 3. 국적
// 4. 자기소개


const Register3 = () => {
    
    // 객체 형태 
    const [input, setInput] = useState ({
        
        name: "",
        birth: "",
        country: "",
        bio: "",


    }
    );
    
    const countRef = useRef(0);
    const inputRef = useRef(0);

  
    const onChange = (e) => {

        countRef.current++;
        console.log(countRef.current);

        setInput({

            ...input,
            [e.target.name] : e.target.value,
            //  [e.target.name] : name, birth, country, bio 이 4개중 하나의 값을 가지게 될것이다
            //  e.target.value : 사용자가 입력한 값 

        });


    };

    const onSubmit = () => {

         if(input.name==="") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
         }


    };
    
  
    return (
    <div>

       

       <div>
       <input 
       ref={inputRef}
       name="name"
       onChange={onChange} 
       placeholder={"이름"}/>

       </div>
       <div>
       <input 
        name="birth"
        onChange={onChange} 
        type="date" />
  
       </div>

       <div>
        <select name="country" onChange={onChange}>
            <option value=" "></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
        </select>
   
       </div>
 
     <div>
        <textarea name="bio" onChange={onChange} />
     </div>
     <button onClick={onSubmit}>제출</button>
    </div>
    
); 
};

export default Register3;