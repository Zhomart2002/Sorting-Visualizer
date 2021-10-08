import React from "react";
import "./styles/linesBlock.css";

export default React.memo(function SortVizualizer({ lineValues }) {
    return (
        <div id="linesContainer">
            {lineValues.map((value, idx) => (
                <div className="barLine" style={{ height: value}} key={idx}></div>
            ))}
        </div>
    );
});
