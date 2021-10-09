import React from "react";
import sort from "../../utils/sortFactory";

export default function SortButton() {
    return (
        <button
            className="btn"
            onClick={() => {
                sort(document.getElementById("linesContainer").children);
            }}>
            Sort
        </button>
    );
}
