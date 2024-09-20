import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import log from './log';
import Home from './home';
import Edit from './edit';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/log'  element={<log/>}/>
      <Route path='/user/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
