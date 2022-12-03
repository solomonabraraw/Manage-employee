import React, { useEffect, useState } from "react";
import _ from 'lodash';
//import EmployeeModel, { EmployeeRequest } from "./model//s/EmployeeModel";

import { useDispatch } from "react-redux";
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
//import { getEmployeesRequest } from "../../../actions/EmployeeActions";
import EmployeeModel, { EmployeeRequest } from "../../models/EmployeeModel";
import { getEmployeesRequest } from "../../redux/actions/EmployeeActions";
import EmployeeForm from "../EmployeeForm";
import EmployeeTable from "../EmployeeTable";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        home: {
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 'auto'
        }
    }),
);

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();


    const emptyEmployeeModel: EmployeeModel = {
        _id: '',
    Name: '',
    Date_of_birth:'',
    Gender: '',
    Salary: '',
    skills: []
    };
    
    useEffect(() => {
        const args: EmployeeRequest = {
            name: '',
            skills: [],
        };
        dispatch(getEmployeesRequest(args));
    }, []);

    return (
        <div className={classes.home}>
            <EmployeeForm></EmployeeForm>   
            <h1>Manage Employees</h1>
            <EmployeeTable></EmployeeTable>
        </div>
    );
}
