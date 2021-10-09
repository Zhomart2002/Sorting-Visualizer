import {
    PRIMARY_COLOR,
    COMPARE_COLOR,
    PIVOT_COLOR,
    setLinesColorAsync,
    SORTED_COLOR,
    swapArr,
    swapHeightLines,
    setLinesColor,
} from "../lineManager";

import { ARRAY_FOR_SORTING, DisEnAbleElements } from "../sortManager";

export default async function selectionSort(lines) {
    DisEnAbleElements();

    for (let i = 0; i < ARRAY_FOR_SORTING.length - 1; i++) {
        let indexMin = i;
        await setLinesColorAsync(lines, [i], PIVOT_COLOR);

        for (let j = i + 1; j < ARRAY_FOR_SORTING.length; j++) {
            await setLinesColorAsync(lines, [j], COMPARE_COLOR);

            if (ARRAY_FOR_SORTING[indexMin] > ARRAY_FOR_SORTING[j]) {
                if (indexMin !== i)
                    setLinesColorAsync(lines, [indexMin], PRIMARY_COLOR);

                indexMin = j;
                await setLinesColorAsync(lines, [j], PIVOT_COLOR);
            } else setLinesColorAsync(lines, [j], PRIMARY_COLOR);
        }
        swapArr(ARRAY_FOR_SORTING, i, indexMin);
        await swapHeightLines(lines, i, indexMin);
        setLinesColorAsync(lines, [indexMin], PRIMARY_COLOR);
        await setLinesColorAsync(lines, [i], SORTED_COLOR);
    }

    setLinesColor(lines, 0, ARRAY_FOR_SORTING.length-1, SORTED_COLOR);

    DisEnAbleElements();
}
