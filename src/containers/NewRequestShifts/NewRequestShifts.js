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

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
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
    }
}));

// export default function NewRequestShifts(props) {
const NewRequestShifts = ({ apiUsers, isLoading, error, fetchUsers, addRequestShift }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [fromDate, setFromDate] = useState(new Date().toLocaleString());
    const [toDate, setToDate] = useState(new Date().toLocaleString());

    // const [msgForm, setMsgForm] = useState({ sender_id: "60e5e3544ea83558e0482710", reciever_ids: [], body: "", subject: "" });

    // const updateForm = (key, value) => setMsgForm({ ...msgForm, [key]: value })

    // const handleDateChange = (key, value) => setSelectedDate({...selectedDate, [key]: value})

    const handleSubmitReqShift = reqShiftForm => {
        // reqShiftForm.reciever_ids = reqShiftForm.reciever_ids.map(user => user._id)
        // addRequestShift(reqShiftForm)
        console.log(reqShiftForm);
    }

    const handleFromDateChange = date => {
        // props.submitMsg(msgForm)
        // console.log(key);
        // console.log(date.toLocaleString());
        setFromDate(date.toLocaleDateString())
        // setOpen(false);
    };
    const handleToDateChange = date => {
        // props.submitMsg(msgForm)
        // console.log(key);
        setToDate(date)
        console.log(date.toLocaleDateString());
        // setOpen(false);
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
    // console.log(selectedDate);


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                New Shift Req
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>Recievers:</DialogContentText>
                    {/* <Paper component="ul" className={classes.root}>
                        {msgForm.reciever_ids.map((user, i) => {
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
                    </Paper> */}
                    {/* <TextField
                        // className={classes.textField}
                        autoFocus
                        margin="dense"
                        id="textFieldSubject"
                        label="dateFrom"
                        name="dateFrom"
                        fullWidth
                        multiline
                        rows={2}
                        type="date"
                        // value={msgForm.subject}
                        onChange={e => updateForm(e.target.name, e.target.value)}
                        variant="outlined"
                    /> */}
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                            margin="dense"
                            id="date-picker-dialog"
                            label="From"
                            format="dd/MM/yyyy"
                            value={fromDate}
                            // name="from"
                            onChange={handleFromDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            // size="small"
                            />

                        <KeyboardDatePicker
                            // size="small"
                            margin="dense"
                            id="date-picker-dialog"
                            label="To"
                            format="dd/MM/yyyy"
                            value={toDate}
                            // name="to"
                            onChange={handleToDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField
                        className={classes.textField}
                        autoFocus
                        margin="dense"
                        id="textFieldSubject"
                        label="Subject"
                        name="subject"
                        fullWidth
                        multiline
                        rows={2}
                        // value={msgForm.subject}
                        onChange={e => updateForm(e.target.name, e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        margin="normal"
                        id="textFieldBody"
                        label="Body"
                        name="body"
                        fullWidth
                        multiline
                        rows={6}
                        // value={msgForm.body}
                        onChange={e => updateForm(e.target.name, e.target.value)}
                        variant="outlined"
                    />
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