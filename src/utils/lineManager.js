import { sleep } from "./sortManager";

const MIN_HEIGHT = 15;
const MAX_HEIGHT = 550;
let LINE_NUMBER = 50;

const PRIMARY_COLOR = "rgba(66, 134, 244, 0.8)";
const COMPARE_COLOR = "rgba(78, 216, 96, 0.8)";
const SWAP_COLOR = "rgba(214, 29, 29, 0.8)";
const SORTED_COLOR = "rgba(169, 92, 232, 0.8)";
const PIVOT_COLOR = "rgb(213, 241, 88)";
let isLinesSorted = false;

function setLineNumber(lineNumber) {
    LINE_NUMBER = lineNumber;
}

function setLinesColor(lines, start, end, color) {
    for (let i = start; i <= end; i++) lines[i].style.backgroundColor = color;
}

async function setLinesColorAsync(lines, indexes, color, ms) {
    for (let i of indexes) lines[i].style.backgroundColor = color;
    await sleep(ms);
}

async function swapHeightLines(lines, i, j) {
    
    await setLinesColorAsync(lines, [i, j], SWAP_COLOR);
    
    const tempHeight = lines[i].style.height;
    lines[i].style.height = lines[j].style.height;
    lines[j].style.height = tempHeight;

    const tempText = lines[i].innerText;
    lines[i].innerText = lines[j].innerText;
    lines[j].innerText = tempText;
    
    await sleep();
    
    await setLinesColorAsync(lines, [i, j], COMPARE_COLOR);
}

function setLinesStatus(isSorted){
    isLinesSorted = isSorted;
}

function swapArr(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export {
    MIN_HEIGHT,
    MAX_HEIGHT,
    PRIMARY_COLOR,
    COMPARE_COLOR,
    SWAP_COLOR,
    PIVOT_COLOR,
    SORTED_COLOR,
    LINE_NUMBER,
    setLineNumber,
    setLinesColorAsync,
    swapArr,
    swapHeightLines,
    setLinesColor,
    isLinesSorted,
    setLinesStatus
};
