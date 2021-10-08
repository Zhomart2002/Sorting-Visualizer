import React from "react";
import generateNewArray from "../utils/generator";
import {
    MIN_HEIGHT,
    MAX_HEIGHT,
    PRIMARY_COLOR,
    setLinesColor,
    LINE_NUMBER,
    isLinesSorted,
    setLinesStatus
} from "../utils/lineUtils";

import sort from "../utils/sort";

export default function GenerateSortButton({ setLineValues }) {
    const generateArray = React.useCallback(() => {
        let newArray = generateNewArray(LINE_NUMBER, MIN_HEIGHT, MAX_HEIGHT);
        setLineValues(newArray);

        if(isLinesSorted){
            const lines = document.getElementById("linesContainer").children;
            setLinesColor(lines, 0, lines.length - 1, PRIMARY_COLOR);
            setLinesStatus(false);
        }
    }, [setLineValues]);

    return (
        <div className="buttons">
            <button onClick={generateArray} id="generate-btn" className="btn">
                Generate
            </button>
            <button 
                className="btn"
                onClick={() => {
                    sort(document.getElementById("linesContainer").children);
                }}
            >
                Sort
            </button>
        </div>
    );
}
