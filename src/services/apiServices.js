const reqShiftsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/requested-Shifts` : 'http://localhost:3000/requested-Shifts';
const subShiftsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/submitted-Shifts` : 'http://localhost:3000/submitted-Shifts';
const scheduledShiftsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/scheduled-Shifts` : 'http://localhost:3000/scheduled-Shifts';
const usersApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/users` : 'http://localhost:3000/users';
// const msgsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/msgs` : 'http://localhost:3000/msgs';

export function getUsersApi() {
    return fetch(usersApi, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

export function getSubmittedShifts() {
    return fetch(subShiftsApi, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

export function getScheduledShifts() {
    return fetch(scheduledShiftsApi, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

export function postReqShiftsApi(ReqShiftToAdd) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ReqShiftToAdd)
    };
    return fetch(reqShiftsApi, requestOptions).catch((error) => { throw error })
}

export function postScheduledShiftsApi(ScheduledShiftsToAdd) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ScheduledShiftsToAdd)
    };
    return fetch(scheduledShiftsApi, requestOptions).catch((error) => { throw error })
}
