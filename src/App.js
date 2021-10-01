import React from "react";
import SortVizualizer from "./SortVizualizer";
import NavBar from "./components/NavBar";

function App() {
    const [lineValues, setLineValues] = React.useState([]);

    const changeLineValue = React.useCallback((newArray) => {
        setLineValues(newArray);
    }, [setLineValues]);

    React.useEffect(() => {
        document.getElementById("generate-btn").click();
    }, []);

    return (
        <div className="App">
            <NavBar setLineValues={changeLineValue} />
            <SortVizualizer lineValues={lineValues} />
        </div>
    );
}

export default App;
