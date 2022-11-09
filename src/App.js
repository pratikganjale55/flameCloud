
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Actionplanes from './components/ActionPlanes/Actionplanes';
import Addpointer from './components/addPlanes/Addpointers';



function App() {
  return (
  <>
  <div className='App'>
  <Actionplanes/>
    
    <Routes>
      <Route path="/" element={<Actionplanes/>}/>
       <Route path="/addpointer" element={<Addpointer/>}/>
    </Routes>
  </div>
    
  
  </>

  );
}

export default App;

