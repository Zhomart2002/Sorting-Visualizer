import React from "react";
import generateNewArray from "../../utils/arrayGenerator";
import {
    MIN_HEIGHT,
    MAX_HEIGHT,
    PRIMARY_COLOR,
    setLinesColor,
    LINE_NUMBER,
    isLinesSorted,
    setLinesStatus,
} from "../../utils/lineManager";

export default function GenerateButton({ setLineValues }) {
    const generateArray = React.useCallback(() => {
        let newArray = generateNewArray(LINE_NUMBER, MIN_HEIGHT, MAX_HEIGHT);
        setLineValues(newArray);

        if (isLinesSorted) {
            const lines = document.getElementById("linesContainer").children;
            setLinesColor(lines, 0, lines.length - 1, PRIMARY_COLOR);
            setLinesStatus(false);
        }
    }, [setLineValues]);

    return (
            <button onClick={generateArray} id="generate-btn" className="btn">
                Generate
            </button>
    );
}
