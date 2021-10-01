import React from "react";
import SortMenu from "./SortMenu";
import GenerateSortButton from "./GenerateSortButton";
import Sliders from "./Sliders";

import "../styles/navBar.css";

export default React.memo(function NavBar({setLineValues}) {
    return (
        <div className="navBar">
            <Sliders />
            <SortMenu />
            <GenerateSortButton setLineValues={setLineValues}/>
        </div>
    );
});
