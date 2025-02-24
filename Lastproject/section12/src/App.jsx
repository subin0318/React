import './App.css'
import { useReducer,useRef, createContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Diray from './Pages/Diray'
import New from './Pages/New'
import Notfound from './Pages/Notfound'
import Edit from './Pages/Edit'
// 각 홈페이지에 맞게 랜더링 되게 설정한다


const mockData = [
  {
     id: 1,
     createDate: new Date("2024-02-24").getTime(),
     emotionId: 1,
     content: "1번 일기장",
  
  }
   ,
  {
    id: 2,
    createDate: new Date("2024-02-23").getTime(),
    emotionId: 2,
    content: "2번 일기장",
 
 },

 {
  id: 3,
  createDate: new Date("2024-03-18").getTime(),
  emotionId: 3,
  content: "3번 일기장",

}

]


// "/" : 모든 일기를 조회하는 Home 페이지
// "/new" : 새로운 일기를 작성하는 New 페이지
// "/diary" : 일기를 상세히 조회 하는 Diray 페이지


function reducer (state ,action) {
      switch(action.type) {
        case 'CREATE': return [action.data , ...state]
        case 'UPDATE': 
        return state.map((item) => 
          String(item.id) === String(action.data.id) ? action.data : item
      );
      case "DELETE" :
        return state.filter (
            (item) => String(item.id) !== String(action.id)
        );
        default:
                return state
      }
}

export const DirayStateContext = createContext();
export const DirayDispatchContext= createContext();

function App() {
  
  const [data, dispatch] =useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 

  const onCreate = (createDate, emotionId, content) => {

    dispatch({
      type: "CREATE",
      data : {
        id:idRef.current++,
        createDate,
        emotionId,
        content,
      }
    })

  }

  // 기존 일기 수정

  const onUpdate = (createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data : {
        id,
        createDate,
        emotionId,
        content,
      }
    })
  }




  // 기존 일기 삭제

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }


  return (
  <>
    <DirayStateContext.Provider value={data}>
      <DirayDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/New" element={<New />} />
    <Route path="/Diray/:id" element={<Diray />} />
    <Route path="/edit/:id" element={<Edit />} />
    <Route path="*" element={<Notfound />} />
    {/* *: (와일드카드) 지정된 경로로 설정되지 않으면 Notfound를 랜더링 하여라  */}
    </Routes>
    </DirayDispatchContext.Provider>
    </DirayStateContext.Provider>
    </>
  );

  // Routes 안에는 Route 만 불러올수 있다
}

export default App

