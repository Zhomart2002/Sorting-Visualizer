const SPEED_TIME_MS = 1000;
const PRIMARY_COLOR = 'rgba(66, 134, 244, 0.8)';
const COMPARE_COLOR = 'rgba(78, 216, 96, 0.8)';
const SWAP_COLOR = 'rgba(214, 29, 29, 0.8)';
const SORTED_COLOR = 'rgba(169, 92, 232, 0.8)';

export default function bubbleSort(arr, lines) {
    const newArr = [...arr];
    const len = newArr.length;

    let isSwapped = true;
    let sorted = 0;
    let step = 0;
    let isNextCompare = true;

    while(isSwapped && sorted < len){
        isSwapped = false;
        const last = (len-1) - sorted;

        for(let i = 0; i < last; isNextCompare = !isNextCompare){
            if (isNextCompare){
                setLinesColor(lines, i, i+1, step++, COMPARE_COLOR);
            }else{
                if (newArr[i] > newArr[i+1]){
                    swapArr(newArr, i, i+1);
                    setLinesColor(lines, i, i+1, step++, SWAP_COLOR, true);
                    setLinesColor(lines, i, i+1, step++, COMPARE_COLOR);
                    isSwapped = true;
                }
                setLinesColor(lines, i, i, step, PRIMARY_COLOR);
                i++;
            }
        }
        setLinesColor(lines, last, last, step++, SORTED_COLOR);
        sorted++;
    }
    setLinesColor(lines, 0, len-1, step++, COMPARE_COLOR);
    setLinesColor(lines, 0, len-1, ++step, SORTED_COLOR);
}

function swapArr(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function setLinesColor(lines, start, end, step, color, swap){
    setTimeout(() => {

        for(let i = start; i <= end; i++)
            lines[i].style.backgroundColor = color;
        
        if (swap)
            swapHeightLines(lines, start, end);

    }, step*SPEED_TIME_MS);
}


function swapHeightLines(lines, i, j){
    const temp = lines[i].style.height;
    lines[i].style.height = lines[j].style.height;
    lines[j].style.height = temp;
}