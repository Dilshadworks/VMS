
import { CHECK_IN, CHECK_OUT, GET_SUPERVISOR } from "../ActionTypes/actiontype";

let iState = {
  superVisorList: [],
  todayCheckOutGuest: {},
};
const reducer = (state = iState, action) => {
  console.log(action.type);
  switch (action.type) {
    case CHECK_IN:
      return {
        ...state,
        todayCheckInGuest: action.payload,
      };
    case CHECK_OUT:
      return {
        ...state,
        todayCheckOutGuest: action.payload,
      };
      case GET_SUPERVISOR:
      return {
        ...state,
        superVisorList: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
