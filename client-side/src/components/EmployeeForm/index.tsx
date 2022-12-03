import {   Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useState } from "react";
//import {Jumbotron } from "react-bootstrap";
//import EmployeeModel from "../EmployeeModel";
import { useSelector } from "react-redux";
import { isEmpty } from 'lodash';
import { getEmployees } from "../../redux/selector/EmployeeSelector";
import { insertEmployeeRequest } from "../../redux/actions/EmployeeActions";
import { useDispatch } from "react-redux";
import EmployeeModel from '../../models/EmployeeModel';
//import {StyledTable, Input,Icon, Container} from './components/styles/styled'
import { Button , InputGroup, InputLabel, InputField } from '../styles/styled';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
           
            width: '50%',
            marginBottom: '20px',
        },
        jumbotron: {
            height: '30px',
            width: '50%',
            display: 'grid',
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'lightblue',
            marginBottom: '10px',
        },
        form: {
      alignItems:'center'
            
        },
        infoBox: {
            display: 'flex',
            justifyContent: 'center',
            verticalAlign: 'center'
        },
        labelStyle: {
            fontSize: '32px',
            fontWeight: 'bold',
            verticalAlign: 'center'
        },
        insertBtn: {
            marginLeft: '20px'
        }
    }),
);

function JumbotronHeader(props:any) {
    
    return (
        
   
            <h1>Employees Registration</h1>
      
    );
}

export default function EmployeeForm(props:any) {
    const Employees = useSelector(getEmployees);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [Name, setName ] = useState('');
    const [Salary, setSalary] = useState('');
    const [Gender, setGender] = useState('');
    const [Date_of_birth, setDateOfBirth] = useState('');

    
    async function insertEmployeeAsync() {
        const request: EmployeeModel = {
            Name,
            Gender,
            Salary,
            Date_of_birth,
            skills: [],
            
        };
        dispatch(insertEmployeeRequest(request));
    }
   
    return (
        <div className={classes.header}>
            <JumbotronHeader totalEmployees={Employees.length}/>
            <form 
                className={classes.form}
                noValidate 
                autoComplete="off">
               <InputGroup>
      <InputField
                    id="Name"  
                    variant="outlined" 
                    onChange={(e: any)=> setName(e.target.value)} />
                    <InputLabel>Name</InputLabel>
                    </InputGroup>
                   <InputGroup>
      <InputField
                        id="Date_of_birth" 
                        label="Date_of_birth"
                        type="date" 
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e: any) => setDateOfBirth(e.target.value)}/>
                        {/* <InputLabel>Date_of_birth</InputLabel> */}
                        </InputGroup>
               <InputGroup>
      <InputField
                    id="Gender" 
                    label="Gender" 
                    variant="outlined"
                    onChange={(e: any) => setGender(e.target.value)}/>
                    <InputLabel>Gender</InputLabel>
                    </InputGroup>
               <InputGroup>
      <InputField
                    id="Salary" 
                    type="number" 
                    label="Salary" 
                    variant="outlined"
                    onChange={(e: any) => setSalary(e.target.value)}/>
                    <InputLabel>Salary</InputLabel>
                    </InputGroup>
                <Button 
                    id="insertBtn"
                    className={classes.insertBtn}
                    variant="contained" 
                    primary
                    onClick={() => insertEmployeeAsync()}>
                    Save
                </Button>
            </form>
        </div>
    );
}
