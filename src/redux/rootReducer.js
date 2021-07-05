import { combineReducers } from "redux";
import { countryReducer } from "./cardReducer";
import {appReducer} from "./appReducer"

export const rootReducer = combineReducers({
    card: countryReducer,
    app: appReducer
})
