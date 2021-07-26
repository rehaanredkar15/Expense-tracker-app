import React,{useState,useEffect} from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import {   MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import { useTrans }  from '../../../../Context/TransContext';
import {v4 as uuidv4 } from 'uuid';
import { incomeCategories,expenseCategories} from '../../../constants/categories'
import formatDate from '../../../constants/formatDate';
import { useSpeechContext} from '@speechly/react-client'





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

  amount:"",
  category:"",
  type:'Expense',
  date: formatDate(new Date()),
  
}

const Form = () => {

    const classes = useStyles();
    const [FormData, setFormData] = useState(InitialState)
    const { segment } = useSpeechContext();
    const { AddTransaction } = useTrans();
    
    const createTransaction =() => {


        const transaction = {  ...FormData,amount:Number(FormData.amount),id:uuidv4()}
        
     
        AddTransaction(transaction);
        setFormData(InitialState)
    }

 
    useEffect(() => {
        

        //intents are actions 
        if(segment){
             
             if(segment.intent.intent === 'add_expense')
             {
               setFormData({...FormData,type:'Expense'})
             }
             else if(segment.intent.intent ==='add_income')
             {
                setFormData({...FormData,type:'Income'})
             }
             else if (segment.isFinal && segment.intent.intent === "create_transaction")
            {
              return createTransaction();
            }
             else if (segment.isFinal && segment.intent.intent === "cancel_transaction")
            {
              return setFormData(InitialState);
            }
        
           
           //enitites are amount category and etc

        segment.entities.forEach((e) => {
   
         
         switch (e.type) {

           case 'amount':
             setFormData({...FormData, amount:e.value});
             break;

          case 'category':
             setFormData({...FormData, category:e.value})
             break;

          case 'date':
              setFormData({...FormData, date:e.value})
             break;
          default:
             break;
         }


        })

        }
        
    }, [segment])
    const selectedcategories = FormData.type === 'Income' ? incomeCategories : expenseCategories;


    return (

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
             {
               segment && segment.words.map((w) => w.value).join(" ")
          
             }
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
                <Select value={FormData.category} onChange={ (e) => setFormData({...FormData,category:e.target.value})}> 
                  {selectedcategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField type="number" label="Amount" fullWidth  value={FormData.amount}  onChange={ (e) => setFormData({...FormData,amount:e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
              <TextField type="date" label="Date" fullWidth value={FormData.date} onChange={ (e) => setFormData({...FormData,date: formatDate(e.target.value)})}/>
            </Grid>
            <Button variant="outlined" color="primary" className={classes.button} fullWidth onClick={createTransaction} >Create</Button>
        </Grid>
        
    )
}

export default Form
