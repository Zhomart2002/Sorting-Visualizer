import React from "react";
import SortType from "./SortType";
import { setSortMethod } from "../utils/sortUtils";

import "../styles/sortMenu.css";

const sortTypes = ["Bubble Sort", "Quick Sort", "Insertion Sort"];

export default function SortMenu() {
    const setSortType = React.useCallback((event) => {
        const methodName = event.target.value.split(' ')[0];
        setSortMethod(methodName);
    }, []);

    return (
        <select onChange={(event) => {setSortType(event)}}>            
            {sortTypes.map((sortName, idx) => <SortType name={sortName} key={idx} />)}
        </select>
    );
}
