import React, { useEffect, useState } from "react";
import EmployeeModel from "../../models/EmployeeModel";
import { isEmpty } from 'lodash';
import { getEmployees, isGetEmployeesLoading } from "../../redux/selector/EmployeeSelector";
import { deleteEmployeeRequest } from "../../redux/actions/EmployeeActions";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles } from '@mui/styles';
import { Link} from "react-router-dom";
import { 
    Box, Checkbox,
    CircularProgress, 
    Paper, 
    TableContainer, 
    Theme
} from '@mui/material';

import { Button, StyledTable } from "../styles/styled";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        userTable: {
            width: "100%",
            marginTop: "20px"
        },
        innerTable: {
            padding: "0px !important"
        },
        innerBox: {
            padding: "0px"
        },
        innerTableNoBottom: {
            padding: "0px !important",
            borderBottom: "0px !important"
        },
        skillsDialog: {
            width: "60%"
        },
        dialog: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            width: "30px"
        },
        paper: {
            minWidth: "60px",
            backgroundColor: 'grey',
            border: '2px solid #000',
            boxShadow: "1px 3px 1px #9E9E9E",
            padding: "0px, 0px, 0px",
        },
    }),
);

// function getSkillsSummary(skills: string[]) {
//     const summary: string = new Array(skills).join(",");
//     return summary.length > 6 ?
//         `${summary.substring(0, 6)}...` :
//         summary;
// }

// function SkillsDialog(props: {
//     openDialog: boolean,
//     handleSave:any,
//     handleClose: any
// }) {
//     const {
//         openDialog,
//         handleSave,
//         handleClose
//     } = props;
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const [inputText, setInputText] = useState('');

//     useEffect(() => {
//         setOpen(openDialog)
//     }, [props]);

//     return (
//         <Dialog
//             classes={{ paper: classes.paper }}
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="form-dialog-title">
//             <DialogTitle id="form-dialog-title">Add a skill</DialogTitle>
//             <TextField
//                 autoFocus
//                 className={classes.input}
//                 margin="dense"
//                 id="name"
//                 onChange={(e:any) => setInputText(e.target.value)}
//             />
//             <DialogActions>
//                 <Button
//                     color="primary"
//                     onClick={() => handleClose()}>
//                     Cancel
//                 </Button>
//                 <Button
//                     color="primary"
//                     onClick={() => handleSave(inputText)}>
//                     OK
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     )
// }

function Row(
    props: {
        Employee: EmployeeModel,
        handleCheck:any
    }
) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { Employee, handleCheck } = props;
    // const [open, setOpen] = useState(false);
    // const [openDialog, setOpenDialog] = useState(false);

    // const openSkillsDialog = () => {
    //     setOpenDialog(true);
    // }

    // const closeSkillsDialog = () => {
    //     setOpenDialog(false);
    // }

    // async function updateEmployeeAsync(newSkill: string) {
    //     const skills = Employee.skills;
    //     skills.push(newSkill);

    //     const request: EmployeeModel = {
    //         _id: Employee._id,
    //         Name: Employee.Name,
    //         Salary: Employee.Salary,
    //         Gender: Employee.Gender,
    //         Date_of_birth: Employee.Date_of_birth,
    //         skills: []
    //     };

    //     dispatch(updateEmployeeRequest(request));
    //     closeSkillsDialog();
    // }
  
    return (
     
      
            <tr
                className={classes.userTable}
                tabIndex={-1}
                key={Employee._id}
                role="checkbox">
                <td>
                    <Checkbox
                        id={Employee._id}
                        onChange={(event: any) => handleCheck(event, Employee._id)}
                        checked={Employee.checked}
                        inputProps={{ 'aria-labelledby': Employee._id }}/>
                </td>
                {/* <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown/>}
                    </IconButton>
                </TableCell> */}
                <td scope="Employee">
                    {Employee.Name} 
                </td>
                <td>
                    {Employee.Date_of_birth}
                </td>
                <td>
                    {Employee.Gender}
                </td>
                <td>
                {Employee.Salary} Birr
                </td>
                <td>
                <Link to={`/edit-user/${Employee._id}`}>
                <Button 
                            variant="contained"
                                        primary>Edit</Button>
                      </Link>
                {/* <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => updateEmployeeAsync(Employee._id)}>
                                    Edit
                                </Button> */}
                </td>
            </tr>
         
                                  
              
        
    );
}

export default function EmployeeTable() {
    const dispatch = useDispatch();
    const Employees: EmployeeModel[] = useSelector(getEmployees);
    const isLoading: boolean = useSelector(isGetEmployeesLoading);
    const [selectedAll, setSelectedAll] = useState(false);
    const [EmployeeList, setEmployeeList] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        setEmployeeList(Employees);
    }, [Employees]);

    useEffect(() => {
        if (!isEmpty(EmployeeList)) {
            const filter = EmployeeList.filter(s => !s.checked);
            setSelectedAll((prevChecked) => isEmpty(filter));
        }
    }, [EmployeeList]);

    const handleCheck = (event:any, id:any) => {
        const auxList = EmployeeList;
        setEmployeeList((prevList:any) => {
            const aux = prevList.map((s:any) => {
                const check = (s._id === id) ? event.target.checked :
                    s.checked;
                return {
                    _id: s._id,
                    Name: s.Name,
                    Date_of_birth: s.Date_of_birth,
                    Gender: s.Gender,
                    Salary: s.Salary,
                    skills: s.skills,
                    checked: check
                }
            });
            return aux;
        });
    }

    const handleSelectAll = (event : any) => {
        const check = event.target.checked;
        setSelectedAll(check);
        setEmployeeList((prevList:any) => {
            const aux = prevList.map((s:any) => {
                return {
                    _id: s._id,
                    Name: s.Name,
                    Date_of_birth: s.Date_of_birth,
                    Gender: s.Gender,
                    Salary: s.Salary,
                    skills: s.skills,
                    checked: check
                }
            });
            return aux;
        });
    }

    async function deleteEmployeesAsync() {
        const filter: any = EmployeeList
            .filter(s => s.checked === true)
            .map(x => x._id || '');
        if (!isEmpty(filter)) {
            dispatch(deleteEmployeeRequest(filter[0]));
        };
    }

    const LoadingCustom = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <TableContainer component={Paper}>
            {
                isLoading && (
                    <LoadingCustom />
                )
            }
            {!isLoading && (
                   <StyledTable>
           <thead>
       <tr>
                            <th>
                                <Checkbox
                                    value={selectedAll}
                                    checked={selectedAll}
                                    onChange={(event : any) => handleSelectAll(event)}
                                    inputProps={{ 'aria-label': 'Select all Employees' }} />
                            </th>
                         
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>
                                <Button
                                    variant="contained"
                                   danger
                                    onClick={() => deleteEmployeesAsync()}>
                                    Delete
                                </Button>
                            </th>
                        </tr>
                    </thead>
      
                    <tbody>
                        {EmployeeList.map((row) => {
                            return (
                                <Row
                                    key={row._id}
                                    Employee={row}
                                    handleCheck={handleCheck} />
                            );
                        })}
                   </tbody>
                </StyledTable>
            )}
             
        </TableContainer>
    );
}
