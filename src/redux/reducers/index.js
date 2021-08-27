import { combineReducers } from 'redux';
import shifts from './shifts';
import requestShifts from './requestShifts';
import submittedShifts from './submittedShifts';
import scheduledShifts from './scheduledShifts';
import users from './users';

const rootReducer = combineReducers({
    shifts: shifts,
    users: users,
    requestShifts: requestShifts,
    submittedShifts: submittedShifts,
    scheduledShifts: scheduledShifts,
});

export default rootReducer;