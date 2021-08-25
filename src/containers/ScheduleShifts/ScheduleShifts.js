import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { getSubmittedShifts, addToDbScheduledShifts } from '../../redux/actions/shifts';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import FormGroup from '@material-ui/core/FormGroup';


import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
var eachDayOfInterval = require('date-fns/eachDayOfInterval')

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         padding: theme.spacing(0.5),
//         marginBottom: '20px',
//     },
//     chip: {
//         margin: theme.spacing(0.5),
//     },
//     msgBtn: {
//         padding: '28px',
//         justifyContent: 'space-between',

//     },
//     textField: {
//         marginTop: '18px',
//         marginBottom: '15px',
//     },
//     formControl: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         padding: theme.spacing(0.5),
//         // marginTop: '5px',
//         // marginBottom: '15px',
//     },
//     paper: {
//         marginTop: '5px',
//         marginBottom: '15px',
//         // flex-direction: column
//         // display: "flex",
//         // flexWrap: "wrap",
//         // justifyontent: "space-around",
//     },
// }));

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    paper: {
        marginTop: '5px',
        marginBottom: '15px',
        // flex-direction: column
        // display: "flex",
        // flexWrap: "wrap",
        // justifyontent: "space-around",
    },
    select: {
        // width: 200,
    }
}));

const ScheduleShifts = ({ apiUsers, apiSubmittedShifts, isLoading, error, state, fetchSubmittedShifts, addRequestShift }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [subShift, setSubShift] = useState([]);
    const [shiftsDate, setShiftsDate] = useState([]);
    const [scheduledShifts, setScheduledShifts] = useState({ adminId: "", dateFrom: "", dateTo: "", shifts: [] });
    const [age, setAge] = React.useState([]);

    // console.log(subShift);
    // console.log(apiSubmittedShifts);


    const wantedShift = (value) => {
        return value === true
    }

    useEffect(() => {
        fetchSubmittedShifts()
    }, [])

    useEffect(() => {
        (async () => {
            let usersShifts = []
            for (let shift of apiSubmittedShifts) {
                let userShift = { userName: { ...apiUsers.find(user => user._id === shift.userId) }.username, userId: shift.userId, shifts: shift.shifts }
                usersShifts.push(userShift)
            }
            setSubShift(usersShifts)

            let shifts = []
            for (let i = 0; i < apiSubmittedShifts[0].shifts.length; i++) {
                let shift = {
                    date: apiSubmittedShifts[0].shifts[i].date,
                    morning: "",
                    noon: "",
                    evening: ""
                }
                shifts.push(shift)
            }

            let schedule = {
                adminId: apiSubmittedShifts[0].shifts[0].adminId,
                dateFrom: apiSubmittedShifts[0].shifts[0].date,
                dateTo: apiSubmittedShifts[0].shifts[apiSubmittedShifts[0].shifts.length - 1].date,
                shifts: shifts
            }
            setScheduledShifts(schedule)
        })()
    }, [apiSubmittedShifts])

    
    const handleChange = (event, i, time) => {
        let newScheduledShifts = {... scheduledShifts}
        newScheduledShifts.shifts[i][time] = event.target.value
        setScheduledShifts( newScheduledShifts )
    };
    
    // console.log(scheduledShifts);
    const submitScheduledShifts = () => {
        console.log(scheduledShifts);
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>Schedule Shifts</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        {subShift.map((shift, i) => {
                            return (
                                <Paper key={i} className={classes.paper}>
                                    <FormLabel component="legend">{shift.shifts[i].date}</FormLabel>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Morning</InputLabel>
                                        <Select
                                            // label="lol"
                                            className={classes.select}
                                            fullWidth
                                            // multiple
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={scheduledShifts.shifts[i].morning}
                                            onChange={e => handleChange(e, i, "morning")}
                                            input={<Input />}
                                        >
                                            <MenuItem value={""}>
                                                <em>None</em>
                                            </MenuItem>
                                            {shift.shifts.map((s, k) => {
                                                return (
                                                    subShift[k].shifts[i].morningCheckbox ?
                                                        // <MenuItem value={[subShift[k].userId, subShift[k].shifts[i].date, i, "morning"]}>{subShift[k].userName}</MenuItem> : null
                                                        // <MenuItem name={subShift[k].userName} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null
                                                        <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Noon</InputLabel>
                                        <Select
                                            // label="lol"
                                            className={classes.select}
                                            fullWidth
                                            // multiple
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={scheduledShifts.shifts[i].noon}
                                            onChange={e => handleChange(e, i, "noon")}
                                            input={<Input />}
                                        >
                                            <MenuItem value={""}>
                                                <em>None</em>
                                            </MenuItem>
                                            {shift.shifts.map((s, k) => {
                                                return (
                                                    subShift[k].shifts[i].noonCheckbox ?
                                                        <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Evening</InputLabel>
                                        <Select
                                            // label="lol"
                                            className={classes.select}
                                            fullWidth
                                            // multiple
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={scheduledShifts.shifts[i].evening}
                                            onChange={e => handleChange(e, i, "evening")}
                                            input={<Input />}
                                        >
                                            <MenuItem value={""}>
                                                <em>None</em>
                                            </MenuItem>
                                            {shift.shifts.map((s, k) => {
                                                return (
                                                    subShift[k].shifts[i].eveningCheckbox ?
                                                        <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Paper>
                            )
                        })}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitScheduledShifts} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    apiUsers: state.users.users,
    apiSubmittedShifts: state.submittedShifts.submittedShifts,
    isLoading: state.submittedShifts.loading,
    error: state.submittedShifts.error,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    fetchSubmittedShifts: () => dispatch(getSubmittedShifts()),
    // addScheduledShifts: (scheduledShiftsForm) => dispatch(addToDbScheduledShifts(scheduledShiftsForm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleShifts);