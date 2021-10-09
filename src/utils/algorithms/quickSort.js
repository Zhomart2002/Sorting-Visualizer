import {
    PRIMARY_COLOR,
    COMPARE_COLOR,
    SORTED_COLOR,
    PIVOT_COLOR,
    setLinesColorAsync,
    swapArr,
    swapHeightLines
} from "../lineManager";

import { ARRAY_FOR_SORTING, DisEnAbleElements } from "../sortManager";

export default async function quickSort(lines) {
    DisEnAbleElements();
    await quickSortImpl(lines, 0, lines.length - 1);
    DisEnAbleElements();
}

async function quickSortImpl(lines, low, high) {
    if (low >= high) {
        if (low === high)
            setLinesColorAsync(lines, [high], SORTED_COLOR);
        return;
    }

    const pi = await partition(lines, low, high);

    await quickSortImpl(lines, low, pi - 1);
    await quickSortImpl(lines, pi + 1, high);
}

async function partition(lines, low, high) {
    const pivot = ARRAY_FOR_SORTING[high];
    setLinesColorAsync(lines, [high], PIVOT_COLOR, 0); // pivot

    let bound = low;

    for (let j = low; j < high; j++) {
        await setLinesColorAsync(lines, [j], COMPARE_COLOR); // bound
        
        if (pivot >= ARRAY_FOR_SORTING[j]) {
            swapArr(ARRAY_FOR_SORTING, bound, j);
            await swapHeightLines(lines, bound, j);

            setLinesColorAsync(lines, [bound], PRIMARY_COLOR, 0);
            bound++;
            setLinesColorAsync(lines, [bound], COMPARE_COLOR);

        }
        if (bound !== j)
            setLinesColorAsync(lines, [j], PRIMARY_COLOR, 0);
    }
    swapArr(ARRAY_FOR_SORTING, bound, high);
    await swapHeightLines(lines, bound, high); // swap bound with pivot

    await setLinesColorAsync(lines, [high], PRIMARY_COLOR);
    await setLinesColorAsync(lines, [bound], SORTED_COLOR);

    return bound;

}