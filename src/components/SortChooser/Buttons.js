import React from "react";
import GenerateButton from "./GenerateButton";
import SortButton from "./SortButton";

export default function Buttons({ setLineValues }) {
    return (
        <div className="buttons">
            <GenerateButton setLineValues={setLineValues}/>
            <SortButton />
        </div>
    );
}
