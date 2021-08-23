import { combineReducers } from 'redux';
import shifts from './shifts';
import requestShifts from './requestShifts';
import submittedShifts from './submittedShifts';
import users from './users';

const rootReducer = combineReducers({
    shifts: shifts,
    users: users,
    requestShifts: requestShifts,
    submittedShifts: submittedShifts,
});

export default rootReducer;