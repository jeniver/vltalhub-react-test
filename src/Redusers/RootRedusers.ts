import {combineReducers} from "redux";
import userRedusers from "./UserRedusers";
import userAgeRedusers from "./UserAgeRedusers"

const RootReducer = combineReducers({
  userinfo: userRedusers,
  userAge:userAgeRedusers
});

export default RootReducer