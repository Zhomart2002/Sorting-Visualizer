import {
    PRIMARY_COLOR,
    COMPARE_COLOR,
    PIVOT_COLOR,
    setLinesColorAsync,
    setLinesColor,
    SORTED_COLOR,
} from "../lineUtils";

import { ARRAY_FOR_SORTING, DisEnAbleElements, sleep} from "../sortUtils";

export default async function insertionSort(lines) {
    const len = ARRAY_FOR_SORTING.length;

    DisEnAbleElements();

    for (let i = 1; i < len; i++) {
        const current = ARRAY_FOR_SORTING[i];
        await setLinesColorAsync(lines, [i], PIVOT_COLOR);
        
        let j = i - 1;
        
        
        while (j >= 0 && ARRAY_FOR_SORTING[j] > current) {
            ARRAY_FOR_SORTING[j + 1] = ARRAY_FOR_SORTING[j];
            
            await setLinesColorAsync(lines, [j], COMPARE_COLOR);

            const temp = lines[j+1].style.height;
            lines[j+1].style.height = lines[j].style.height;
            lines[j].style.height = temp;
            await sleep();

            setLinesColorAsync(lines, [j + 1], PRIMARY_COLOR);

            j--;
            
            setLinesColorAsync(lines, [i], PIVOT_COLOR);
        }

        ARRAY_FOR_SORTING[j + 1] = current;
        setLinesColorAsync(lines, [j + 1, i], PRIMARY_COLOR);
    }
    setLinesColor(lines, 0, ARRAY_FOR_SORTING.length-1, SORTED_COLOR);
    DisEnAbleElements();
}
