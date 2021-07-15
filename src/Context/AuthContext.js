import React,{useState,useContext,useEffect} from 'react';
import {auth} from '../firebase'




const AuthContext = React.createContext();


export function useAuth(){

    return useContext(AuthContext)
}


export  function AuthProvider({children})  {
     const [CurrentUser, setCurrentUser] = useState()
 
    


    
    //here we are creating the user 
     function signup(email,password){

        return auth.createUserWithEmailAndPassword(email, password);
     }





    //here we are setting the user that is he is a user now and the persistence is also done here
    //unsubscribe is for stopping it
     useEffect(() => {
         
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
     }, [])
    



     const value ={
         CurrentUser,
         signup
     }
   
     
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
