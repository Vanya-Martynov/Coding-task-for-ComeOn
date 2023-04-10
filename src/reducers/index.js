import { combineReducers } from "redux";
import AuthReducer from "./auth";
import GamesReducer from "./games";
import CategoriesReducer from "./categories";

export default combineReducers({
    AuthReducer,
    GamesReducer,
    CategoriesReducer
});
