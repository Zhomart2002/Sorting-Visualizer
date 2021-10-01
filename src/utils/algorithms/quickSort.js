import {
    PRIMARY_COLOR,
    COMPARE_COLOR,
    SORTED_COLOR,
    PIVOT_COLOR,
    setLinesColorAsync,
    swapArr,
    swapHeightLines
} from "../lineUtils";

import { ARRAY_FOR_SORTING, DisEnAbleElements} from "../sortUtils";

export default function quickSort(lines){
    quickSortImpl(lines, 0, lines.length-1);
}

async function quickSortImpl(lines, begin, end){
	if (begin >= end) {
        if (begin === end)
            setLinesColorAsync(lines, [end], SORTED_COLOR);
        return;
    }

    const start = begin;
    
    const pivot = ARRAY_FOR_SORTING[end];
    setLinesColorAsync(lines, [end], PIVOT_COLOR, 0); // pivot

    let bound = begin;
    await setLinesColorAsync(lines, [begin], COMPARE_COLOR); // bound

    while(begin < end){
        await setLinesColorAsync(lines, [begin], COMPARE_COLOR);
        if (pivot >= ARRAY_FOR_SORTING[begin]){
            swapArr(ARRAY_FOR_SORTING, bound++, begin);
            await swapHeightLines(lines, bound-1, begin);
            setLinesColorAsync(lines, [bound-1], PRIMARY_COLOR, 0);
            setLinesColorAsync(lines, [bound], COMPARE_COLOR);
        }
        if (bound !== begin)
            setLinesColorAsync(lines, [begin], PRIMARY_COLOR, 0);
        begin++;
    }
    swapArr(ARRAY_FOR_SORTING, bound, begin);
    await swapHeightLines(lines, bound, begin);
    await setLinesColorAsync(lines, [begin], PRIMARY_COLOR);
    await setLinesColorAsync(lines, [bound], SORTED_COLOR);

    await quickSortImpl(lines, start, bound-1);
    await quickSortImpl(lines, bound+1, end);
}