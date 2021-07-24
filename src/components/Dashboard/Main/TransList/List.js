import React,{useContext} from 'react'
import { List as TransList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import {Delete ,MoneyOff} from '@material-ui/icons';
import { useTrans }  from '../../../../Context/TransContext';



const useStyles = makeStyles((theme) => ({

    avatarIncome: {
    color: '#fff',
    backgroundColor: 'green',
  },
  avatarExpense: {
  
    backgroundColor: 'red',
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}))

const List = () => {

     const classes = useStyles();
      
      const {DeleteTransaction}  = useTrans();

     
     const transactions= [

       { id:1,type:'Income', category:'Salary',amount:'50',date:'11 May'},
       { id:1,type:'Income', category:'Salary',amount:50,date:'11 May'},
       { id:1,type:'Income', category:'Salary',amount:50,date:'11 May'},
       { id:1,type:'Expense', category:'Sex',amount:20,date:'11 May'},
       { id:1,type:'Income', category:'Shivani ',amount:50,date:'11 May'},
       { id:1,type:'Income', category:'Shivani ',amount:50,date:'11 May'}

     ]
     return (
         <TransList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </TransList>
    )
}

export default List
