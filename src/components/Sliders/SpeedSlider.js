import React from "react";
import { setSpeed } from "../../utils/sortManager";

export default function SpeedSlider() {

    return (
        <div className="slider-block">
            <span className="slider-name">Delay(ms)</span>
            <input
                className="slider"
                type="range"
                min="0"
                max="1000"
                step="10"
                defaultValue="10"
                onChange={(event) => {
                    let val = event.target.value;
                    setSpeed(val);
                    
                    if (val === '1000')
                        val = '1s';
                    else
                        val += 'ms';
                    event.target.nextElementSibling.innerText = val;
                }}
            />
            <div className="slider-value">10ms</div>
        </div>
    );
}
