import { combineReducers } from 'redux';
import shifts from './shifts';
import requestShifts from './requestShifts';
import users from './users';

const rootReducer = combineReducers({
    shifts: shifts,
    users: users,
    requestShifts: requestShifts,
});

export default rootReducer;