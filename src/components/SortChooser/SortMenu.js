import React from "react";
import { sortTypes, setSortMethod } from "../../utils/sortManager";

export default function SortMenu() {
    return (
        <select
            onChange={(event) => {
                setSortMethod(event.target.value);
            }}
        >
            {sortTypes.map((sortName, idx) => (
                <option value={sortName} key={idx}>
                    {sortName}
                </option>
            ))}
        </select>
    );
}
