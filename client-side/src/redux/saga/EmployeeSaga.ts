import { all, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import EmployeeModel, { EmployeeRequest } from "../../models/EmployeeModel";

//import { formatDate } from '@utils/dateUtils';
import { get } from 'lodash';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { deleteEmployeeError, getEmployeesError, getEmployeesRequest, getEmployeesSuccess, insertEmployeeError, Employee_ACTIONS, updateEmployeeError } from "../actions/EmployeeActions";



// AXIOS
const baseUrl = 'http://localhost:5000/users';
const headers = { 
    'Content-Type': 'application/json',
    mode: 'cors',
    credentials: 'include'
};

const axiosClient = axios;
axiosClient.defaults.baseURL = baseUrl;
//axiosClient.defaults.headers = headers;

const getEmployeesAsync = (body: EmployeeRequest) => {
    return axiosClient.get<EmployeeModel[]>(
        '/Employee/list'
    );
}

function* getEmployeesSaga(action:any):any {
    try {
        const args:any = get(action, 'args', {})
        const response = yield call(getEmployeesAsync, args);
        yield put(getEmployeesSuccess(response.data));
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(getEmployeesError({error}));
    }
}

const insertEmployeesAsync = async (body: EmployeeModel) => {
    return axiosClient.post(
        '/Employee',
        body
    )
}

function* insertEmployeeSaga(action:any) {
    try {
        const EmployeeModel = get(action, 'args');
        if (EmployeeModel == null) {
            throw new Error('Request is null');
        }
        yield call(insertEmployeesAsync, EmployeeModel);
       
        const getAction = {
            type: Employee_ACTIONS.GET_EmployeeS_REQUEST,
            args: {},
        };
        yield call(getEmployeesSaga, getAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(insertEmployeeError({error}));
    }
};

const updateEmployeeAsync = async (body: EmployeeModel) => {
    return axiosClient.put(
        '/Employee/update/'+body._id,
        body
    );
};

/**
 * 
 * @param action {type, payload: EmployeeModel}
 */
function* updateEmployeeSaga(action:any) {
    try {
        const EmployeeModel = get(action, 'args');
        if (EmployeeModel == null) {
            throw new Error('Request is null');
        };
        yield call(updateEmployeeAsync, EmployeeModel);
       
        const getEmployeeRequestAction = getEmployeesRequest({});
        yield call(getEmployeesSaga, getEmployeeRequestAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(updateEmployeeError({error}));
    }
};

const deleteEmployeesAsync = async (ids: string[]) => {
    return axiosClient.delete(
        '/Employee/inactive/'+
        ids
    );
};

/**
 * 
 * @param action {type, payload: string[]}
 */
 function* deleteEmployeeSaga(action:any) {
    try {
        const ids = get(action, 'args');
        if (isEmpty(ids)) {
            throw new Error('Request is null');
        };
        yield call(deleteEmployeesAsync, ids);
       
        const getEmployeeRequestAction = getEmployeesRequest({});
        yield call(getEmployeesSaga, getEmployeeRequestAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(deleteEmployeeError({error}));
    }
};

function* EmployeeSaga() {
    yield all([
        takeLatest(Employee_ACTIONS.GET_EmployeeS_REQUEST, getEmployeesSaga),
        takeLeading(Employee_ACTIONS.INSERT_Employee_REQUEST, insertEmployeeSaga),
        takeLeading(Employee_ACTIONS.UPDATE_Employee_REQUEST, updateEmployeeSaga),
        takeLeading(Employee_ACTIONS.DELETE_Employee_REQUEST, deleteEmployeeSaga),
    ]);
}

export default EmployeeSaga;