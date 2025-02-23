const Button = ({ children,text, color="black"}) => {
    

    const oneClickButton = () => {
        console.log(text);

    };


    return (

     <button onClick={oneClickButton}>
      
    {text}
     
     {children}
     
     </button>


    ); 
};




// props는 컴포넌트 간에 데이터를 전달하는 메커니즘 이다
// "메커니즘"이라는 용어는 어떤 시스템이나 과정의 작동 방식이나 구조를 의미합니다. 
export default Button;


