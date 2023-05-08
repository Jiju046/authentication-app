
import './App.css';
import { useEffect,useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "./firebase"
import Dashboard from './components/auth/dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  
  const [user,setUser]=useState(null)
    
  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          if(user){
              setUser(user)
              console.log(user)
          }
          else{
              setUser(null)
          }
      })
      
  },[]);

  const signOutUser=() =>{
    
      signOut(auth)
      .then(()=>{
          console.log("sign out successfull")
      })
      .catch((error)=>{
          console.log(error);
      })
  }

  return (
    <div className="App">

      {user? (<><Dashboard />
      <button className='dashboard-button' onClick={signOutUser}>Sign Out</button>
      {user &&<p>Welcome {user.email}</p>}
      </>):
      <div>
      <SignIn />
      <SignUp />
     
      </div>
      }
      
      
  
    </div>
  );
}

export default App;
