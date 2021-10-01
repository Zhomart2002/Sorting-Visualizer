import {
    PRIMARY_COLOR,
    COMPARE_COLOR,
    SORTED_COLOR,
    setLinesColorAsync,
    swapArr,
    swapHeightLines
} from "../lineUtils";

import { ARRAY_FOR_SORTING, DisEnAbleElements} from "../sortUtils";

export default async function bubbleSort(lines) {
    DisEnAbleElements();
    const len = ARRAY_FOR_SORTING.length;

    let isSwapped = true;
    let sorted = 0;

    while (isSwapped && sorted < len) {
        isSwapped = false;
        const last = len - 1 - sorted++;

        for (let i = 0; i < last; i++) {
            await setLinesColorAsync(lines, [i, i+1], COMPARE_COLOR);
            if (ARRAY_FOR_SORTING[i] > ARRAY_FOR_SORTING[i + 1]) {
                swapArr(ARRAY_FOR_SORTING, i, i + 1);
                await swapHeightLines(lines, i, i+1);
                isSwapped = true;
            }
            setLinesColorAsync(lines, [i], PRIMARY_COLOR);
        }
        await setLinesColorAsync(lines, [last], SORTED_COLOR);
    }
    await setLinesColorAsync(lines, ARRAY_FOR_SORTING.keys(), COMPARE_COLOR, 600);
    await setLinesColorAsync(lines, ARRAY_FOR_SORTING.keys(), SORTED_COLOR);
    DisEnAbleElements();
}
