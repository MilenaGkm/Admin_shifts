import * as type from '../types';

export function getShifts(shifts) {
    return {
        type: type.GET_SHIFTS_REQUESTED,
        payload: shifts,
    }
}