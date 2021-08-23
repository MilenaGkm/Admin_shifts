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
    const [scheduledShifts, setScheduledShifts] = useState([]);
    const [age, setAge] = React.useState('');


    const handleChange = (event) => {
        console.log("---lol---");
        console.log(event.target.value);
        console.log("---lol---");
        // setAge(event.target.value || '');
    };

    const wantedShift = (value) => {
        return value === true
    }

    const mornin = () => {
        // return subShift.map(shift => shift.shifts)
        console.log(subShift.map(shift => shift.shifts));
    }


    // console.log(mornin);

    useEffect(() => {
        fetchSubmittedShifts()
    }, [])

    useEffect(() => {
        // setSubShift(apiSubmittedShifts.map(sub => sub.shifts))
        setSubShift(apiSubmittedShifts)
    }, [apiSubmittedShifts])

    useEffect(() => {
        (async () => {
            const shift = await { ...subShift[0] }.shifts.map(shift => shift.date)
            setShiftsDate(shift)
        })()
        // setSubShift(apiSubmittedShifts.map(sub => sub.shifts))
        // setSubShift(apiSubmittedShifts)
    }, [subShift])

    // const dates = apiSubmittedShifts.map(sub => sub.shifts).map(shift => shift.date)
    const dates = apiSubmittedShifts[0]

    // const morninShift = subShift.filter(shift => shift.shifts.filter(s => s.morningCheckbox === true)).map(shift => shift.userId)
    // // const morninShift = subShift.map(shift => shift.shifts.filter(s => s.morningCheckbox === true))
    // const noonShift = subShift.map(shift => shift.shifts.filter(s => s.noonCheckbox === true))
    // // const eveShift = subShift.map(shift => shift.shifts.filter(s => s.eveningCheckbox === true))
    // const eveShift = subShift.find(shift => shift.shifts.map(s => s.eveningCheckbox === true).map(shift => shift.userId))
    // console.log(morninShift);
    // console.log(noonShift);
    // console.log(eveShift);

    const submitScheduledShifts = () => {
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

                                <Paper className={classes.paper}>
                                    <FormLabel component="legend">{shiftsDate[i]}</FormLabel>
                                    {shift.shifts.map((s, k) => {
                                        // s.eveningCheckbox ? console.log(apiUsers.find(user => user._id == shift.userId).username) : console.log("no");
                                        return (

                                            <FormControl variant="outlined" className={classes.formControl}>
                                                {/* <DialogTitle>{s.date}</DialogTitle> */}
                                                {/* <FormGroup row > */}
                                                <InputLabel id="demo-dialog-select-label">{k == 0 ? "Morning" : k == 1 ? "Noon" : "Evening"} </InputLabel>
                                                <Select
                                                    // label="lol"
                                                    className={classes.select}
                                                    fullWidth
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={age}
                                                    onChange={handleChange}
                                                // input={<Input />}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                {/* </FormGroup> */}
                                            </FormControl>
                                        )
                                    })}
                                </Paper>
                            )
                        })}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
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