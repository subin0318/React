import { useParams } from "react-router-dom";

const Diray = () => {
    const params = useParams();
    console.log(params);

    return <div>{params.id}번 Diray</div>
};

export default Diray;