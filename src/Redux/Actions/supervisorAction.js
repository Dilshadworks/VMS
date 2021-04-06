import { CHECK_OUT , GET_SUPERVISOR } from "../ActionTypes/actiontype";

export const supervisorStats = () => {
  return (dispatch) => {
    fetch(
      "http://vmslocal:61966/api/SupervisorDashboard/GetSupervisorsStatsByDay"
    )
      .then((response) => response.json())
      .then((res) => {
        dispatch({ type: CHECK_OUT, payload: res });
      });
  };
};

// export const getSupervisorList = () => {
//   return (dispatch) => {
//     fetch("http://vmslocal:61966/api/Employee/GetEmployeesList")
//       .then((response) => response.json())
//       .then((res) => {
//         console.log(res)
//        return dispatch({ type: GET_SUPERVISOR, payload: res });
//       });
//   };
// };
