import { useSearchParams } from "react-router-dom";
const New = () => {
    const [params, setParams] =useSearchParams();
    console.log(params.get("value"))
    return <div>New</div>
};

export default New;