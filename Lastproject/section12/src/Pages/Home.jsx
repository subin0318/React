import Header from "../components/header";
import Button from "../components/Button.jsx"
import DirayList from "../components/DirayList.jsx";
import { useState, useContext} from "react";
import { DirayStateContext } from "../App.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 1, 0, 0).getTime();

  return data.filter((item) => {
      const createdTime = new Date(item.createdDate).getTime();
      return beginTime <= createdTime && createdTime < endTime;
  });
};

const Home = () => {
   
   const data = useContext(DirayStateContext);
   const [pirvotDate,setPpirvotDate] =useState(new Date());

   const onIncreaseMonth = () => {
    setPpirvotDate(new Date(pirvotDate.getFullYear(), pirvotDate.getMonth()+1))
   }

   const onDecreaseMonth = () => {
    setPpirvotDate(new Date(pirvotDate.getFullYear(), pirvotDate.getMonth()-1))
   }
 
    return (
     <div>
       <Header
        
        title={`${pirvotDate.getFullYear()}년 ${pirvotDate.getMonth()+1}월 
        
        `}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />} 
        rightChild={<Button onClick={onIncreaseMonth} text={"<"} />}
      
       
       />
        <DirayList />
      </div>

    ); 
};

export default Home;