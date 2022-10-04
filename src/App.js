import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Pages/Home';
import ShowDetails from './components/Pages/ShowDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:id' element={<ShowDetails></ShowDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
