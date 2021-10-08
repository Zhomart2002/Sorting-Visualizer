import {
    PRIMARY_COLOR,
    COMPARE_COLOR,
    setLinesColorAsync,
    setLinesColor,
    SORTED_COLOR,
    SWAP_COLOR,
} from "../lineUtils";

import { ARRAY_FOR_SORTING, DisEnAbleElements} from "../sortUtils";

export default async function mergeSort(lines) {
    DisEnAbleElements();
    await sort(ARRAY_FOR_SORTING, 0, ARRAY_FOR_SORTING.length - 1, lines);
    DisEnAbleElements();
}

async function sort(arr, begin, end, lines) {
    if (begin >= end) return;
    const middle = Math.floor((end + begin) / 2);

    await sort(arr, begin, middle, lines);
    await sort(arr, middle + 1, end, lines);

    await merge(arr, begin, middle, end, lines);
}

async function merge(arr, begin, middle, end, lines) {
    const lenL = middle - begin + 1;
    const lenR = end - middle;

    const left = new Array(lenL);
    const right = new Array(lenR);

    for (let i = 0; i < lenL; i++) left[i] = arr[begin + i];

    for (let i = 0; i < lenR; i++) right[i] = arr[middle + 1 + i];

    let i = 0,
        j = 0,
        current = begin;

    const isLastStep = lenL + lenR === arr.length;

    while (i < lenL && j < lenR) {
        await setLinesColorAsync(lines, [current, middle + 1 + j], COMPARE_COLOR);
        if (left[i] <= right[j]) {
            setLinesColorAsync(lines, [current], isLastStep ? SORTED_COLOR : PRIMARY_COLOR, 0);
            arr[current] = left[i++];
        } else {
            await setLinesColorAsync(lines, [current, middle + 1 + j], SWAP_COLOR);
            setLinesColorAsync(lines, [middle + 1 + j], PRIMARY_COLOR, 0);
            insertWithShifting(lines, middle + 1 + j, lenL - i);
            await setLinesColorAsync(lines, [current+1], SWAP_COLOR);
            setLinesColorAsync(lines, [current+1], PRIMARY_COLOR);

            arr[current] = right[j++];
        }
        await setLinesColorAsync(lines, [current], isLastStep ? SORTED_COLOR : PRIMARY_COLOR, 0);        
        current++;
    }
    
    if(middle + 1 + j < arr.length)
        setLinesColorAsync(lines, [middle + 1 + j], PRIMARY_COLOR, 0);

    if (isLastStep)
        setLinesColor(lines, current, end, SORTED_COLOR);

    while (i < lenL)
        arr[current++] = left[i++];

    while (j < lenR)
        arr[current++] = right[j++];
}

function insertWithShifting(lines, index, shiftLength){
    const elHeight = lines[index].style.height;

    while(shiftLength-- > 0){
        lines[index].style.height = lines[--index].style.height;
    }

    lines[index].style.height = elHeight;
}