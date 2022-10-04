import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
