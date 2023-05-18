import React, { useState } from 'react'

function Textarea() {
    const [text, setText] = useState("");
    const textLength = text.length;

    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div className="textarea">
            <div class="box">
                <textarea Class="above" onChange={handleChange} />
                <div Class="below">5/18/2023 <i class="fa-solid fa-trash"></i></div>
            </div>
            <div className="box">
                <textarea Class="above" onChange={handleChange} />
                <div Class="below" > {textLength} <i i class="fa-solid fa-trash" ></i></div>
            </div>
        </div >
    )
}

export default Textarea