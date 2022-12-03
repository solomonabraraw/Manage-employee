import { Employee_ACTIONS } from "../actions/EmployeeActions";


const initialState = {
    isGetEmployeesLoading: false,
    data: [],
    getEmployeesError: null,
    isInsertEmployeeLoading: false,
    insertEmployeeError: null,
    isUdpateEmployeeLoading: false,
    updateEmployeeError: null,
    isDeleteEmployeeLoading: false,
    deleteEmployeeError: null,
};

export default (state = initialState, action:any) => {
    switch(action.type) {
        case Employee_ACTIONS.GET_EmployeeS_REQUEST:
            return {
                ...state,
                isGetEmployeesLoading: true,
                getEmployeesError: null,
            };
        case Employee_ACTIONS.GET_EmployeeS_SUCCESS:
            return {
                ...state,
                isGetEmployeesLoading: false,
                data: action.payload,
                getEmployeesError: null,
            }; 
        case Employee_ACTIONS.GET_EmployeeS_ERROR:
            return {
                ...state,
                isGetEmployeesLoading: false,
                data: [],
                getEmployeesError: action.payload.error,
            };
        // INSERT
        case Employee_ACTIONS.INSERT_Employee_REQUEST:
            return {
                ...state,
                isInsertEmployeeLoading: true,
                insertEmployeeError: null,
            };
        case Employee_ACTIONS.INSERT_Employee_ERROR:
            return {
                ...state,
                isInsertEmployeeLoading: false,
                insertEmployeeError: action.payload.error,
            };
        // UPDATE
        case Employee_ACTIONS.UPDATE_Employee_REQUEST:
            return {
                ...state,
                isUdpateEmployeeLoading: true,
                updateEmployeeError: null,
            };
        case Employee_ACTIONS.UPDATE_Employee_ERROR:
            return {
                ...state,
                isUdpateEmployeeLoading: false,
                updateEmployeeError: action.payload.error,
            };
        // DELETE
        case Employee_ACTIONS.DELETE_Employee_REQUEST:
            return {
                ...state,
                isDeleteEmployeeLoading: true,
                deleteEmployeeError: null,
            }; 
        case Employee_ACTIONS.DELETE_Employee_ERROR:
            return {
                ...state,
                isDeleteEmployeeLoading: false,
                deleteEmployeeError: action.payload.error,
            };
        default: 
            return {
                ...initialState,
            }
    }
}