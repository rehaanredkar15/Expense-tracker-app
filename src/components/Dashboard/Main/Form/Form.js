import React,{useState} from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import {   MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import { useTrans }  from '../../../../Context/TransContext';

const useStyles = makeStyles((theme) => ({
     
   radioGroup:{
      
      display:'flex',
      justifyContent:'center',
      marginBottom:'-10px',
   },
   button:{
       marginTop:'20px',

   },

}));


const InitialState = {

  amount:'',
  category:'',
  type:'Income',
  data:new Date(),
}

const Form = () => {

    const classes = useStyles();
    const [FormData, setFormData] = useState(InitialState)

    const { AddTransaction } = useTrans();
    
    const createTransaction =() => {

        AddTransaction()
    }
    return (

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
             ...
            </Typography>
          </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={FormData.type} onChange={ (e) => setFormData({...FormData,type:e.target.value})}> 
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={FormData.category} onChange={ (e) => setFormData({...FormData,type:e.target.value})}> 
                  <MenuItem value="Grocery">Grocery</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField type="number" label="Amount" fullWidth  value={FormData.date}  onChange={ (e) => setFormData({...FormData,type:e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
              <TextField type="date" label="Date" fullWidth value={FormData.date} onChange={ (e) => setFormData({...FormData,type:e.target.value})}/>
            </Grid>
            <Button variant="outlined" color="primary" className={classes.button} fullWidth onClick={createTransaction} >Create</Button>
        </Grid>
        
    )
}

export default Form
