// import './App.css';
import {Container,AppBar,Typography,Grow,Grid } from '@material-ui/core';
import {  Route} from 'react-router-dom';
// import Student from './components/showStudent/showStudent.js';
// import Create from './components/createStudent/createStudent.js';
// import Useredit from './components/Useredit.js';
// import useStyles from './styles';
import EmployeeForm from "../EmployeeForm";
import EmployeeTable from "../EmployeeTable";
import { makeStyles } from '@material-ui/core/styles';
function Home() {

    const useStyles = makeStyles(()=> ({
        appBar:{
        
         borderRadius:15,
         margin: '30px 0',
         display: 'flex',
         flexDirection: 'column',
         justifyContent:'center',
         alignItems:'center',
        
        }
        
        
        }))
  const classes = useStyles();
  return (
    <div className="App">
      
      <Container maxWidth="lg">
<AppBar className={ classes.appBar} position="static" color="inherit">
  {/* <Typography ></Typography> */}
  <h1>Manage Employees</h1>
</AppBar>
<Grow in>
<Container>
  <Grid container justify ="space-between">
    <Grid item xs={12} sm={7}>
    <AppBar className={classes.appBar} position="static" color="inherit">
          <EmployeeTable />
      </AppBar>
      </Grid>
      <Grid item xs={12} sm={4}>
      <AppBar className={classes.appBar} position="static" color="inherit">
          < EmployeeForm />
      </AppBar>
      </Grid>
  </Grid>
</Container>
</Grow>
      </Container>
      
    </div>
  );
}

export default Home;
