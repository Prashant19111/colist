
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contest from './components/Contest';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <h2>Co<span className="badge bg-secondary justify-content-center">List</span></h2>
    <Routes>
      <Route exact path = "/" element = {<Contest/>}></Route>
      <Route exact path = "/login" element = {<Login/>}></Route>
      <Route exact path = "/signup" element = {<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
