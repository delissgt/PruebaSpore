
import './App.css';
import Login from './Components/loging';
import InventoryVehicles from './Components/InventoryVehicles';
import {useEffect, useState} from 'react';

function App() {
  const [stateAuth, setStateAuth] = useState(false);



  useEffect(()=>{

    if (localStorage.getItem("login-cars-id")) {
      setStateAuth(true)
    }
  })

  if (stateAuth) {
    return (
      <div>
        <InventoryVehicles/>
      </div>

      )
  }else{
      return(
        <div className="App">
        
      
        <Login setStateAuth={setStateAuth} />
      </div>
  
      )
  }
  
}

export default App;
