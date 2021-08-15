// import * as type from '../types';

// const initialState = {
//     reqShifts: [],
//     loading: false,
//     error: null,
// }

// export default function reqShifts(state = initialState, action) {
//     switch (action.type) {
//         case type.GET_REQ_SHIFT_REQUESTED:
//             return {
//                 ...state,
//                 loading: true,
//             }
//         case type.GET_REQ_SHIFT_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 shifts: action.shifts
//             }
//         case type.GET_REQ_SHIFT_FAILED:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.message,
//             }
//         default:
//             return state
//     }
// }