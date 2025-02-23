import "./Editor.css"
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit(); // 오타 수정됨
        }
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="Editor">
            <input
                ref={contentRef} // 오타 수정됨
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="오늘 할일은?"
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
