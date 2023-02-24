
import './css/App.css';
import Dashboard from './Dashboard'
import Signup from './UserAuth/Signup';
import AuthDetails from './UserAuth/AuthDetails';
import { Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  const userDetails = AuthDetails()

  return (
    
      <div className="App">
        <Signup></Signup>
        {/* <Dashboard></Dashboard> */}
      </div>


  );
}

export default App;
