import React from "react";
import { setLineNumber } from "../../utils/lineManager";

export default function NumberSlider() {
    return (
        <div className="slider-block">
            <span className="slider-name">Line Number</span>
            <input
                className="slider num-slider"
                type="range"
                min="2"
                max="280"
                step="1"
                defaultValue="50"
                onChange={(event) => {
                    let val = event.target.value;
                    event.target.value = val;
                    event.target.nextElementSibling.innerText = val;
                    setLineNumber(val);
                    document.getElementById("generate-btn").click();
                }}
            />
            <div className="slider-value" >50</div>
        </div>
    );
}
