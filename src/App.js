import React from "react"
import Shifts from "./containers/Shifts"

function App() {
    return (
        <div>
            <h2>Admin shifts app</h2>
            <h3>Date : {new Date().toDateString()}</h3>
            <Shifts />
        </div>
    )
}

export default App