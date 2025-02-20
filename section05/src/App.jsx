import './App.css'
import Header from './components/Header'
import Main from './components/Main.'
import Footer from './components/Footer'
import Button from  './components/Button'
import ChildComponent from './components/test'
import Button2 from './components/Button2'

function App() { // App 컴포넌트 root 컴포넌트
 
  // const buttonProps = {
  //  text: "메일",
  //  color: "red",
  
  // };

  return (  
    <>
     {/* <Button {...buttonProps} />
     <Button text={"카페"}/>
     <Button text={"블로그"}>
      <div>자식 요소</div>
     </Button>
     <ChildComponent />
     <Button2 text={"안녕"}  color={"blue"}/> */}
    </>
  )
}

// import: 수입하다
// 컴퓨터에서는 다른 프로그램으로부터 데이터를 갖고 오는 것을 뜻
// from: ~ 로 부터 

// /components/Header 파일에서  Header 를 가져오다 
// vite 기능 중 하나 확장자를 자동으로 찾아주는게 있어서 import를 쓸떄 확장자를 안써도 된다


export default App
