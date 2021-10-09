import React from "react";
import { sortTypes, setSortMethod } from "../../utils/sortManager";

function selectSortType(event) {
    const val = event.target.innerText;

    if (val === 'Quick Sort (dual pivot)'){
        alert('Quick Sort (dual pivot) will be added later');
        return;
    }

    const sortTypeSpans = event.target.parentNode.getElementsByClassName('sortName');
    for (let i = 0; i < sortTypes.length-1; i++)
        sortTypeSpans[i].style.color = "rgb(199, 190, 190)";
    event.target.style.color = "blanchedalmond";

    setSortMethod(val);
}

export default function SortMenu() {
    return (
        <React.Fragment>
            {sortTypes.map((sortName, idx) => (
                <React.Fragment>
                    <span className="sortName" key={idx} onClick={(event) => selectSortType(event)}>{sortName}</span>
                    <div className="headerDivider"></div>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}
