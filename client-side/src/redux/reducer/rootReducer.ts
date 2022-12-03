import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";

const rootReducer = combineReducers({
    entities: combineReducers({
        Employee: EmployeeReducer,
    }),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;