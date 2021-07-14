import {
    USER_AGE_FAIL,
    USER_AGE_LOADING,
    USER_AGE_SUCCESS,
    userDispatchAge,
    Age
  } from "../Action/UserAgeType";
  
  interface DefaultStateI {
    loading: boolean;
    userAge?:Age;
  }
  
  const defaultState: DefaultStateI = {
    loading: false,
  };
  
  const userReducer = (
    state: DefaultStateI = defaultState,
    action: userDispatchAge
  ): DefaultStateI => {
    switch (action.type) {
      case USER_AGE_FAIL:
        return {
          loading: false,
        };
      case USER_AGE_LOADING:
        return {
          loading: true,
        };
        case USER_AGE_SUCCESS:
        return {
          loading: false,
          userAge: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  