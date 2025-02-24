import { getEmotionImage } from "../utill/get-emotion-imge.js"; 
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {
    return (
        <div className="DiaryItem">
            <div className="img_section">
                <img src={getEmotionImage(1)} alt="Emotion" />
            </div>
            <div className="info_section">
                <div className="created_date">{new Date().toLocaleDateString()}</div>
                <div className="content">내용이 여기에 들어갑니다.</div> {/* 내용 수정 */}
            </div>
            <div className="button_section">
                <Button text={"수정하기"} /> {/* 버튼 텍스트 수정 */}
            </div>
        </div>
    );
};

export default DiaryItem;