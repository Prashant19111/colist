
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contest from './components/Contest';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <h1> Welcome to colist </h1>
    <Routes>
      <Route path = "/" element = {<Contest/>}>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
