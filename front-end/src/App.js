
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertError from './components/AlertError';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <AlertError/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes>
      
    </div>
  );
}

export default App;
