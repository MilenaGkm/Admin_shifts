import React from "react"
import Shifts from "./containers/Shifts"
import Modals from "./containers/Modals/Modals";

function App() {
    return (
        <div>
            <h2>Admin shifts app</h2>
            <h3>Date : {new Date().toDateString()}</h3>
            <Shifts />
            <Modals />
        </div>
    )
}

export default App