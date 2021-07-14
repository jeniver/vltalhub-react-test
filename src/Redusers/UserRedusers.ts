import {
  USER_INFO_FAIL,
  USER_INFO_LOADING,
  USER_INFO_SUCCESS,
  userDispatchTypes,
  UserType,

} from "../Action/UserActionType";

interface DefaultStateI {
  loading: boolean;
  userinfo?: UserType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const userReducer = (
  state: DefaultStateI = defaultState,
  action: userDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case USER_INFO_FAIL:
      return {
        loading: false,
      };
    case USER_INFO_LOADING:
      return {
        loading: true,
      };
    case USER_INFO_SUCCESS:
      return {
        loading: false,
        userinfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
