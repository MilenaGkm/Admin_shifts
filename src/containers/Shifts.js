import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getShifts } from '../redux/actions/shifts';
import Card from '../components/Card';

const Shifts = ({apiShifts, isLoading, error, fetchShifts}) => {
   
    useEffect(() => {
        fetchShifts()
    }, [])

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {apiShifts.length === 0 && !isLoading && <p>No shifts available!</p>}
            {error && !isLoading && <p>{error}</p>}
            {apiShifts.length > 0 && apiShifts.map((shift) => (
                <Card key={shift._id} shift={shift} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    apiShifts: state.shifts.shifts,
    isLoading: state.shifts.loading,
    error: state.shifts.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchShifts: () => dispatch(getShifts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shifts);