import logo from './logo.svg';
import './App.css';
import Login from './Components/loging';
import InventoryVehicles from './Components/InventoryVehicles';
import { useState } from 'react';

function App() {
  const [stateAuth, setStateAuth] = useState(false);

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
