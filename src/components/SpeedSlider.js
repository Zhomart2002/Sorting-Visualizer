import React from "react";
import { setSpeed } from "../utils/sortUtils";

export default function SpeedSlider() {
    return (
        <div className="slider-block">
            <span className="slider-name">Delay(ms)</span>
            <input
                className="slider speed-slider"
                type="range"
                min="0"
                max="1000"
                step="10"
                defaultValue="250"
                onChange={(event) => {
                    const val = event.target.value;
                    if (val >= 0 && val <= 1000){
                        event.target.nextSibling.value = val;
                        setSpeed(val);
                    }
                }}
            />
            <input
                type="number"
                id="speed_value"
                defaultValue="250"
                min="0"
                max="1000"
                step="10"
                onChange={(event) => {
                    const val = event.target.value;
                    if (val >= 0 && val <= 1000){
                        event.target.previousSibling.value = val;
                        setSpeed(val);
                    }
                }}
            />
        </div>
    );
}
