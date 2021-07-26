import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Card,CardContent,Typography,Divider }from "@material-ui/core";
import { CardHeader} from "@material-ui/core";
import Form from '../Main/Form/Form'
import List from '../Main/TransList/List';
import { useTrans }  from '../../../Context/TransContext';




const useStyles = makeStyles((theme) => ({
     
    root:{
       
       height:'41rem',
    },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: '20px 0',
  },
  }));


const Main = () => {
    const classes = useStyles();
    const { balance } = useTrans();

    return (
        <Card className={classes.root}>
      
            <CardHeader title="Expense Tracker" subheader="Made with ❤️ by Rehan"/>
             <CardContent>
               <Typography align="center" variant="h5">BALANCE: {balance}Rs </Typography>
               <Typography align="center" variant="subtitle2" style={{ lineHeight:'1.5rem',marginTop:'10px',marginBottom: '20px'}}>
                 Try Saying: Add Income/Expense for 7000Rs in Category Salary for Monday...
                 </Typography>
                <Divider/> 
                <Form/>
             </CardContent>
             <CardContent  className={classes.cardContent} >
            
               <Grid container spacing={2}>
                   <Grid item xs={12}>
                  
                      <List />
                   </Grid>
               </Grid>
             </CardContent>
            
        </Card>
    )
}

export default Main
