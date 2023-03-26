import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Experience from './pages/Experience';
import Qualification from './pages/Qualification';
import AboutUs from './pages/AboutUs';
import { Skeleton } from '@mui/material';
import Skills from './pages/Skills';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="AboutUs" element={<AboutUs/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Qualification"element={<Qualification/>}/>
        <Route path="Skills" element={<Skills/>}/>        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
