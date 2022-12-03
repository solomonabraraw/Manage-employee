import EmployeeModel, { EmployeeRequest } from "../../models/EmployeeModel";


// TYPES
export enum Employee_ACTIONS {
    GET_EmployeeS_REQUEST = 'GET_EmployeeS_REQUEST',
    GET_EmployeeS_SUCCESS = 'GET_EmployeeS_SUCCESS',
    GET_EmployeeS_ERROR = 'GET_EmployeeS_ERROR',
    INSERT_Employee_REQUEST = 'INSERT_Employee_REQUEST',
    INSERT_Employee_SUCCESS = 'INSERT_Employee_SUCCESS',
    INSERT_Employee_ERROR = 'INSERT_Employee_ERROR',
    UPDATE_Employee_REQUEST = 'UPDATE_Employee_REQUEST',
    UPDATE_Employee_SUCCESS = 'UPDATE_Employee_SUCCESS',
    UPDATE_Employee_ERROR = 'UPDATE_Employee_ERROR',
    DELETE_Employee_REQUEST = 'DELETE_Employee_REQUEST',
    DELETE_Employee_SUCCESS = 'DELETE_Employee_SUCCESS',
    DELETE_Employee_ERROR = 'DELETE_Employee_ERROR',
    ADD_SKILLS_REQUEST = 'ADD_SKILLS_REQUEST',
    ADD_SKILLS_SUCCESS = 'ADD_SKILLS_SUCCESS',
    ADD_SKILLS_ERROR = 'ADD_SKILLS_ERROR',
};

interface LoadingState {
  isLoading: boolean,
}

interface CommonErrorPayload {
  error?: {
      message: string,
      type: string,
  },
}

// ACTION RETURN TYPES
export interface GetEmployeesRequest {
  type: typeof Employee_ACTIONS.GET_EmployeeS_REQUEST;
  args: EmployeeRequest,
};

export interface GetEmployeesSuccess {
  type: typeof Employee_ACTIONS.GET_EmployeeS_SUCCESS;
  payload: EmployeeModel[],
};

export interface GetEmployeesError {
  type: typeof Employee_ACTIONS.GET_EmployeeS_ERROR;
  payload: CommonErrorPayload,
};

export interface InsertEmployeeRequest {
  type: typeof Employee_ACTIONS.INSERT_Employee_REQUEST;
  args: EmployeeModel,
}

export interface InsertEmployeeSuccess {
  type: typeof Employee_ACTIONS.INSERT_Employee_SUCCESS,
};

export interface InsertEmployeeError {
  type: typeof Employee_ACTIONS.INSERT_Employee_ERROR;
  payload: CommonErrorPayload,
};

export interface UpdateEmployeeRequest {
  type: typeof Employee_ACTIONS.UPDATE_Employee_REQUEST;
  args: EmployeeModel,
};

export interface UpdateEmployeeSuccess {
  type: typeof Employee_ACTIONS.UPDATE_Employee_SUCCESS,
};

export interface UpdateEmployeeError {
  type: typeof Employee_ACTIONS.UPDATE_Employee_ERROR;
  payload: CommonErrorPayload,
};

export interface DeleteEmployeeRequest {
  type: typeof Employee_ACTIONS.DELETE_Employee_REQUEST;
  args: string[],
};

export interface DeleteEmployeeSuccess {
  type: typeof Employee_ACTIONS.DELETE_Employee_SUCCESS,
};

export interface DeleteEmployeeError {
  type: typeof Employee_ACTIONS.DELETE_Employee_ERROR;
  payload: CommonErrorPayload,
};

// ACTIONS
export const getEmployeesRequest = (args: EmployeeRequest): GetEmployeesRequest  => ({
  type: Employee_ACTIONS.GET_EmployeeS_REQUEST,
  args,
}); 

export const getEmployeesSuccess = (payload: EmployeeModel[]): GetEmployeesSuccess => ({
  type: Employee_ACTIONS.GET_EmployeeS_SUCCESS,
  payload,
});

export const getEmployeesError = (payload: CommonErrorPayload): GetEmployeesError => ({
  type: Employee_ACTIONS.GET_EmployeeS_ERROR,
  payload,
});

export const insertEmployeeRequest = (args: EmployeeModel): InsertEmployeeRequest => ({
  type: Employee_ACTIONS.INSERT_Employee_REQUEST,
  args,
});

export const insertEmployeeSuccess = (): InsertEmployeeSuccess => ({
  type: Employee_ACTIONS.INSERT_Employee_SUCCESS,
});

export const insertEmployeeError = (payload: CommonErrorPayload): InsertEmployeeError => ({
  type: Employee_ACTIONS.INSERT_Employee_ERROR,
  payload,
});

export const updateEmployeeRequest = (args: EmployeeModel): UpdateEmployeeRequest => ({
  type: Employee_ACTIONS.UPDATE_Employee_REQUEST,
  args,
});

export const updateEmployeeSuccess = (): UpdateEmployeeSuccess => ({
  type: Employee_ACTIONS.UPDATE_Employee_SUCCESS,
});

export const updateEmployeeError = (payload: CommonErrorPayload): UpdateEmployeeError => ({
  type: Employee_ACTIONS.UPDATE_Employee_ERROR,
  payload,
});

export const deleteEmployeeRequest = (args: string[]): DeleteEmployeeRequest => ({
  type: Employee_ACTIONS.DELETE_Employee_REQUEST,
  args,
});

export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
  type: Employee_ACTIONS.DELETE_Employee_SUCCESS,
});

export const deleteEmployeeError = (payload: CommonErrorPayload): DeleteEmployeeError => ({
  type: Employee_ACTIONS.DELETE_Employee_ERROR,
  payload,
});