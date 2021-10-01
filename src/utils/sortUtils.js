let SPEED_TIME_MS = 250;
let SORT_METHOD = "Quick";
let ARRAY_FOR_SORTING = [];

function setSpeed(speed) {
    SPEED_TIME_MS = speed;
}

function setSortMethod(sortMethod) {
    SORT_METHOD = sortMethod;
}


function setArrayForSorting(arr) {
    ARRAY_FOR_SORTING = [...arr];
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms || SPEED_TIME_MS));
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

export {
    SPEED_TIME_MS,
    setSpeed,
    SORT_METHOD,
    setSortMethod,
    ARRAY_FOR_SORTING,
    setArrayForSorting,
    DisEnAbleElements,
    sleep
};
