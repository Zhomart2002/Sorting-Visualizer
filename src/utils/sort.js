import bubbleSort from "./algorithms/bubbleSort";
import quickSort from "./algorithms/quickSort";
import insertionSort from "./algorithms/insertionSort";
import mergeSort from "./algorithms/mergeSort";
import selectionSort from "./algorithms/selectionSort";

import { SORT_METHOD, setArrayForSorting } from "./sortUtils";
import { setLinesStatus } from "./lineUtils";

export default function sort(lines){
    setArrayForSorting(lines);
    setLinesStatus(true);

    switch(SORT_METHOD){
        case "Bubble Sort": bubbleSort(lines); break;
        case "Quick Sort": quickSort(lines); break;
        case "Insertion Sort": insertionSort(lines); break;
        case "Merge Sort": mergeSort(lines); break;
        case "Selection Sort": selectionSort(lines); break;
        case "Quick Sort(2 pivot)": quickSort(lines); break;
        default: alert("Not such sorting algorithm");
    }
}