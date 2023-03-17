import './App.css';
import AddUser from './Compnents/AddUser';
import AllUsers from './Compnents/AllUser';
import EditUser from './Compnents/EditUser';
import Home from './Compnents/Home';
import Navbar from './Compnents/Navbar';
import NotFound from './Compnents/NotFound';
import Profile from './Compnents/Profile';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/all' element={<AllUsers/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        {/* <Route element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;