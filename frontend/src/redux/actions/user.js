import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// what is action in redux ?
// Trigger an event , and call reducer
// action is a plain object that contains information about an event that has occurred
// action is the only way to change the state in redux
// action is the only way to send data from the application to the store

// dispatch :- active action , (action trigger)
