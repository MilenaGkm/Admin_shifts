import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { getUsers, addToDbReqShift } from '../../redux/actions/shifts';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
var eachDayOfInterval = require('date-fns/eachDayOfInterval')

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginBottom: '20px',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    msgBtn: {
        padding: '28px',
        justifyContent: 'space-between',

    },
    textField: {
        marginTop: '18px',
        marginBottom: '15px',
    },
    formControl: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        // marginTop: '5px',
        // marginBottom: '15px',
    },
    paper: {
        marginTop: '5px',
        marginBottom: '15px',
        // flex-direction: column
        // display: "flex",
        // flexWrap: "wrap",
        // justifyontent: "space-around",
    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        // flex-direction: column
        justifyontent: "space-around",
    },
    cb: {
        display: "flex",
        flexWrap: "wrap",
        // flex-direction: column
        justifyontent: "space-around",
    },
}));

// export default function NewRequestShifts(props) {
const NewRequestShifts = ({ apiUsers, isLoading, error, fetchUsers, addRequestShift }) => {

    const classes = useStyles();
    const classes2 = useStyles2();
    const [open, setOpen] = useState(false);
    const [dates, setDates] = useState({ from: new Date(), to: new Date() });
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [generateShiftPeriod, setGenerateShiftPeriod] = useState(false);
    const [checkbox, setCheckbox] = useState([]);

    function disableWeekends(date) {
        return date.getDay() === 6;
        // console.log(date.getDay() === 0 || date.getDay() === 6);
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    const handleSubmitReqShift = reqShiftForm => {
        // reqShiftForm.reciever_ids = reqShiftForm.reciever_ids.map(user => user._id)
        // addRequestShift(reqShiftForm)
        console.log(reqShiftForm);
    }

    useEffect(() => {
        const numberOfDates = dates.to.getDate() - dates.from.getDate();
       
        const checkboxes = []
        const t = new Date(dates.from)
        for (let i = 0; i < numberOfDates + 1; i++) {
            console.log(t.getDay());
            i > 0 ? t.setDate(t.getDate() + 1) : null;
            t.getDay() === 6 ? t.setDate(t.getDate() + 1) && i++ : null;
            if (t.getDay() === 5) {
                const checkboxesToAdd = {
                    date: t.toLocaleDateString(),
                    morningCheckbox: false,
                    noonCheckbox: false,
                    eveningCheckbox: "disabled",
                }
                checkboxes.push(checkboxesToAdd)
            } else {
                const checkboxesToAdd = {
                    date: t.toLocaleDateString(),
                    morningCheckbox: false,
                    noonCheckbox: false,
                    eveningCheckbox: false,
                }
                checkboxes.push(checkboxesToAdd)
            }
        }
        setCheckbox(checkboxes)
    }, [dates])

    const handleDateChange = (date, name) => {
        console.log(date.getDay());
        console.log(name);
        setDates({ ...dates, [name]: date })
    };

    const onSubmit = () => {
        // props.submitMsg(msgForm)
        // setOpen(false);
    };

    const handleClickOpen = () => {
        // updateForm("reciever_ids", props.users)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (i) => {
        // let handleRecievers = [...msgForm.reciever_ids]
        // handleRecievers.splice(i, 1)
        // updateForm("reciever_ids", handleRecievers)
    };

    const handleClick = () => {
        console.log('You clicked the Chip.');
    };
    // console.log(apiUsers);

    const handleCheckboxChange = (event) => {
        console.log([event.target.name]);
        console.log("lol");
        // setState([ ...checkbox, [event.target.name] = event.target.checked[1] ]);
    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                New Shift Req
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                margin="dense"
                                id="date-picker-dialog"
                                label="From"
                                format="dd/MM/yyyy"
                                value={dates.from}
                                // name="fromDate"
                                // onChange={handleFromDateChange}
                                // onChange={handleDateChange}
                                onChange={e => handleDateChange(e, "from")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                // disabled={disableWeekends}
                                shouldDisableDate={disableWeekends}
                            // size="small"
                            />
                            <KeyboardDatePicker
                                // size="small"
                                margin="dense"
                                id="date-picker-dialog2"
                                label="To"
                                format="dd/MM/yyyy"
                                value={dates.to}
                                // name="toDate"
                                // onChange={handleToDateChange}
                                onChange={e => handleDateChange(e, "to")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                shouldDisableDate={disableWeekends}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <DialogContentText>Recievers:</DialogContentText>
                    <Paper component="ul" className={classes.root}>
                        {apiUsers.map((user, i) => {
                            return (
                                <li key={i}>
                                    <Chip
                                        variant="outlined"
                                        // avatar={msgForm.recievers ? <Avatar>{user.username.charAt(0)}</Avatar> : <Avatar>{}</Avatar>}
                                        label={user.username}
                                        onDelete={() => handleDelete(i)}
                                    />
                                </li>
                            );
                        })}
                    </Paper>
                    {/* MuiFormGroup-root makeStyles-cb-6 MuiFormGroup-row */}
                    {checkbox.map((cb, i) => {
                        return (
                            // <FormControl className={classes.formControl}>
                            <FormControl key={i} fullWidth >
                                <FormLabel component="legend">{cb.date}</FormLabel>
                                <Paper className={classes.paper}>
                                    {/* <DialogContentText>lol</DialogContentText> */}

                                    <FormGroup row className={classes.formControl}>
                                        <FormControlLabel
                                            control={<Checkbox checked={cb.morningCheckbox} onChange={handleCheckboxChange} color="primary" />}
                                            label="Morning"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={cb.noonCheckbox} onChange={handleCheckboxChange} color="primary" />}
                                            label="Noon"
                                        />
                                        {cb.eveningCheckbox === "disabled" ?
                                            <FormControlLabel disabled control={<Checkbox />} label="Evening" />
                                            :
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={cb.eveningCheckbox} onChange={handleCheckboxChange} color="primary" />}
                                                label="Evening"
                                            />
                                        }
                                    </FormGroup>
                                </Paper>

                            </FormControl>

                        )
                    })}

                    {/* <FormGroup>
                        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                    </FormGroup> */}

                </DialogContent>
                <DialogActions className={classes.msgBtn}>
                    <Button className="msgBtn" onClick={handleClose} color="primary" >
                        Cancel
                    </Button>
                    <Button className="msgBtn" onClick={handleSubmitReqShift} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    // apiMsgs: state.msgs.msgs,
    // isLoading: state.msgs.loading,
    // error: state.msgs.error,
    apiUsers: state.users.users,
    isLoading: state.users.loading,
    error: state.users.error
})

const mapDispatchToProps = (dispatch) => ({
    // fetchMsgs: () => dispatch(getMsgs()),
    fetchUsers: () => dispatch(getUsers()),
    addRequestShift: (reqShiftForm) => dispatch(addToDbReqShift(reqShiftForm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRequestShifts);