import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { createStyles, makeStyles } from '@mui/styles';
import { useState } from "react";
import { updateEmployeeRequest } from "../../redux/actions/EmployeeActions";
// import EmployeeModel from "../../models/EmployeeModel";
import {  Theme } from "@mui/material";
import { Button, InputField, InputGroup } from "../styles/styled";
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
          
            justifyContent: 'center'
        },
        infoBox: {
         
            justifyContent: 'center',
            verticalAlign: 'center'
        },
        labelStyle: {
            fontSize: '15px',
            fontWeight: 'bold',
            verticalAlign: 'center'
        },
        insertBtn: {
            marginLeft: '10px'
        }
    }),
);
export function EditUser() {
  const { pathname } = useLocation();
  const userId = pathname.substring(pathname.lastIndexOf('/') + 1)
 console.log('aaaaaaaaa',pathname.substring(pathname.lastIndexOf('/') + 1));
  const user = useSelector((state:any) =>
    state.entities.Employee.data.find((user:any) => user._id === userId)
  );

  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [Name, setName ] = useState(user.Name);
  const [Salary, setSalary] = useState(user.Salary);
  const [Gender, setGender] = useState(user.Gender);
  const [Date_of_birth, setDateOfBirth] = useState(user.Date_of_birth);
  const [_id, set_id] = useState(user._id);
  const [error, setError] = useState(null);

//   const handleName = (e:any) => setName(e.target.value);
//   const handleSalary = (e:any) => setSalary(e.target.value);
//   const handleGender = (e:any) => setGender(e.target.value);
//   const handlDate_of_birth = (e:any) => setDateOfBirth(e.target.value);
//   const handle_id = (e:any) => set_id(e.target.value);
 

  const handleClick = () => {
    if (  Name &&
        Salary &&
        Gender &&
        Date_of_birth) {
  
   dispatch(updateEmployeeRequest(
  {  _id:userId,
    Name,
    Salary,
    Gender,
    Date_of_birth,
    skills: []
}
));
        
      
        
      setError(null);
      history.push("/home");
    } else {
      setError(error);
    }
  };

  return (
   
       <>
      <h1 >... Update Page ...</h1> 
            <form 
                className={classes.form}
                noValidate 
                autoComplete="off">
            <InputGroup>
      <InputField
                id="Name" 
                variant="outlined" 
                defaultValue={Name}
                onChange={(e: any)=> setName(e.target.value)} />
                {/* <InputLabel>Name</InputLabel> */}
                </InputGroup>
                <InputGroup>
      <InputField
                    id="Date_of_birth" 
                    type="date" 
                    variant="outlined"
                    defaultValue={Date_of_birth}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) => setDateOfBirth(e.target.value)}/>
                    {/* <InputLabel>Date_of_birth</InputLabel> */}
                    </InputGroup>
            <InputGroup>
      <InputField
                id="Gender" 
                variant="outlined"
                defaultValue={Gender}
                onChange={(e: any) => setGender(e.target.value)}/>
                {/* <InputLabel>Gender</InputLabel> */}
                </InputGroup>
          <InputGroup>
      <InputField
              id="Salary" 
              variant="outlined"
              defaultValue={Salary}
              onChange={(e: any) => setSalary(e.target.value)}/>
              {/* <InputLabel>Salary</InputLabel> */}
              </InputGroup>
          {error && error}
          <Button 
                    id="updateBtn"
                   // className={classes.insertBtn}
                    variant="contained" 
                    primary
                    onClick={handleClick}>
                    Update
                </Button>
                {/* <Button 
                    id="updateBtn"
                   // className={classes.insertBtn}
                    variant="contained" 
                    primary
                    onClick={handleClicks}>
                    Delete
                </Button>
         */}
      </form>
      </>
  );
}
