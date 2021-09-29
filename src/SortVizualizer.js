import React from "react";
import SortLine from "./components/SortLine";
import bubbleSort from "./utils/bubbleSort";

import "./styles/sortLine.css";

const LINE_NUMBER = 5;
const MIN_HEIGHT = 5;
const MAX_HEIGHT = 550;

export default function SortVizualizer() {

    const [values, setvalues] = React.useState([]);
    const container = React.useRef();

    const generateArray = React.useCallback(() => {
        setvalues(generateNewArray(LINE_NUMBER, MIN_HEIGHT, MAX_HEIGHT));
        for(let line of container.current.children){
            line.style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
        }
    }, []);

    React.useEffect(() => {
        generateArray();
    }, [generateArray]);

    const sortBubble = React.useCallback(() => {
        const domLines = container.current.children;
        bubbleSort(values, domLines);
    }, [values]);
    
    return (
        <React.Fragment>
            <div className="container" ref={container}>
                {values.map((value, idx) => <SortLine value={value} key={idx} />)}
            </div>
            <div className="buttons">
                <button onClick={generateArray}>Generate</button>
                <button onClick={sortBubble}>Bubble sort</button>
            </div>
        </React.Fragment>
    );
}

function generateNewArray(len, min, max) {
    const arr = []

    for (let i = 0; i < len; i++)
        arr.push(randomNumber(min, max));

    return arr;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}