import * as type from '../types';

const initialState = {
    scheduledShifts: [],
    loading: false,
    error: null,
}

export default function scheduledShifts(state = initialState, action) {
    switch (action.type) {
        case type.GET_SCHEDULED_SHIFTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_SCHEDULED_SHIFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                scheduledShifts: action.scheduledShifts
            }
        case type.GET_SCHEDULED_SHIFTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}