import {Dispatch} from "redux";
import {USER_INFO_FAIL, USER_INFO_LOADING, USER_INFO_SUCCESS, userDispatchTypes } from "./UserActionType";
import {USER_AGE_LOADING , USER_AGE_FAIL , USER_AGE_SUCCESS , userDispatchAge } from "./UserAgeType";
import axios from "axios";

export const GetUserInfo = (userCount: number , nat: string) => async (dispatch: Dispatch<userDispatchTypes>) => {
  try {
    dispatch({
      type: USER_INFO_LOADING
    })
    const res = await axios.get(`https://randomuser.me/api/?results=${userCount}&nat=${nat}`);

    dispatch({
      type: USER_INFO_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: USER_INFO_FAIL
    })
  }
};

export const GetUserAge = (nam1 : string , nam2:string , nam3:string) => async (dispatch: Dispatch<userDispatchAge>) => {
    try {
      dispatch({
        type: USER_AGE_LOADING
      })
      const res = await axios.get(`https://api.agify.io?name[]=${nam1}&name[]=${nam2}&name[]=${nam3}`);
  
      dispatch({
        type: USER_AGE_SUCCESS,
        payload: res.data
      })
  
    } catch(e) {
      dispatch({
        type: USER_AGE_FAIL
      })
    }
  };