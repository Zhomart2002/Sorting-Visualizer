import bubbleSort from "./algorithms/bubbleSort";
import quickSort from "./algorithms/quickSort";
import { SORT_METHOD } from "./sortUtils";

export default function sort(lines){
    switch(SORT_METHOD){
        case "Bubble": bubbleSort(lines); break;
        case "Quick": quickSort(lines); break;
        default: alert("Not such sorting algorithm");
    }
}