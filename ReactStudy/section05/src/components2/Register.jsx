import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년 월일
// 3. 국적
// 4. 자기소개


const Register = () => {
    
    // state 선언 usestate("초깃값");
    const [name, setName]= useState("");
    const [birth, setBirth] = useState("");
    const [country,setCountry]= useState("");
    const [bio, setbio] = useState("");
   
 
    const onChangeName = (e) => { 
     // e(이벤트 객체) : 이벤트 핸들러 함수에서 자동으로 전달된다

     setName(e.target.value);
     // 사용자가 입력힌 input 의 value 값에 접근을 할수있게됨

    };

    const onChangeBirth = (e) => {

        setBirth(e.target.value);
    };

    const onChangcountry  = (e) => {
        setCountry(e.target.value)
    };

    const onChangebio = (e) => {
        setbio(e.target.value)
    };


    
  
    return (
    <div>
       <div>
       <input 
       value={name}  // 입력한 값을 실시간으로 감지하고 상태(state)로 관리하기 위해
       onChange={onChangeName} 
       placeholder={"이름"}/>

       </div>

       <div>

       <input 
        value={birth}
        onChange={onChangeBirth} 
        type="date" />
  
       </div>

       <div>
        <select value={country} onChange={onChangcountry}>
            <option value=" "></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
        </select>
   
       </div>
 
     <div>
        <textarea value={bio} onChange={onChangebio} />
     </div>

    </div>
    
); 
};

export default Register;