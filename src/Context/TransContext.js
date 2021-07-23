import React,{useContext,useReducer} from 'react'
import ContextReducer from './ContextReducer'
const InitialState = [];


 const TransContext = React.createContext();


export function useTrans(){

     return useContext(TransContext);
}



export function TransProvider({children}) {

     const [transaction, dispatch] = useReducer(ContextReducer, InitialState)

     //action creators
     const DeleteTransaction =(id) =>{


          dispatch({type : 'DELETE_TRANSACTION',
          payload:id,
          })
     }

      const AddTransaction = () =>{
        
        dispatch({
             type:'ADD_TRANSACTION',
             payload:transaction,
        })
     }
   
     const value={
          DeleteTransaction,AddTransaction
     }

    return (
        <TransContext.Provider value={value}>
             {children}
        </TransContext.Provider>
    )
}

export default TransProvider
