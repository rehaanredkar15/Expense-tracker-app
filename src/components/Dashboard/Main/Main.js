import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Card,CardContent,List,Typography,Divider }from "@material-ui/core";
import { CardHeader} from "@material-ui/core";
import Form from '../Main/Form/Form'

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

    return (
        <Card className={classes.root}>
      
            <CardHeader title="Expense Tracker" subheader="Made with ❤️ by Rehan"/>
             <CardContent>
               <Typography align="center" variant="h5">Current Balance:  5000 Rs </Typography>
               <Typography align="center" variant="subtitle1" style={{ lineHeight:'1.5rem',marginTop: '20px'}}>Your Wallet has 5000 Rs
                 Try Saying: Add Income for 1000Rs in Category Stocks for Monday...
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
