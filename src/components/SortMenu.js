import React from "react";
import SortType from "./SortType";
import { sortTypes, setSortMethod } from "../utils/sortUtils";

import "../styles/sortMenu.css";


export default function SortMenu() {
    const setSortType = React.useCallback((event) => {
        const methodName = event.target.value;
        setSortMethod(methodName);
    }, []);

    return (
        <select onChange={(event) => {setSortType(event)}}>            
            {sortTypes.map((sortName, idx) => <SortType name={sortName} key={idx} />)}
        </select>
    );
}
