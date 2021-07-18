import * as type from '../types';

const initialState = {
    shifts: [],
    loading: false,
    error: null,
}

export default function shifts(state = initialState, action) {
    switch (action.type) {
        case type.GET_SHIFTS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_SHIFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                shifts: action.shifts
            }
        case type.GET_SHIFTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}