import React from "react";
import generateNewArray from "../utils/generator";
import {
    MIN_HEIGHT,
    MAX_HEIGHT,
    PRIMARY_COLOR,
    setLinesColor,
    LINE_NUMBER
} from "../utils/lineUtils";

import { setArrayForSorting} from "../utils/sortUtils";

import sort from "../utils/sort";

export default function GenerateSortButton({ setLineValues }) {
    const generateArray = React.useCallback(() => {
        const newArray = generateNewArray(LINE_NUMBER, MIN_HEIGHT, MAX_HEIGHT);
        setLineValues(newArray);
        setArrayForSorting(newArray);

        const lines = document.getElementById("linesContainer").children;
        setLinesColor(lines, 0, lines.length - 1, PRIMARY_COLOR);
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
