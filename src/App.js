import React from "react"
import Shifts from "./containers/Shifts"
import Modals from "./containers/Modals/Modals";
import NewRequestShifts from "./containers/NewRequestShifts/NewRequestShifts"
import ScheduleShifts from "./containers/ScheduleShifts/ScheduleShifts"

function App() {
    return (
        <div>
            <h2>Admin shifts app</h2>
            <h3>Date : {new Date().toDateString()}</h3>
            <Shifts />
            <Modals />
            <NewRequestShifts />
            <ScheduleShifts />
        </div>
    )
}

export default App