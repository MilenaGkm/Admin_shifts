import { combineReducers } from 'redux';
import shifts from './shifts';

const rootReducer = combineReducers({
    shifts: shifts,
});

export default rootReducer;