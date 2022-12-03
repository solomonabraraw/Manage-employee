import { get } from 'lodash';
import { createSelector } from 'reselect';
import { AppState } from '../reducer/rootReducer';

const entity = 'entities.Employee';

const getEmployeesLoadingState = (state: AppState) => get(state, `${entity}.isGetEmployeesLoading`, false);
const getEmployeesState = (state:  AppState) => get(state, `${entity}.data`, []);
const getEmployeesErrorState = (state: AppState) => get(state, `${entity}.getEmployeesError`);
export const isGetEmployeesLoading = createSelector(getEmployeesLoadingState, (isLoading:any) => isLoading);
export const getEmployees = createSelector(getEmployeesState, (Employees:any) => Employees);
export const getEmployeesError = createSelector(getEmployeesErrorState, (error:any) => error);

const insertEmployeeLoadingState = (state: AppState) => get(state, `${entity}.isInsertEmployeeLoading`, false);
const insertEmployeeErrorState = (state: AppState) => get(state, `${entity}.insertEmployeeError`);
export const isInsertEmployeeLoading = createSelector(insertEmployeeLoadingState, (isLoading:any) => isLoading);
export const insertEmployeeError = createSelector(insertEmployeeErrorState, (error:any) => error);

const updateEmployeeLoadingState = (state: AppState) => get(state, `${entity}.isUdpateEmployeeLoading`, false);
const updateEmployeeErrorState = (state: AppState) => get(state, `${entity}.updateEmployeeError`);
export const isUpdateEmployeeLoading = createSelector(updateEmployeeLoadingState, (isLoading:any) => isLoading);
export const updateEmployeeError = createSelector(updateEmployeeErrorState, (error:any) => error);

const deleteEmployeeLoadingState = (state: AppState) => get(state, `${entity}.isDeleteEmployeeLoading`, false);
const deleteEmployeeErrorState = (state: AppState) => get(state, `${entity}.deleteEmployeeError`);
export const isDeleteEmployeeLoading = createSelector(deleteEmployeeLoadingState, (isLoading:any) => isLoading);
export const deleteEmployeeError = createSelector(deleteEmployeeErrorState, (error:any) => error);

const isAddSkillsLoadingState = (state: AppState) => get(state, `${entity}.isAddSkillsLoading`, false);
const addSkillErrorState = (state: AppState) => get(state, `${entity}.addSkillsError`);
export const isAddSkillsLoading = createSelector(isAddSkillsLoadingState, (isLoading:any) => isLoading);
export const addSkillsError = createSelector(addSkillErrorState, (error:any) => error);
