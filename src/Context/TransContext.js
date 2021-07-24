import React,{useContext,useReducer} from 'react'
import ContextReducer from './ContextReducer'
const InitialState = [];


 const TransContext = React.createContext();


export function useTrans(){

     return useContext(TransContext);
}



export function TransProvider({children}) {

     const [transactions, dispatch] = useReducer(ContextReducer, InitialState)
     
     
     
     //action creators
     const DeleteTransaction =(id) =>{


          dispatch({type : 'DELETE_TRANSACTION',
          payload:id,
          })
     }

      const AddTransaction = (transaction) =>{
        
        
        dispatch({
             type:'ADD_TRANSACTION',
             payload:transaction,
        })
        
     }
   
     console.log(transactions);
     const value={
          DeleteTransaction,AddTransaction,transactions,
     }
    
    return (
        <TransContext.Provider value={value}>
            
             {children}
        </TransContext.Provider>
    )
}

export default TransProvider
