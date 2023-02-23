import { AuthProvider } from './Auth';
import './css/App.css';
import Dashboard from './Dashboard'
import Signup from './Signup';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Dashboard></Dashboard>
        <Signup></Signup>
      </div>
    </AuthProvider>

  );
}

export default App;
