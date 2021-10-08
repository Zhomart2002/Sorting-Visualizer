import React from "react";
import { setLineNumber } from "../utils/lineUtils";

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
                    const val = event.target.value;
                    if (val >= 2 && val <= 280) {
                        event.target.nextSibling.value = val;
                        setLineNumber(val);
                        document.getElementById('generate-btn').click();
                    }
                }}
            />
            <input
                type="number"
                id="number_value"
                defaultValue="50"
                min="2"
                max="280"
                step="1"
                onChange={(event) => {
                    const val = event.target.value;
                    if (val >= 2 && val <= 280) {
                        event.target.previousSibling.value = val;
                        setLineNumber(val);
                        document.getElementById('generate-btn').click();
                    }
                }}
            />
        </div>
    );
}
