import React from "react";
import "../styles/linesBlock.css";

export default React.memo(function SortVizualizer({ lineValues }) {

    const color = lineValues.length > 20 ? "transparent" : "white";

    return (
        <div id="linesContainer">
            {lineValues.map((value, idx) => (
                <div className="barLine" style={{ height: value, color: color}} key={idx}>{value}</div>
            ))}
        </div>
    );
});
