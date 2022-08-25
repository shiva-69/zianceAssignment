import './App.css';
import {HomePage} from "./Pages/HomePage"
import {Routes, Route} from "react-router-dom";
import { UpdateUser } from './Pages/UpdateUser';
function App() {
  return (
    <div>
      
      <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/update' element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
