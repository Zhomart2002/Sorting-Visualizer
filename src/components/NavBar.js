import React from "react";
import SortMenu from "./SortChooser/SortMenu";
import Buttons from "./SortChooser/Buttons";
import Sliders from "./Sliders/Sliders";

import "../styles/navBar.css";

export default React.memo(function NavBar({setLineValues}) {
    return (
        <div className="navBar">
            <Sliders />
            <SortMenu />
            <Buttons setLineValues={setLineValues}/>
        </div>
    );
});
