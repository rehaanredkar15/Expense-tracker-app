//this will  take previous state and action and then perform action according to it
const ContextReducer = (state,action) => {
     
     let transactions;
     switch (action.payload) {
         case 'ADD_TRANSACTION':
             
             transactions =  [action.payload,state];
             break;


         case 'Delete_TRANSACTION':
             
             transactions = state.filter((t) => t.id != action.payload)  //this higher order function will remove the id matching id passed to be delted
              //we have used here state because we set the state to be transaction
            
            return transactions
             break;
     
         default:
             break;
     }
}

export default ContextReducer
