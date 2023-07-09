import { Route, Routes } from "react-router-dom";

import Employeereg from "./Components/Employeereg";
import Hompage from "./Components/Hompage";

function App() {
  return (
    <div >
      
  

  <Routes>
    <Route path="/Employeereact" element={<Hompage/>}/>  
    <Route path="/employeereg" element={<Employeereg/>}/>
</Routes>
    </div>
  );
}

export default App;
