import React from "react";

export default function SortLine({value}){
    return (
        <div className="barLine" style={{height: `${value}px`}}></div>
    );
}