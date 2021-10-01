import React from "react";
import SortLine from "./components/SortLine";

import "./styles/linesBlock.css";

export default React.memo(function SortVizualizer({ lineValues }) {
    return (
        <div id="linesContainer">
            {lineValues.map((value, idx) => (
                <SortLine value={value} key={idx} />
            ))}
        </div>
    );
});
