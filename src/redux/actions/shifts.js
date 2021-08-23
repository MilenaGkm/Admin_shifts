import * as type from '../types';

export function getShifts(shifts) {
    return {
        type: type.GET_SHIFTS_REQUESTED,
        payload: shifts,
    }
}

export function getSubmittedShifts(submittedShifts) {
    return {
        type: type.GET_SUB_SHIFTS_REQUESTED,
        payload: submittedShifts,
    }
}

export function getUsers(users) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}

export function addToDbReqShift(reqShiftForm) {
    return {
        type: type.ADD_REQ_SHIFT_REQUESTED,
        payload: reqShiftForm,
    }
}