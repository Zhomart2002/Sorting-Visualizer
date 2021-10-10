import React from "react";
import "../styles/linesBlock.css";

export default React.memo(function SortVizualizer({ lineValues }) {

    const color = lineValues.length > 15 ? "transparent" : "white";
    const width = Math.floor(500 / lineValues.length);

    return (
        <div className="main-container">
            <div id="linesContainer">
                {lineValues.map((value, idx) => (
                    <div className="barLine" style={{ height: value, width: width ,color: color }} key={idx}>{value}</div>
                ))}
            </div>
        </div>
    );
});
