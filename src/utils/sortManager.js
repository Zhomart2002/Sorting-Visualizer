let DELAY_MS = 250;
let SORT_METHOD = "Bubble Sort";
let ARRAY_FOR_SORTING = [];
const sortTypes = [
    "Bubble Sort",
    "Insertion Sort",
    "Selection Sort",
    "Merge Sort",
    "Quick Sort",
    "Quick Sort (dual pivot)",
];

function setSpeed(speed) {
    DELAY_MS = speed;
}

function setSortMethod(sortMethod) {
    SORT_METHOD = sortMethod;
}

function setArrayForSorting(lines) {
    ARRAY_FOR_SORTING = [];

    for (let line of lines) ARRAY_FOR_SORTING.push(parseInt(line.style.height));
}

function DisEnAbleElements() {
    const elements = document.querySelectorAll(
        ".navBar .sliders .num-slider, .navBar .sliders #number_value, .navBar .btn"
    );

    for (let el of elements) {
        if (!el.hasAttribute("disabled")) {
            el.setAttribute("disabled", "true");
        } else {
            el.removeAttribute("disabled");
        }
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms || DELAY_MS));
}

export {
    sortTypes,
    setSpeed,
    SORT_METHOD,
    setSortMethod,
    ARRAY_FOR_SORTING,
    setArrayForSorting,
    DisEnAbleElements,
    sleep,
};
